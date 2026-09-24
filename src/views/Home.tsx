import { ArrowRight, Camera } from 'lucide-react';
import { articles, photoEssays } from '../data/magazine';
import PlotStamp from '../components/PlotStamp';
import type { Route } from '../App';

interface HomeProps {
  onNavigate: (route: Route) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [lead, ...rest] = articles;

  return (
    <div className="city-grid">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
        <p className="reveal font-mono text-[11px] uppercase tracking-widest text-signal">
          Issue 31 — Summer 2026 — Proximity
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <button
              onClick={() => onNavigate({ name: 'article', id: lead.id })}
              className="group block text-left"
            >
              <h1 className="reveal display-tight font-display text-5xl font-black uppercase sm:text-7xl lg:text-8xl" style={{ animationDelay: '80ms' }}>
                The Six-<br />Minute<br />
                <span className="text-signal transition-colors group-hover:text-signal-dark">Block</span>
              </h1>
            </button>
            <p className="reveal mt-6 max-w-lg text-xl leading-relaxed text-concrete-800" style={{ animationDelay: '160ms' }}>
              {lead.dek}
            </p>
            <div className="reveal mt-6 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
              <PlotStamp plot={lead.plot} district={lead.district} coordinates={lead.coordinates} />
              <button
                onClick={() => onNavigate({ name: 'article', id: lead.id })}
                className="group inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-concrete-50 transition-colors hover:bg-signal"
              >
                Read the feature
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="reveal lg:col-span-5" style={{ animationDelay: '200ms' }}>
            <button
              onClick={() => onNavigate({ name: 'article', id: lead.id })}
              className="group block w-full overflow-hidden border border-ink/20"
            >
              <img
                src={lead.image}
                alt={lead.imageCaption}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
              {lead.imageCaption} — {lead.author}, {lead.date}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-concrete-50/70">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-black uppercase tracking-tight">Features</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-concrete-600">
              Field-verified reporting
            </span>
          </div>
          <div className="grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
            {rest.map((a) => (
              <button
                key={a.id}
                onClick={() => onNavigate({ name: 'article', id: a.id })}
                className="group flex flex-col bg-concrete-50 text-left transition-colors hover:bg-concrete-100"
              >
                <div className="overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.imageCaption}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                    {a.kicker} — {a.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight group-hover:underline group-hover:decoration-signal group-hover:decoration-2 group-hover:underline-offset-4">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-concrete-800">{a.dek}</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
                    {a.author} — {a.readMinutes} min — {a.plot}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-ink text-concrete-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="flex items-center gap-3 font-display text-2xl font-black uppercase tracking-tight">
              <Camera size={20} className="text-signal" /> Photo essays
            </h2>
            <button
              onClick={() => onNavigate({ name: 'essays' })}
              className="font-mono text-[10px] uppercase tracking-widest text-concrete-300 transition-colors hover:text-signal"
            >
              View all →
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {photoEssays.map((e) => (
              <button
                key={e.id}
                onClick={() => onNavigate({ name: 'essay', id: e.id })}
                className="group text-left"
              >
                <div className="overflow-hidden border border-concrete-50/20">
                  <img
                    src={e.cover}
                    alt={e.title}
                    className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-signal">
                  {e.frames.length} frames — {e.district}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight group-hover:underline group-hover:decoration-signal group-hover:decoration-2 group-hover:underline-offset-4">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-concrete-300">Photographs by {e.photographer}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
