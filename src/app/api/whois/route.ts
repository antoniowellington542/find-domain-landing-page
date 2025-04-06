import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';
import { whoisConfig } from "@/config/whoisConfig";
import { rateLimit } from '@/app/api/middleware/rateLimit';

// Definição do método GET
export async function GET(req: NextRequest) {
    const rateLimitResponse = rateLimit(req);

    if (rateLimitResponse) {
        return rateLimitResponse; // If rate-limiting is triggered, return the response
    }

    const { searchParams } = new URL(req.url);
    const domain = searchParams.get('domain');

    if (!domain) {
        return NextResponse.json({ error: 'Missing domain parameter' }, { status: 400 });
    }

    try {
        const response = await axios.get(`https://api.whoisfreaks.com/v1.0/whois?apiKey=${whoisConfig.whoisFreaksApiKey}&whois=live&domainName=${domain}`);
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch Whois data', details: error },
            { status: 500 }
        );
    }
}
