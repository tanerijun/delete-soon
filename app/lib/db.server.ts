import { drizzle } from "drizzle-orm/d1"
import * as schema from "./schema.server"

const contextWithDb = (context: Record<string, unknown>): context is { DB: D1Database } => {
	return "DB" in context
}

export const getDb = (context: Record<string, unknown>) => {
	if (!contextWithDb(context)) {
		throw new Error("No database in context")
	}

	return drizzle(context.DB, { schema })
}
