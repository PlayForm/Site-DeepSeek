// Development-only surfaces. The component library exists so the site can be
// worked on; it is not part of the published site, so the flag gates both its
// routes and every link to them.
//
// `SITE_DEV=1` forces the development surfaces on a production build, which is
// how a release candidate is checked before it ships.
export const Dev = process.env["SITE_DEV"] === "1" || process.env["NODE_ENV"] === "development";

export default Dev;
