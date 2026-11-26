import { ABOUT_CONTENT } from '../data/siteContent';

export function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-blue-700">About Droids</p>
            <h2 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {ABOUT_CONTENT.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {ABOUT_CONTENT.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {ABOUT_CONTENT.principles.map((principle) => (
                <div
                  key={principle.index}
                  className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <h3 className="font-display text-base font-semibold text-slate-900">
                      <span className="mr-2 font-normal text-slate-400 tabular-nums">
                        {principle.index}
                      </span>
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 sm:col-span-8 sm:text-base">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
