const statsData = [
  {
    title: "تعداد کل مقالات",
    value: "۴۵,۷۸۲",
    change: "۱۲٪+",
  },
  {
    title: "تعداد کل استنادات",
    value: "۱,۲۴۵,۰۰۳",
    change: "۸٪+",
  },
  {
    title: "میانگین شاخص H",
    value: "۱۸.۴",
    change: "۰.۷+",
  },
  {
    title: " پژوهشگران فعال ",
    value: "5329",
    change: "۰.4+",
  },
];

function StatsCards() {
  return (
   <div className="">
     <div className="  w-full grid grid-cols-1 md:grid-cols-4 gap-6 p-4 bg-[#050B1A]">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#090F20] rounded-2xl p-5 border border-[#1b2237]"
        >
          <div className="flex items-start justify-between">
            <span className="text-gray-300 text-sm">{item.title}</span>
            <span className="text-emerald-400 text-sm font-medium">{item.change}</span>
          </div>

          <div className="mt-3 text-white text-2xl font-bold">{item.value}</div>

          {/* خط عمودی فیروزه‌ای کنار کارت */}
          <div className="w-1 h-10 bg-[#0cf3e0] rounded-full mt-3"></div>
        </div>
      ))}
    </div>
   </div>
  );
}

export default StatsCards;
