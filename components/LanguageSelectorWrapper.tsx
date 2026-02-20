'use client';

import { Suspense } from 'react';
import LanguageSelector from './LanguageSelector';

export default function LanguageSelectorWrapper() {
  return (
    <Suspense fallback={
      <div className="rounded-lg border border-orange-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900">
        English
      </div>
    }>
      <LanguageSelector />
    </Suspense>
  );
}
