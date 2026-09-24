import { useMemo, useState } from 'react';
import { Archive } from 'lucide-react';
import { archiveIssues } from '../data/magazine';

export default function ArchiveView() {
  const [year, setYear] = useState<number | 'all'>('all');
  const [openIssue, setOpenIssue] = useState<number | null>(null);

  const years = useMemo(
    () => [...new Set(archiveIssues.map((i) => i.year))].sort((a, b) => b - a),
    []
  );
  const issues = year === 'all' ? archiveIssues : archiveIssues.filter((i) => i.year === year);

  return (
    <div className="city-grid">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <p className="reveal font-mono text-[11px] uppercase tracking-widest text-signal">
          Every issue since no. 22
        </p>
        <h1 className="reveal display-tight mt-3 flex items-center gap-4 font-display text-4xl font-black uppercase sm:text-6xl" style={{ animationDelay: '80ms' }}>
          The archive <Archive className="text-signal" size={36} />
        </h1>
        <p className="reveal mt-4 max-w-xl text-lg leading-relaxed text-concrete-800" style={{ animationDelay: '160ms' }}>
          Ten issues of streets, buildings, and decisions — indexed by year and
          theme. Select an issue to view its table of contents.
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-px border border-ink/20 bg-ink/20" style={{ animationDelay: '220ms' }} role="group" aria-label="Filter by year">
          {(['all', ...years] as const).map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                year === y ? 'bg-ink text-concrete-50' : 'bg-concrete-50 hover:bg-concrete-100'
              }`}
            >
              {y === 'all' ? 'All years' : y}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => {
            const open = openIssue === issue.number;
            return (
              <button
                key={issue.number}
                onClick={() => setOpenIssue(open ? null : issue.number)}
                aria-expanded={open}
                className="group flex flex-col bg-concrete-50 text-left transition-colors hover:bg-concrete-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={issue.cover}
                    alt={`Issue ${issue.number} cover`}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-concrete-50">
                    No. {issue.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                    {issue.season} {issue.year}
                  </p>
                  <h2 className="mt-1.5 font-display text-2xl font-black uppercase tracking-tight">
                    {issue.theme}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-concrete-800">{issue.summary}</p>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-4 space-y-2 border-t border-ink/15 pt-4">
                        {issue.contents.map((c) => (
                          <li key={c} className="flex gap-3 text-sm text-concrete-800">
                            <span className="font-mono text-[10px] leading-6 tracking-widest text-signal">—</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-concrete-600">
                    {open ? 'Hide contents' : 'View contents'} — {issue.contents.length} entries
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
