// The eight axes a reader actually turns, gathered from the configuration
// tables the packages document. The setup page shows them as one matrix,
// because a reader setting a package up is choosing values on axes, not reading
// eight separate tables.
//
// Each value is a phrase rather than a schema: the exact field, its type, and
// its default live on the package page, which reads them from the README.
export interface Axis {
	/** The axis, named as the packages name it. */
	Name: string;
	/** What the package ships with. */
	Default: string;
	/** What a reader turns it to, and the effect. */
	Turn: string;
}

export const Axis: Axis[] = [
	{
		Name: "enabled",
		Default: "off in most workspace packages",
		Turn: "on: the listener stops returning the payload untouched",
	},
	{
		Name: "log",
		Default: "on",
		Turn: "off: the ledger line is not written, the behavior is unchanged",
	},
	{
		Name: "logFile",
		Default: "a path under the profile",
		Turn: "a path of your own, or empty to keep the ledger in memory",
	},
	{
		Name: "domain",
		Default: "the package's own name",
		Turn: "another domain: a second instance writes its own records",
	},
	{
		Name: "targets",
		Default: "the tools the README lists",
		Turn: "a shorter list: the hook stops touching the tools you leave out",
	},
	{
		Name: "exempt",
		Default: "the tools that must pass untouched",
		Turn: "a longer list: a tool you add here never reaches the hook's body",
	},
	{
		Name: "replacement",
		Default: "the one the README documents",
		Turn: "another character or string: the normalizer writes what you name",
	},
	{
		Name: "threshold",
		Default: "the size the README documents",
		Turn: "a smaller number: the hook acts sooner and on more results",
	},
];

export default Axis;
