import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const user = sqliteTable("user", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	username: text("username").notNull(),
	email: text("email").notNull(),
	password: text("password").notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch('now'))`),
})

export type User = typeof user.$inferSelect
export type NewUser = typeof user.$inferInsert
