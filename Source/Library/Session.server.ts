// A real session log, read at build time. The harness writes one
// `session.v4.jsonl.zstd` per session under `~/.dsh/sessions`, one JSON record
// per line, and the record's `type` is the event name.
//
// The site is static, so this reader is a build-time convenience with a hard
// fallback: when no log is reachable (a Cloudflare build has none), the trace
// page renders the authored fixture instead, and says which one it is. A live
// source is never fetched at runtime.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { zstdDecompressSync } from "node:zlib";

import type { Record } from "@Content/Trace";

export interface Session {
	/** True when the page is reading a real log rather than the fixture. */
	Live: boolean;
	/** The log's path, when one was read. */
	Path?: string;
	/** The records, in the order the log writes them. */
	Record: Record[];
	/** Why the reader fell back, when it did. */
	Note?: string;
}

// The event name's first segment decides the kind the document groups by.
function KindOf(Type: string): Record["Kind"] {
	switch (true) {
		case Type.startsWith("turn/"):
			return "turn";
		case Type.startsWith("step/"):
			return "step";
		case Type.startsWith("tool/"):
			return "tool";
		case Type.startsWith("session/"):
			return "session";
		default:
			return "message";
	}
}

// What a record proves, said without inventing a field the log does not carry.
function ProvesOf(Type: string): string {
	const Known: Record<string, string> = {
		"turn/start": "a turn opened",
		"turn/end": "the turn closed",
		"step/start": "a step began",
		"step/end": "the step closed",
		"user/message": "the user's input as committed",
		"assistant/message": "the model's text as settled",
		"system/message": "the prompt the model read",
		"request/header": "the model and the controls of the call",
		"tool/call": "the call the model asked for",
		"tool/result": "the result the model read next",
	};

	return Known[Type] ?? `the log recorded ${Type}`;
}

// The newest log that has more than its header line. A session directory is
// created before it is written, so the newest one is often empty.
function Newest(): string | undefined {
	const Root = join(homedir(), ".dsh", "sessions");

	if (!existsSync(Root)) return undefined;

	let Best: { Path: string; Time: number } | undefined;

	for (const Directory of readdirSync(Root)) {
		const Session = join(Root, Directory);

		if (!statSync(Session).isDirectory()) continue;

		for (const Entry of readdirSync(Session)) {
			const Path = join(Session, Entry, "session.v4.jsonl.zstd");

			if (!existsSync(Path)) continue;

			const Time = statSync(Path).mtimeMs;

			if (Best === undefined || Time > Best.Time) Best = { Path, Time };
		}
	}

	return Best?.Path;
}

function Load(): Session {
	const Path = process.env["DSH_SESSION"] ?? Newest();

	if (Path === undefined || !existsSync(Path)) {
		return { Live: false, Record: [], Note: "no session log was reachable at build time" };
	}

	let Text: string;

	try {
		// The harness appends a frame per write, so the file holds several
		// concatenated frames and the in-process decompressor stops after the
		// first. The CLI reads them all, and the reader degrades to the fixture
		// when the binary is not there.
		Text = execFileSync("zstd", ["-dc", Path], { maxBuffer: 256 * 1024 * 1024 }).toString(
			"utf8",
		);
	} catch (Error) {
		try {
			Text = zstdDecompressSync(readFileSync(Path)).toString("utf8");
		} catch (Second) {
			return {
				Live: false,
				Record: [],
				Note: `the log at ${Path} could not be decompressed`,
			};
		}
	}

	const Line = Text.trim().split("\n").filter(Boolean);
	const Record: Record[] = [];

	for (const Entry of Line) {
		let Event: { type?: string; seq?: number };

		try {
			Event = JSON.parse(Entry);
		} catch {
			continue;
		}

		if (Event.type === undefined || Event.seq === undefined) continue;
		if (Event.type === "session") continue;

		Record.push({
			Index: Event.seq,
			Name: Event.type,
			Kind: KindOf(Event.type),
			Proves: ProvesOf(Event.type),
			Durable: true,
		});
	}

	if (Record.length === 0) {
		return { Live: false, Record: [], Note: "the newest log had no records" };
	}

	return { Live: true, Path, Record: Record.slice(0, 40) };
}

export const Session = Load();

export default Session;
