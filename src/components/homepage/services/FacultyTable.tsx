import { NavLink } from 'react-router-dom';
import { useFacultyTable } from '../services/Hooks/useFacultyTable';


export default function FacultyTable() {
  
  const {
    paginated,
    totalPages,
    page,

    universities,
    ranks,

    search,
    setSearch,

    universityFilter,
    setUniversityFilter,

    rankFilter,
    setRankFilter,

    sortKey,
    sortDir,
    setSortKey,
    setSortDir,

    setPage,
  } = useFacultyTable();

  const handleSort = (key: keyof typeof paginated[0]) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
   <div
  className="bg-gradient-to-br from-[#0c0f1a] to-[#0b0f1d] p-8 rounded-3xl shadow-2xl border border-[#1a2032] text-slate-200"
  dir="rtl"
>
  {/* Header */}
  <div className="mb-8 space-y-4">
    <h2 className="text-3xl font-bold text-white drop-shadow-sm">
      لیست اعضای هیئت علمی
    </h2>

    {/* Search */}
    <div className="relative">
      <input
        className="w-full px-5 py-3 pr-12 rounded-2xl bg-[#111827] border border-[#232b3c] text-slate-300 placeholder-slate-500
                   focus:outline-none focus:ring-2 focus:ring-violet-600 shadow-inner transition-all"
        placeholder="جستجوی اعضای هیئت علمی..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">🔍</span>
    </div>

    {/* Filters */}
    <div className="flex flex-wrap gap-4">
      <select
        value={universityFilter}
        onChange={(e) => setUniversityFilter(e.target.value)}
        className="px-4 py-2 rounded-xl bg-[#111827] border border-[#232b3c] text-slate-300
                   focus:ring-2 focus:ring-indigo-500 transition-all"
      >
        <option value="all">همه دانشگاه‌ها</option>
        {universities.map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>

      <select
        value={rankFilter}
        onChange={(e) => setRankFilter(e.target.value)}
        className="px-4 py-2 rounded-xl bg-[#111827] border border-[#232b3c] text-slate-300
                   focus:ring-2 focus:ring-indigo-500 transition-all"
      >
        <option value="all">همه رتبه‌ها</option>
        {ranks.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-hidden rounded-2xl border border-[#1f2537] shadow-xl shadow-black/20">
    <table className="w-full text-sm">
      <thead className="bg-[#1a2032] text-slate-300">
        <tr>
          {[
            ["name", "نام"],
            ["department", "گروه"],
            ["rank", "مرتبه"],
            ["university", "دانشگاه"],
            ["hIndex", "H-Index"],
            ["publications", "مقالات"],
            ["citations", "استنادات"],
          ].map(([key, label]) => (
            <th
              key={key}
              className="p-4 cursor-pointer hover:bg-[#242c42] transition group text-sm font-semibold"
              onClick={() => handleSort(key as any)}
            >
              <div className="flex items-center gap-2 justify-center">
                {label}

                {sortKey === key ? (
                  <span className="text-violet-400 drop-shadow">
                    {sortDir === "asc" ? "▲" : "▼"}
                  </span>
                ) : (
                  <span className="opacity-30">↕</span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {paginated.map((f, i) => (
          <tr
            key={f.id}
           
            className={`transition border-b border-[#1f2537]
              ${i % 2 ? "bg-[#111827]" : "bg-[#0e1320]"}
              hover:bg-[#1a2140] hover:shadow-inner`}
          >
            <td className="p-4 font-medium text-slate-100">
               <NavLink
    to={`/faculty/${f.id}`}
    className="text-indigo-400"
  >
    {f.name}
  </NavLink>
            </td>
            <td className="p-4 text-slate-300">{f.department}</td>
            <td className="p-4 text-indigo-300 font-semibold">{f.rank}</td>
            <td className="p-4 text-slate-300">{f.university}</td>
            <td className="p-4 text-right text-cyan-300">{f.hIndex}</td>
            <td className="p-4 text-right text-violet-300">{f.publications}</td>
            <td className="p-4 text-right text-emerald-300">
              {f.citations.toLocaleString()}
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-between mt-6">
    <button
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
      className="px-5 py-2 rounded-xl bg-[#111827] border border-[#232b3c]
                 text-slate-300 hover:bg-[#1c2335] disabled:opacity-40 transition"
    >
      ⬅ قبلی
    </button>

    <span className="text-slate-400 font-medium">
      صفحه <span className="text-indigo-400">{page}</span> از{" "}
      <span className="text-indigo-400">{totalPages}</span>
    </span>

    <button
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
      className="px-5 py-2 rounded-xl bg-[#111827] border border-[#232b3c]
                 text-slate-300 hover:bg-[#1c2335] disabled:opacity-40 transition"
    >
      بعدی ➤
    </button>
  </div>
</div>

  );
}
