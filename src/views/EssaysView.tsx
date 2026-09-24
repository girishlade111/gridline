import { useEffect } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { photoEssays } from '../data/magazine';
import type { Route } from '../App';

interface EssaysViewProps {
  essayId?: string;
  onNavigate: (route: Route) => void;
}

export default function EssaysView({ essayId, onNavigate }: EssaysViewProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [essayId]);

  const essay = essayId ? photoEssays.find((e) => e.id === essayId) : undefined;

  if (essayId && !essay) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-concrete-600">
          Essay not found.
        </p>
        <button
          onClick={() => onNavigate({ name: 'essays' })}
          className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-concrete-50 hover:bg-signal"
        >
          <ArrowLeft size={14} /> All photo essays
        </button>
      </div>
    );
  }

  if (essay) {
    return (
      <div className="bg-ink text-concrete-50">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-8">
          <button
            onClick={() => onNavigate({ name: 'essays' })}
            className="reveal mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-concrete-300 transition-colors hover:text-signal"
          >
            <ArrowLeft size={14} /> All photo essays
          </button>
          <p className="reveal font-mono text-[11px] uppercase tracking-widest text-signal" style={{ animationDelay: '60ms' }}>
            Photo essay — {essay.date} — {essay.district}
          </p>
          <h1 className="reveal display-tight mt-4 font-display text-4xl font-black uppercase sm:text-6xl" style={{ animationDelay: '120ms' }}>
            {essay.title}
          </h1>
          <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-concrete-300" style={{ animationDelay: '180ms' }}>
            {essay.dek}
          </p>
          <p className="reveal mt-3 font-mono text-[10px] uppercase tracking-widest text-concrete-400" style={{ animationDelay: '220ms' }}>
            Photographs by {essay.photographer}
          </p>

          <div className="mt-14 space-y-16">
            {essay.frames.map((f, i) => (
              <figure key={i} className={i % 2 === 1 ? 'sm:ml-auto sm:w-4/5' : 'sm:w-11/12'}>
                <div className="border border-concrete-50/20">
                  <img src={f.image} alt={f.caption} className="w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-6">
                  <span className="max-w-xl text-sm leading-relaxed text-concrete-300">{f.caption}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-signal">
                    FR-{String(i + 1).padStart(2, '0')} — {f.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 border-t border-concrete-50/15 pt-6 font-mono text-[10px] uppercase tracking-widest text-concrete-400">
            End of sequence — {essay.frames.length} frames — Gridline photography desk
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="city-grid">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <p className="reveal font-mono text-[11px] uppercase tracking-widest text-signal">
          The photography desk
        </p>
        <h1 className="reveal display-tight mt-3 flex items-center gap-4 font-display text-4xl font-black uppercase sm:text-6xl" style={{ animationDelay: '80ms' }}>
          Photo essays <Camera className="text-signal" size={36} />
        </h1>
        <p className="reveal mt-4 max-w-xl text-lg leading-relaxed text-concrete-800" style={{ animationDelay: '160ms' }}>
          Long looks at the city, sequenced frame by frame. Every essay is shot
          on location and captioned in the field.
        </p>

        <div className="mt-12 space-y-px border border-ink/15 bg-ink/15">
          {photoEssays.map((e, i) => (
            <button
              key={e.id}
              onClick={() => onNavigate({ name: 'essay', id: e.id })}
              className="group grid w-full gap-6 bg-concrete-50 p-5 text-left transition-colors hover:bg-concrete-100 sm:grid-cols-12 sm:items-center sm:p-6"
            >
              <div className="overflow-hidden border border-ink/15 sm:col-span-4">
                <img
                  src={e.cover}
                  alt={e.title}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading={i > 0 ? 'lazy' : undefined}
                />
              </div>
              <div className="sm:col-span-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                  {e.date} — {e.frames.length} frames — {e.district}
                </p>
                <h2 className="mt-2 font-display text-2xl font-black tracking-tight group-hover:underline group-hover:decoration-signal group-hover:decoration-2 group-hover:underline-offset-4 sm:text-3xl">
                  {e.title}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-concrete-800">{e.dek}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
                  Photographs by {e.photographer}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
