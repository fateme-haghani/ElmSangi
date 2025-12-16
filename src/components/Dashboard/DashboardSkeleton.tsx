export default function DashboardSkeleton() {
  return (
    <div className="p-12 space-y-10 animate-pulse">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-1/3 rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
        <div className="h-4 w-1/4 rounded bg-slate-800" />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative h-28 rounded-2xl border border-[#1f2537] bg-[#0e1320] overflow-hidden"
          >
            {/* shimmer */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative h-80 rounded-2xl border border-[#1f2537] bg-[#0b1020] overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Publications Table */}
      <div className="space-y-4">
        <div className="h-6 w-1/5 rounded bg-slate-700" />

        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="relative h-12 rounded-xl border border-[#1f2537] bg-[#0e1320] overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
