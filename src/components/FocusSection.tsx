import { Gamepad2, Wrench } from 'lucide-react';
import { FOCUS_CATEGORIES } from '../data/siteContent';

export function FocusSection() {
  return (
    <section id="focus" className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-blue-700">Our Focus</p>
          <h2 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Two dedicated areas of mobile development
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Every Droids release belongs to one of two core disciplines, each built around clarity and usability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {FOCUS_CATEGORIES.map((item, idx) => {
            const isGames = item.category === 'Mobile Games';
            const Icon = isGames ? Gamepad2 : Wrench;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.summary}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5 text-sm text-slate-700">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-baseline gap-2.5">
                        <span className="text-blue-700" aria-hidden="true">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
