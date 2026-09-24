interface PlotStampProps {
  plot: string;
  district: string;
  coordinates: string;
  light?: boolean;
}

export default function PlotStamp({ plot, district, coordinates, light }: PlotStampProps) {
  const border = light ? 'border-concrete-50/40' : 'border-ink/25';
  const text = light ? 'text-concrete-50/80' : 'text-concrete-600';
  return (
    <div className={`inline-block border ${border} font-mono text-[10px] uppercase tracking-widest ${text}`}>
      <div className={`flex divide-x ${light ? 'divide-concrete-50/40' : 'divide-ink/25'}`}>
        <span className="px-2.5 py-1.5">{plot}</span>
        <span className="px-2.5 py-1.5">{district}</span>
        <span className="hidden px-2.5 py-1.5 sm:block">{coordinates}</span>
      </div>
    </div>
  );
}
