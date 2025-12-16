import { useEffect, useMemo, useState } from "react";
import type { Faculty } from '../FacultyApi';
import { fetchFaculty } from "../FacultyApi";

type SortKey = keyof Faculty;

export function useFacultyTable() {
  const [data, setData] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [universityFilter, setUniversityFilter] = useState("all");
  const [rankFilter, setRankFilter] = useState("all");

  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const [page, setPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchFaculty();
        setData(result);
      } catch (err: unknown) {
    
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("خطای ناشناخته");
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);


  const universities = useMemo(
    () => Array.from(new Set(data.map((f) => f.university))),
    [data]
  );

 
  const ranks = useMemo(
    () => Array.from(new Set(data.map((f) => f.rank))),
    [data]
  );


  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return data.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(q) ||
        f.department.toLowerCase().includes(q) ||
        f.university.toLowerCase().includes(q);

      const matchesUni =
        universityFilter === "all" || f.university === universityFilter;

      const matchesRank =
        rankFilter === "all" || f.rank === rankFilter;

      return matchesSearch && matchesUni && matchesRank;
    });
  }, [data, search, universityFilter, rankFilter]);

  // ---------------- SORTING ----------------
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const v1 = a[sortKey];
      const v2 = b[sortKey];

      if (typeof v1 === "number" && typeof v2 === "number") {
        return sortDir === "asc" ? v1 - v2 : v2 - v1;
      }

      return sortDir === "asc"
        ? String(v1).localeCompare(String(v2))
        : String(v2).localeCompare(String(v1));
    });
  }, [filtered, sortKey, sortDir]);

  // ---------------- PAGINATION ----------------
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));

  return {
    loading,
    error,

    paginated,
    universities,
    ranks,
    totalPages,
    page,

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

    sorted,
  };
}
