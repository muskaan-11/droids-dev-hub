import { ArrowUpRight, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPLORE_APPS_CONTENT, SITE_CONFIG } from '../data/siteContent';

export function ExploreAppsSection() {
  return (
    <section id="apps" className="border-b border-slate-200/80 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 sm:p-12 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue-700">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-blue-700">
                  {EXPLORE_APPS_CONTENT.kicker}
                </p>
              </div>

              <h2 className="mt-5 text-balance font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {EXPLORE_APPS_CONTENT.heading}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {EXPLORE_APPS_CONTENT.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={SITE_CONFIG.playStoreDeveloperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto sm:text-base"
              >
                <span>{EXPLORE_APPS_CONTENT.ctaLabel}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
