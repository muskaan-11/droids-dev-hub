import { useState } from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_CONTENT, SITE_CONFIG } from '../data/siteContent';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-slate-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[520px] rounded-full bg-blue-100/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-sm font-medium tracking-normal text-blue-700">
              {HERO_CONTENT.kicker}
            </p>

            <h1 className="mt-4 max-w-xl text-balance font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-slate-900">
              {HERO_CONTENT.heading}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#apps"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm sm:min-h-[360px]">
              {!imageError ? (
                <img
                  src={SITE_CONFIG.heroImage}
                  alt="Minimalist mobile devices displaying clean application interfaces on a light architectural surface"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200/70 p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-700">
                    <Smartphone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="font-display text-base font-semibold text-slate-900">
                    {SITE_CONFIG.brandName}
                  </p>
                  <p className="max-w-xs text-sm text-slate-600">
                    Practical mobile utilities and engaging games built for everyday use.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
