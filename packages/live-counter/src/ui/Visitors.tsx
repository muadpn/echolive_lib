import { useVisitorTracker } from "@/provider/live-tracker";

export default function Visitors() {
  const { visitorCount } = useVisitorTracker();
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-black/90 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
      <div className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
      </div>
      <span>{visitorCount} online</span>
    </div>
  );
}
