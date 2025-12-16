import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function RegionalStrength() {
  const data = {
    labels: ["منطقه A", "منطقه B", "منطقه C", "منطقه D", "منطقه E"],
    datasets: [
      {
        data: [20, 20, 20, 20, 20],
        backgroundColor: [
          "#14b8a6",
          "#3b82f6",
          "#facc15",
          "#f43f5e",
          "#8b5cf6",
        ],
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  };

  const options = {
    cutout: "70%",
  };

  return (
    <div
      dir="rtl"
      className="
          bg-[#0b0f1d] p-6 rounded-2xl border border-[#1a2032]
        shadow-[0_0_30px_rgba(20,184,166,0.25)]
        hover:shadow-[0_0_45px_rgba(20,184,166,0.35)]
        transition-all duration-300 relative
      "
    >
      <h2 className="text-white font-semibold">قدرت پژوهشی مناطق</h2>

      <p className="text-gray-400 text-sm mb-4">
        کانون‌های تولیدات علمی در مناطق مختلف
      </p>

      <div className=" w-56 mx-auto">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default RegionalStrength;
