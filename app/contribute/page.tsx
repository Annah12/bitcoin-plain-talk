'use client';

import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";

export const dynamic = 'force-dynamic';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-orange-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🧡</span>
              <h1 className="text-xl font-bold text-gray-900">Bitcoin Plain Talk</h1>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/glossary" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                Glossary
              </Link>
              <Link href="/contribute" className="text-sm font-medium text-orange-600">
                Contribute
              </Link>
              <LanguageSelector />
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
            Contribute to Bitcoin Plain Talk
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Help make Bitcoin understandable for everyone
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12 rounded-2xl border border-orange-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-gray-900">Why Contribute?</h3>
            <p className="mt-4 text-gray-700">
              Bitcoin documentation is written by developers, for developers. But Bitcoin is for everyone.
            </p>
            <p className="mt-4 text-gray-700">
              When someone in Nairobi reads "UTXO" or "mempool" or "hashrate" for the first time,
              they shouldn't need to decode a whitepaper to understand what it means. They deserve an
              explanation that respects their intelligence without assuming their background.
            </p>
            <p className="mt-4 text-gray-700">
              <strong>You don't need to be a developer to contribute.</strong> If you can explain
              something clearly — you belong here.
            </p>
          </section>

          {/* How to Contribute */}
          <section className="mb-12 rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="text-2xl font-bold text-orange-500">How to Contribute</h3>

            <div className="mt-6 space-y-8">
              {/* Option 1 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900">1. Add a New Term</h4>
                <ol className="mt-4 space-y-2 text-gray-700">
                  <li>• Fork the repository on GitHub</li>
                  <li>• Navigate to <code className="rounded bg-orange-200 px-2 py-1 text-sm">/glossary</code></li>
                  <li>• Copy the <code className="rounded bg-orange-200 px-2 py-1 text-sm">_template.md</code> file</li>
                  <li>• Fill in the term, explanation, analogy, example, and translation</li>
                  <li>• Submit a Pull Request</li>
                </ol>
              </div>

              {/* Option 2 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900">2. Improve an Existing Explanation</h4>
                <p className="mt-4 text-gray-700">
                  Found an explanation that's still confusing? Open an issue or submit a PR with a clearer version.
                </p>
              </div>

              {/* Option 3 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900">3. Add a Translation</h4>
                <p className="mt-4 text-gray-700">
                  We need explanations in Swahili, Yoruba, Amharic, Hausa, Zulu, Pidgin, and more.
                  If you speak a language, you can contribute.
                </p>
              </div>

              {/* Option 4 */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900">4. Review Contributions</h4>
                <p className="mt-4 text-gray-700">
                  Read through open PRs and give feedback. Plain language is hard — a second pair of eyes always helps.
                </p>
              </div>
            </div>
          </section>

          {/* Contribution Guidelines */}
          <section className="mb-12 rounded-2xl border border-orange-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-orange-500">Contribution Guidelines</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Write like you're explaining to a smart friend who is new to Bitcoin</li>
              <li>• Avoid using other Bitcoin jargon in your explanation (or explain those terms too)</li>
              <li>• Analogies should feel familiar to everyday African life where possible</li>
              <li>• Keep explanations concise — if it's longer than a paragraph, it's probably too long</li>
              <li>• Be kind in reviews — this project is built for beginners, and so are many of our contributors</li>
            </ul>
          </section>

          {/* Term Structure */}
          <section className="mb-12 rounded-2xl border border-orange-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-orange-500">Term Entry Structure</h3>
            <p className="mt-4 text-gray-700">Each glossary entry should include:</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• <strong>The term</strong> — exactly as you'll encounter it</li>
              <li>• <strong>Plain language explanation</strong> — no jargon, no assumptions</li>
              <li>• <strong>Real-world analogy</strong> — something familiar to anchor the concept</li>
              <li>• <strong>Example in context</strong> — how it actually shows up in Bitcoin</li>
              <li>• <strong>Translation</strong> — Swahili (and growing to other African languages)</li>
            </ul>

            <div className="mt-6 rounded-lg bg-gray-100 p-4">
              <p className="text-sm font-semibold text-gray-900">Example: Mempool</p>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Plain English:</strong> A waiting room for Bitcoin transactions that haven't been confirmed yet.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Analogy:</strong> Imagine sending a letter. Before it gets delivered, it sits in a sorting
                room at the post office. The mempool is that sorting room.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                <strong>In context:</strong> "My transaction has been stuck in the mempool for an hour."
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12 rounded-2xl border-2 border-orange-400 bg-gradient-to-b from-orange-50 to-orange-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Ready to Contribute?</h3>
            <p className="mt-4 text-lg text-gray-700">
              Every explanation you add helps someone understand Bitcoin better.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com/wandiamugo/bitcoin-plain-talk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
              >
                View on GitHub →
              </a>
              <Link
                href="/glossary"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-600 bg-transparent px-8 py-3 font-semibold text-orange-700 transition-colors hover:bg-orange-50"
              >
                Browse Glossary
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              Built with 🧡 by{" "}
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
