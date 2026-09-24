import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Route } from '../App';

interface HeaderProps {
  route: Route;
  onNavigate: (route: Route) => void;
}

const links: { label: string; route: Route }[] = [
  { label: 'Features', route: { name: 'home' } },
  { label: 'Photo essays', route: { name: 'essays' } },
  { label: 'Archive', route: { name: 'archive' } },
];

function isActive(route: Route, link: Route) {
  if (link.name === 'home') return route.name === 'home' || route.name === 'article';
  if (link.name === 'essays') return route.name === 'essays' || route.name === 'essay';
  return route.name === link.name;
}

export default function Header({ route, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const go = (r: Route) => {
    setOpen(false);
    onNavigate(r);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-concrete-100/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-4 sm:px-8">
        <button
          onClick={() => go({ name: 'home' })}
          className="group flex items-center gap-3 py-4"
          aria-label="Gridline home"
        >
          <span className="grid h-8 w-8 place-items-center bg-ink transition-colors group-hover:bg-signal">
            <span className="city-grid h-5 w-5 border border-concrete-50/70 !bg-transparent" style={{ backgroundImage: 'linear-gradient(to right, rgba(242,243,240,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,243,240,.7) 1px, transparent 1px)', backgroundSize: '6px 6px' }} />
          </span>
          <span className="font-display text-lg font-black tracking-tight">
            GRIDLINE
            <span className="ml-2 hidden font-mono text-[10px] font-normal uppercase tracking-widest text-concrete-600 md:inline">
              A journal of urban form
            </span>
          </span>
        </button>

        <nav className="hidden items-stretch sm:flex" aria-label="Main">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.route)}
              className={`relative border-l border-ink/15 px-6 font-mono text-xs uppercase tracking-widest transition-colors hover:text-signal ${
                isActive(route, l.route) ? 'text-signal' : 'text-ink'
              }`}
            >
              {l.label}
              {isActive(route, l.route) && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-signal" />
              )}
            </button>
          ))}
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/15 sm:hidden" aria-label="Main mobile">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.route)}
              className={`block w-full border-b border-ink/10 px-4 py-3 text-left font-mono text-xs uppercase tracking-widest ${
                isActive(route, l.route) ? 'text-signal' : ''
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
