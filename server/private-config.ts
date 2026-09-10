import "server-only";

export function getCatalogOwner() { return process.env.CATALOG_OWNER ? "the catalog team" : "the course team"; }
