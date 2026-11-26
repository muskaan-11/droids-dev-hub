import { useEffect } from 'react';
import { X } from 'lucide-react';
import { LEGAL_DOCUMENTS } from '../data/siteContent';
import type { LegalDocumentType } from './Footer';

interface InfoModalProps {
  legalDoc: LegalDocumentType | null;
  onClose: () => void;
}

export function InfoModal({ legalDoc, onClose }: InfoModalProps) {
  const isOpen = legalDoc !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !legalDoc) return null;

  const documentData = LEGAL_DOCUMENTS[legalDoc];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-medium text-slate-500">{documentData.updated}</p>
            <h2
              id="modal-title"
              className="mt-1 font-display text-xl font-bold text-slate-900"
            >
              {documentData.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-slate-600">
          {documentData.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display text-sm font-semibold text-slate-900">
                {section.heading}
              </h3>
              <p className="mt-1.5">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-end border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
