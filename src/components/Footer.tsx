import { SITE_CONFIG } from '../data/siteContent';

export type LegalDocumentType = 'privacy' | 'terms';

interface FooterProps {
  onOpenLegal: (doc: LegalDocumentType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect width="28" height="28" rx="7" fill="#0F172A" />
              <path
                d="M9 8.5H13.75C17.2018 8.5 20 11.1863 20 14.5C20 17.8137 17.2018 20.5 13.75 20.5H9V8.5Z"
                stroke="#FFFFFF"
                strokeWidth="2.2"
              />
              <circle cx="13.5" cy="14.5" r="1.75" fill="#3B82F6" />
            </svg>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              {SITE_CONFIG.brandName}
            </span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-600">
            <a
              href="#about"
              className="transition-colors hover:text-slate-900 hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-slate-900 hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="transition-colors hover:text-slate-900 hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="transition-colors hover:text-slate-900 hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Terms &amp; Conditions
            </button>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>Copyright © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}</p>
          <p>Independent Mobile App &amp; Game Developer</p>
        </div>
      </div>
    </footer>
  );
}
