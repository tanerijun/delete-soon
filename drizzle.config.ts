import type { Config } from "drizzle-kit"

export default {
	schema: "./app/lib/schema.server.ts",
	out: "drizzle/migrations/",
	breakpoints: true,
} satisfies Config
