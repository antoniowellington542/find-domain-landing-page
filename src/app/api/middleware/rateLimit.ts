import { NextRequest, NextResponse } from "next/server"

const rateLimitStore = new Map<string, number[]>()

export function rateLimit(req: NextRequest) {
    const rateLimitWindow = 60 * 1000
    const maxRequests = 4
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || ""

    if (!rateLimitStore.has(ip)) {
        rateLimitStore.set(ip, [])
    }

    const now = Date.now()
    const timestamps = rateLimitStore.get(ip)!

    rateLimitStore.set(ip, timestamps.filter((timestamp) => now - timestamp < rateLimitWindow))

    if (rateLimitStore.get(ip)!.length >= maxRequests) {
        return NextResponse.json(
            { error: "Too many requests, please try again later." },
            { status: 429 }
        );
    }

    rateLimitStore.get(ip)!.push(now)

    return null
}
