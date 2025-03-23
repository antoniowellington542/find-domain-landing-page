// middleware/rateLimit.ts
import { NextRequest, NextResponse } from 'next/server';

interface RateLimitStore {
    [ip: string]: number[];
}

declare global {
    var rateLimitStore: RateLimitStore;
}

export function rateLimit(req: NextRequest, res: NextResponse) {
    const rateLimitWindow = 60 * 1000; // 1 minute
    const maxRequests = 2; // Max requests per window (per minute)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '';

    if (!global.rateLimitStore) {
        global.rateLimitStore = {}; // Initialize store if not yet defined
    }

    if (!global.rateLimitStore[ip]) {
        global.rateLimitStore[ip] = [];
    }

    const now = Date.now();
    global.rateLimitStore[ip] = global.rateLimitStore[ip].filter(
        (timestamp) => now - timestamp < rateLimitWindow
    );

    if (global.rateLimitStore[ip].length >= maxRequests) {
        return NextResponse.json(
            { error: 'Too many requests, please try again later.' },
            { status: 429 }
        );
    }

    global.rateLimitStore[ip].push(now);
    return null; // Allow the request to continue
}
