import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function PublicationTrend() {
 const labels=[
  '2015','2016','217','2018' , '2019' ,'2020','2021','2022','2023','2024'
 ]
  const data = {
    labels,
    datasets: [
      {
        label: "روند انتشار مقالات",
        data: [10, 12, 15, 14, 18, 20, 22, 25, 29, 32],
        borderColor: "#14b8a6",
        backgroundColor: "rgba(20,184,166,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      className="  bg-[#0b0f1d] p-6 rounded-2xl border border-[#1a2032]
        shadow-[0_0_30px_rgba(20,184,166,0.25)]
        hover:shadow-[0_0_45px_rgba(20,184,166,0.35)]
        transition-all duration-300 relative"
      dir="rtl"
    >
      <h2 className="text-white font-semibold">روند انتشار مقالات</h2>

      <p className="text-gray-400 text-sm mb-4">
        تغییرات خروجی علمی در ۱۰ سال گذشته
      </p>

      <Line data={data} />
    </div>
  );
}

export default PublicationTrend;
