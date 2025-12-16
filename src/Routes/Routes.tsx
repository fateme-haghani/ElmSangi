import { Routes, Route } from "react-router-dom";
import FacultyTable from "../components/homepage/services/FacultyTable";
import Dashboard from "../components/Dashboard/Dashboard";
import Homepage from "../components/pages/Homepage";
export default function Approutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
      <Route index element={<FacultyTable />} />
      <Route path="/faculty/:id" element={<Dashboard />} />
    </Routes>
  );
}
