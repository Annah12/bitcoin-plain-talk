import { NextRequest, NextResponse } from 'next/server';
import { getAllTerms } from '@/lib/glossary';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || 'en';

  try {
    const terms = getAllTerms(lang);
    return NextResponse.json(terms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch terms' }, { status: 500 });
  }
}
