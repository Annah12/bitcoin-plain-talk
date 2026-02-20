import { Suspense } from 'react';
import GlossaryPageContent from './GlossaryPageContent';

export default function GlossaryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <GlossaryPageContent />
    </Suspense>
  );
}
