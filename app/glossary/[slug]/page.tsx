'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import LanguageSelector from '@/components/LanguageSelector';
import { useEffect, useState, use } from 'react';
import type { Term } from '@/lib/glossary';

export default function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en';
  const [term, setTerm] = useState<Term | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerm = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/terms/${slug}?lang=${currentLang}`);
        if (response.ok) {
          const data = await response.json();
          setTerm(data);
        } else {
          setTerm(null);
        }
      } catch (error) {
        console.error('Failed to fetch term:', error);
        setTerm(null);
      } finally {
        setLoading(false);
      }
    };
    fetchTerm();
  }, [slug, currentLang]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!term) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Term not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-orange-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🧡</span>
              <h1 className="text-xl font-bold text-gray-900">Bitcoin Plain Talk</h1>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/glossary" className="text-sm font-medium text-orange-600">
                Glossary
              </Link>
              <Link href="/contribute" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                Contribute
              </Link>
              <LanguageSelector />
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link href="/glossary" className="hover:text-orange-600">Glossary</Link>
          <span>/</span>
          <span className="text-gray-900">{term.title}</span>
        </nav>

        {/* Term Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
                {term.title}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  {term.category}
                </span>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                  {currentLang === 'en' ? 'English' : 'Swahili'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Plain English / Maelezo Rahisi */}
          <section className="rounded-2xl border border-orange-200 bg-white p-8">
            <h2 className="mb-4 text-2xl font-bold text-orange-500">
              {currentLang === 'sw' ? 'Maelezo Rahisi' : 'Plain English'}
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">{term.plainEnglish}</p>
          </section>

          {/* Analogy / Mfano wa Kila Siku */}
          {term.analogy && (
            <section className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-500">
                {currentLang === 'sw' ? 'Mfano wa Kila Siku' : 'Analogy'}
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">{term.analogy}</p>
            </section>
          )}

          {/* In Context / Jinsi Inavyotumiwa */}
          {term.inContext && (
            <section className="rounded-2xl border border-orange-200 bg-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-500">
                {currentLang === 'sw' ? 'Jinsi Inavyotumiwa' : 'In Context'}
              </h2>
              <blockquote className="border-l-4 border-orange-400 pl-6 italic text-lg text-gray-700">
                "{term.inContext}"
              </blockquote>
              {term.contextMeaning && (
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-900">
                    {currentLang === 'sw' ? 'Maana yake:' : 'What this means:'}
                  </span>{' '}
                  {term.contextMeaning}
                </p>
              )}
            </section>
          )}

          {/* Why It Matters / Kwa Nini Ni Muhimu */}
          {term.whyItMatters && (
            <section className="rounded-2xl border border-orange-200 bg-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-500">
                {currentLang === 'sw' ? 'Kwa Nini Ni Muhimu' : 'Why It Matters'}
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">{term.whyItMatters}</p>
            </section>
          )}

          {/* Related Terms / Maneno Yanayohusiana */}
          {term.relatedTerms.length > 0 && (
            <section className="rounded-2xl border border-orange-200 bg-white p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-500">
                {currentLang === 'sw' ? 'Maneno Yanayohusiana' : 'Related Terms'}
              </h2>
              <ul className="space-y-2">
                {term.relatedTerms.map((relatedTerm) => (
                  <li key={relatedTerm}>
                    <Link
                      href={`/glossary/${relatedTerm.toLowerCase().replace(/\s+/g, '-')}?lang=${currentLang}`}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 hover:underline"
                    >
                      → {relatedTerm}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            ← Back to Glossary
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-orange-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              Built with 🧡 by{' '}
              <a
                href="https://twitter.com/wandiology"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 hover:text-orange-700"
              >
                @wandiology
              </a>
            </p>
            <p className="text-sm text-gray-600">
              MIT License — Free to use, share, and build on
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
