import { json } from "@remix-run/cloudflare"

export const loader = () => {
	return json({ environment: process.env.NODE_ENV })
}
