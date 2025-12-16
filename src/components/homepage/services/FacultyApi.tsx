// services/facultyApi.ts
export type Status = "Active" | "Sabbatical" | "Emeritus";

export type Faculty = {
  id: number;
  name: string;
  department: string;
  rank: string;
  university: string;
  hIndex: number;
  publications: number;
  citations: number;
  status: Status;
};

// ------------- API CALL -------------
export async function fetchFaculty() {
  const res = await fetch("http://localhost:3000/faculty");

  if (!res.ok) throw new Error("Failed to load faculty data");

  return res.json();
}
