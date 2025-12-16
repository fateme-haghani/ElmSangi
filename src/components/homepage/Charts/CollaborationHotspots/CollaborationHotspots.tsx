import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
  type ScriptableContext,
  type TooltipItem,
  Filler
} from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { Chart } from "react-chartjs-2";
import { useMemo } from "react";

type MatrixPoint = { x: number; y: number; v: number };

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  MatrixController,
  MatrixElement
);

function generateMatrix(rows: number, cols: number) {
  return Array.from({ length: rows * cols }, () => Math.random() * 100).map(
    (v, i) => ({
      x: i % cols,
      y: Math.floor(i / cols),
      v,
    })
  );
}

function CollaborationHotspots() {
  const rows = 8;
  const cols = 10;


   const matrixData = useMemo(() => generateMatrix(rows, cols), []);
  

  // رنگ
  const getColor = (value: number) => {
    const start = [6, 78, 59];
    const end = [20, 184, 166];
    const ratio = value / 100;

    const r = Math.round(start[0] + (end[0] - start[0]) * ratio);
    const g = Math.round(start[1] + (end[1] - start[1]) * ratio);
    const b = Math.round(start[2] + (end[2] - start[2]) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const data: ChartData<"matrix", MatrixPoint[]> = {
    datasets: [
      {
        label: "Heatmap",
        data: matrixData,
        backgroundColor: (ctx: ScriptableContext<"matrix">) => {
          const point = ctx.dataset.data[ctx.dataIndex] as MatrixPoint;
          return getColor(point.v);
        },
        borderColor: "rgba(0,0,0,0)",
        width: (ctx) => {
  const area = ctx.chart.chartArea;
  if (!area) return 0;
  return area.width / cols - 4;
},
height: (ctx) => {
  const area = ctx.chart.chartArea;
  if (!area) return 0;
  return area.height / rows - 4;
},

      },
    ],
  };

const options: ChartOptions<"matrix"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      rtl: true, // این اوکیه، بمونه
      backgroundColor: "rgba(15,23,42,0.95)",
      titleColor: "#e5e7eb",
      bodyColor: "#cbd5e1",
      borderWidth: 1,
      borderColor: "#1f2937",
      titleAlign: "right",
      bodyAlign: "right",
      callbacks: {
        // ✅ اینجا باید باشه، نه بیرون
        title: () => "شدت همکاری",

        // ✅ بدون any
        label: (ctx: TooltipItem<"matrix">) => {
          const point = ctx.raw as unknown as { v: number };
          return `امتیاز: ${point.v}`;
        },
      },
    },
    legend: { display: false },
  },
  scales: {
    x: { display: false, min: 0, max: cols },
    y: { display: false, min: 0, max: rows },
  },
};

  return (
    <div className="bg-[#0b0f1d] p-5 rounded-2xl border border-[#1a2032]" dir="rtl">
      <h2 className="text-white font-semibold text-lg mb-1">کانون‌های همکاری</h2>
      <p className="text-gray-400 text-sm mb-4">شدت فعالیت علمی منطقه‌ای و بین‌المللی</p>

      <div className="w-full h-64">
        <Chart type="matrix" data={data} options={options} />
      </div>
    </div>
  );
}

export default CollaborationHotspots;
