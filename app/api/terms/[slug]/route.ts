import { NextRequest, NextResponse } from 'next/server';
import { getTermBySlug } from '@/lib/glossary';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || 'en';

  try {
    const term = getTermBySlug(slug, lang);
    if (!term) {
      return NextResponse.json({ error: 'Term not found' }, { status: 404 });
    }
    return NextResponse.json(term);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch term' }, { status: 500 });
  }
}
