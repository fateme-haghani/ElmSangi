import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function ResearchFields() {
  const data = {
    labels: ["سلامت", "هوش مصنوعی و داده", "انرژی", "مواد", "سایر حوزه‌ها"],
    datasets: [
      {
        label: "قدرت پژوهشی",
        data: [90, 75, 70, 55, 40],
        backgroundColor: [
          "rgba(20,184,166,0.8)",  // teal
          "rgba(59,130,246,0.8)", // blue
          "rgba(250,204,21,0.8)", // yellow
          "rgba(139,92,246,0.8)", // violet
          "rgba(244,63,94,0.8)",  // red
        ],
        borderWidth: 2,
        borderColor: "#0b0f1d",
      },
    ],
  };

const options: ChartOptions<"polarArea"> = {
    scales: {
      r: {
        ticks: { display: false },
        grid: { color: "rgba(255,255,255,0.06)" },
        angleLines: { color: "rgba(255,255,255,0.1)" },
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#cbd5e1",
          padding: 20,
          boxWidth: 14,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div
      className="
        bg-[#0b0f1d] p-6 rounded-2xl border border-[#1a2032]
        shadow-[0_0_30px_rgba(20,184,166,0.25)]
        hover:shadow-[0_0_45px_rgba(20,184,166,0.35)]
        transition-all duration-300 relative
      "
      dir='rtl'
    >
      {/* افکت نورانی پشت نمودار */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a633] to-transparent blur-2xl opacity-40"></div>

      <h2 className="text-white font-semibold text-lg relative z-10">
        چشم‌انداز حوزه‌های پژوهشی
      </h2>

      <p className="text-gray-400 text-sm mb-5 relative z-10">
        قدرت نسبی پژوهش در حوزه‌های مختلف
      </p>

      <div className="relative z-10 w-72 mx-auto">
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
}

export default ResearchFields;
