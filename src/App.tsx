/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExploreAppsSection } from './components/ExploreAppsSection';
import { FocusSection } from './components/FocusSection';
import { Footer, type LegalDocumentType } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InfoModal } from './components/InfoModal';
import { Navbar } from './components/Navbar';

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDocumentType | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExploreAppsSection />
        <FocusSection />
        <ContactSection />
      </main>

      <Footer onOpenLegal={(doc) => setLegalDoc(doc)} />

      <InfoModal legalDoc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
