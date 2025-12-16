import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// ⭐ داده‌های نمونه – دانشگاه‌ها
const universities = [
  { name: "دانشگاه تهران", score: 92 },
  { name: "دانشگاه صنعتی شریف", score: 88 },
  { name: "دانشگاه صنعتی امیرکبیر", score: 83 },
  { name: "دانشگاه صنعتی اصفهان", score: 79 },
  { name: "دانشگاه شیراز", score: 74 },
];

const labels = universities.map((u) => u.name);
const scores = universities.map((u) => u.score);

// ⭐ دیتا برای Chart.js
const data: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "امتیاز اثرگذاری",
      data: scores,
      backgroundColor: "rgba(34, 211, 238, 0.95)",
      borderRadius: 999,
      borderSkipped: false,
      barThickness: 14,
    },
  ],
};

// ⚙️ تنظیمات چارت
const options: ChartOptions<"bar"> = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(15,23,42,0.95)",
      titleColor: "#e5e7eb",
      bodyColor: "#cbd5e1",
      borderColor: "#1f2937",
      borderWidth: 1,
      padding: 8,
      cornerRadius: 8,
      rtl: true,
      textDirection: "rtl",
    },
  },
  scales: {
    x: {
      display: false,
      max: 100,
      grid: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
      ticks: { display: false },
    },
  },
};

function TopUniversitiesImpactFa() {
  const rowHeight = 32;
  const chartHeight = universities.length * rowHeight;

  return (
    <div
      className="bg-[#0b0f1d] p-6 rounded-2xl border border-[#1a2032]"
      dir="rtl"
    >
      <h2 className="text-white font-semibold text-lg mb-1">
        برترین دانشگاه‌ها بر اساس اثرگذاری
      </h2>

      <p className="text-gray-400 text-xs mb-6">
        امتیاز اثرگذاری • استنادهای نرمال‌شده
      </p>

      <div
        className="grid grid-cols-12 gap-4 items-stretch"
        style={{ height: `${chartHeight}px` }}
      >
        {/* ستون رتبه و نام دانشگاه‌ها */}
        <div className="col-span-5 flex flex-col justify-between">
           {universities.map((u, index) => (
            <div key={u.name} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#2a3145] flex items-center justify-center text-gray-300 text-xs">
                {index + 1}
              </div>
              <span className="text-sm text-gray-200 truncate">
                {u.name}
              </span>
            </div>
          ))} 

        </div>

        {/* چارت + نمره‌ها */}
        <div className="col-span-7">
          <div className="relative w-full h-full">
            <Bar data={data} options={options} />

            {/* نمره‌ها کنار بارها */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-col justify-between py-1">
              {universities.map((u) => (
                <span
                  key={u.name}
                  className="text-sm text-gray-300 text-left pl-1"
                >
                  {u.score}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopUniversitiesImpactFa;
