export default function LoadingSpinner({ message = "Retrieving clinical data..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5">
      <svg viewBox="0 0 220 50" className="w-52 h-12">
        <polyline
          points="0,25 30,25 40,5 50,45 60,25 80,25 90,10 100,40 110,25 130,25 140,8 150,42 160,25 220,25"
          fill="none" stroke="#3b82f6" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="ecg-line"
        />
      </svg>
      <div className="dot-loader flex gap-2">
        <span /><span /><span />
      </div>
      <p className="text-slate-600 text-xs font-mono tracking-wide">{message}</p>
    </div>
  );
}
