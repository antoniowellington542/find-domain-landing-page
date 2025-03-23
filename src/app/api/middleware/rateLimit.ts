// middleware/rateLimit.ts
import { NextRequest, NextResponse } from 'next/server';

// Use a Map to store rate limit data
const rateLimitStore = new Map<string, number[]>();

export function rateLimit(req: NextRequest) {
    const rateLimitWindow = 60 * 1000; // 1 minute
    const maxRequests = 4; // Max requests per window (per minute)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '';

    if (!rateLimitStore.has(ip)) {
        rateLimitStore.set(ip, []);
    }

    const now = Date.now();
    const timestamps = rateLimitStore.get(ip)!;

    // Filter out requests that are outside the rate limit window
    rateLimitStore.set(ip, timestamps.filter((timestamp) => now - timestamp < rateLimitWindow));

    // If the number of requests exceeds the maxRequests, return rate-limited response
    if (rateLimitStore.get(ip)!.length >= maxRequests) {
        return NextResponse.json(
            { error: 'Too many requests, please try again later.' },
            { status: 429 }
        );
    }

    // Add the current timestamp to the store
    rateLimitStore.get(ip)!.push(now);

    return null; // Allow the request to continue
}
