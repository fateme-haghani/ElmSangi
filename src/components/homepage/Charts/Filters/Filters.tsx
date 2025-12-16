function Filters() {
  const universities = [
    "دانشگاه تهران",
    "دانشگاه صنعتی شریف",
    "دانشگاه صنعتی امیرکبیر",
    "دانشگاه صنعتی اصفهان",
    "دانشگاه شیراز",
    "دانشگاه فردوسی مشهد",
  ];

  return (
    <div className="bg-[#0b0f1d] p-5 rounded-2xl border border-[#1a2032]" dir="rtl">
      <h2 className="text-white font-semibold">فیلترها</h2>
      <p className="text-gray-400 text-sm mb-3">محدودسازی بر اساس دانشگاه</p>

      <div className="flex flex-col gap-3 text-right">
        {universities.map((u) => (
          <label key={u} className="text-gray-300 flex items-center gap-2 justify-end">
            <span>{u}</span>
            <input type="checkbox" className="w-4 h-4" />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
