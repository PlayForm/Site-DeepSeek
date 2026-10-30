// One tool call as a sequence: who sends what to whom, in order, with the seam
// each dispatch fires. The research drew this form by hand; the site computes
// it from the data so a message added here moves every label with it.
export interface Message {
	/** The participant the message leaves. */
	From: string;
	/** The participant it arrives at. */
	To: string;
	/** The event the message carries. */
	Label: string;
	/** The seam the dispatch fires, when it fires one. */
	Seam?: string;
	/** True when the log keeps the message. */
	Durable?: boolean;
}

export const Actor = ["Model", "Agent", "Tools", "Tool body", "Disk"];

export const Message: Message[] = [
	{ From: "Model", To: "Agent", Label: "tool/call", Durable: true },
	{ From: "Agent", To: "Tools", Label: "the call", Seam: "tools/pre-execute" },
	{ From: "Tools", To: "Tool body", Label: "dispatch", Seam: "tools/execute" },
	{ From: "Tool body", To: "Disk", Label: "write", Durable: true },
	{ From: "Tool body", To: "Tools", Label: "the result" },
	{ From: "Tools", To: "Agent", Label: "the result", Seam: "tools/post-execute" },
	{ From: "Agent", To: "Model", Label: "tool/result", Durable: true },
];

export default Message;
