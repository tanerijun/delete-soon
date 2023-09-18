import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare"
import { getDb } from "~/lib/db.server"

export const meta: MetaFunction = () => {
	return [
		{ title: "CitrusTube" },
		{
			name: "description",
			content: "A citrus-flavored video sharing platform inspired by Youtube",
		},
	]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
	// console.log("hello from loader")
	// const db = getDb(context)
	// const user = await db.query.user.findFirst()
	// console.log(user)
	// console.log(process.env.NODE_ENV)

	return null
}

export default function Index() {
	return (
		<div>
			<h1 className="text-red-500">Hello World</h1>
		</div>
	)
}
