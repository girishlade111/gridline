import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/magazine';
import PlotStamp from '../components/PlotStamp';
import type { Route } from '../App';

interface ArticleViewProps {
  id: string;
  onNavigate: (route: Route) => void;
}

export default function ArticleView({ id, onNavigate }: ArticleViewProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const article = articles.find((a) => a.id === id);
  if (!article) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-concrete-600">
          Article not found in the current issue.
        </p>
        <button
          onClick={() => onNavigate({ name: 'home' })}
          className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-concrete-50 hover:bg-signal"
        >
          <ArrowLeft size={14} /> Back to features
        </button>
      </div>
    );
  }

  const others = articles.filter((a) => a.id !== id).slice(0, 2);

  return (
    <article>
      <div className="relative border-b border-ink/15 bg-ink text-concrete-50">
        <img
          src={article.image}
          alt={article.imageCaption}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-20 sm:px-8 sm:pt-28">
          <button
            onClick={() => onNavigate({ name: 'home' })}
            className="reveal mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-concrete-200 transition-colors hover:text-signal"
          >
            <ArrowLeft size={14} /> Features
          </button>
          <p className="reveal font-mono text-[11px] uppercase tracking-widest text-signal" style={{ animationDelay: '60ms' }}>
            {article.kicker} — {article.date}
          </p>
          <h1 className="reveal display-tight mt-4 font-display text-4xl font-black uppercase sm:text-6xl" style={{ animationDelay: '120ms' }}>
            {article.title}
          </h1>
          <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-concrete-200" style={{ animationDelay: '180ms' }}>
            {article.dek}
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
            <PlotStamp light plot={article.plot} district={article.district} coordinates={article.coordinates} />
            <span className="font-mono text-[10px] uppercase tracking-widest text-concrete-300">
              {article.author}, {article.role} — {article.readMinutes} min read
            </span>
          </div>
        </div>
      </div>

      <div className="city-grid">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-8">
          <p className="mb-10 border-l-2 border-signal pl-4 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
            {article.imageCaption}
          </p>
          {article.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i} className="mb-4 mt-12 font-display text-2xl font-black uppercase tracking-tight">
                {block.text}
              </h2>
            ) : block.type === 'pull' ? (
              <blockquote
                key={i}
                className="my-12 border-y-2 border-ink py-8 font-display text-2xl font-bold leading-snug tracking-tight text-signal sm:text-3xl"
              >
                {block.text}
              </blockquote>
            ) : (
              <p key={i} className="mb-6 text-lg leading-[1.75] text-concrete-800 first:first-letter:float-left first:first-letter:mr-3 first:first-letter:font-display first:first-letter:text-6xl first:first-letter:font-black first:first-letter:leading-[0.85]">
                {block.text}
              </p>
            )
          )}
          <div className="mt-14 border-t border-ink/20 pt-6 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
            Filed from {article.district} — {article.coordinates} — Gridline Issue 31
          </div>
        </div>
      </div>

      <div className="border-t border-ink/15 bg-concrete-50/70">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
          <h2 className="mb-6 font-display text-xl font-black uppercase tracking-tight">Continue reading</h2>
          <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {others.map((a) => (
              <button
                key={a.id}
                onClick={() => onNavigate({ name: 'article', id: a.id })}
                className="group flex items-center gap-5 bg-concrete-50 p-5 text-left transition-colors hover:bg-concrete-100"
              >
                <img src={a.image} alt="" className="h-20 w-28 shrink-0 object-cover" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-signal">{a.kicker}</p>
                  <h3 className="mt-1 font-display text-lg font-bold tracking-tight group-hover:underline group-hover:decoration-signal group-hover:decoration-2 group-hover:underline-offset-4">
                    {a.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
                    {a.author} — {a.readMinutes} min
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
