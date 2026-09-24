import type { Route } from '../App';

interface FooterProps {
  onNavigate: (route: Route) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-ink/15 bg-ink text-concrete-200">
      <div className="city-grid mx-auto max-w-7xl px-4 py-14 sm:px-8" style={{ backgroundImage: 'linear-gradient(to right, rgba(242,243,240,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,243,240,.05) 1px, transparent 1px)' }}>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-black tracking-tight text-concrete-50">GRIDLINE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-concrete-400">
              A journal of urban form. Reporting on streets, buildings, and the
              decisions that shape them — published quarterly since 2018.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest">
            <p className="mb-4 text-concrete-400">Sections</p>
            <ul className="space-y-2.5">
              <li><button onClick={() => onNavigate({ name: 'home' })} className="transition-colors hover:text-signal">Features</button></li>
              <li><button onClick={() => onNavigate({ name: 'essays' })} className="transition-colors hover:text-signal">Photo essays</button></li>
              <li><button onClick={() => onNavigate({ name: 'archive' })} className="transition-colors hover:text-signal">Archive</button></li>
            </ul>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest">
            <p className="mb-4 text-concrete-400">Masthead</p>
            <ul className="space-y-2.5 normal-case tracking-normal text-sm text-concrete-300">
              <li>Editor — Alba Kern</li>
              <li>Photography — Ines Duarte</li>
              <li>Research — The Gridline Desk</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-concrete-50/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-concrete-400">
          <span>Gridline Media Cooperative — Issue 31, Summer 2026</span>
          <span>Surveyed, not sponsored</span>
        </div>
      </div>
    </footer>
  );
}
