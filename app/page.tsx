'use client';

import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import LanguageSelector from "@/components/LanguageSelector";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-orange-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧡</span>
              <h1 className="text-xl font-bold text-gray-900">Bitcoin Plain Talk</h1>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/glossary" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Making Bitcoin understandable for{" "}
            <span className="text-orange-500">everyone</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700 sm:text-xl">
            No finance degree required. No developer background needed. Just clear, honest
            explanations written by real people, for real people — starting with Africa.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex justify-center">
            <SearchBar variant="hero" />
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">50+</div>
              <div className="mt-1 text-sm text-gray-600">Bitcoin Terms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">2</div>
              <div className="mt-1 text-sm text-gray-600">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">100%</div>
              <div className="mt-1 text-sm text-gray-600">Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Terms */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Terms
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Start your Bitcoin journey with these essential concepts
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Term Card 1 */}
            <div className="group rounded-2xl border border-orange-200 bg-white p-6 transition-all hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100">
              <div className="flex items-start justify-between">
                <h4 className="text-xl font-semibold text-gray-900">Mempool</h4>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">EN</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                A waiting room for Bitcoin transactions that haven't been confirmed yet.
              </p>
              <Link href="/glossary/mempool" className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700">
                Read more →
              </Link>
            </div>

            {/* Term Card 2 */}
            <div className="group rounded-2xl border border-orange-200 bg-white p-6 transition-all hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100">
              <div className="flex items-start justify-between">
                <h4 className="text-xl font-semibold text-gray-900">UTXO</h4>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">EN</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Unspent Transaction Output — the pieces of bitcoin you actually own and can spend.
              </p>
              <Link href="/glossary/utxo" className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700">
                Read more →
              </Link>
            </div>

            {/* Term Card 3 */}
            <div className="group rounded-2xl border border-orange-200 bg-white p-6 transition-all hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100">
              <div className="flex items-start justify-between">
                <h4 className="text-xl font-semibold text-gray-900">Hashrate</h4>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">EN</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                The total computing power securing the Bitcoin network — think of it as the network's heartbeat.
              </p>
              <Link href="/glossary/hashrate" className="mt-4 inline-flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700">
                Read more →
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Browse All Terms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-orange-50 to-orange-100 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Help Build Bitcoin Education for Africa
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            You don't need to be a developer to contribute. If you can explain something clearly — you belong here.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
            >
              Start Contributing
            </Link>
            <a
              href="https://github.com/wandiamugo/bitcoin-plain-talk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-600 bg-transparent px-8 py-3 font-semibold text-orange-700 transition-colors hover:bg-orange-50"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              Built with 🧡 by{" "}
              <a href="https://twitter.com/wandiology" target="_blank" rel="noopener noreferrer" className="font-medium text-orange-600 hover:text-orange-700">
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
