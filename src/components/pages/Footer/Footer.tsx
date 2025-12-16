import { useCountUp } from "../../../components/homepage/services/Hooks/useCountUp";

function Footer() {
  // شمارنده‌ها → داینامیک
// شمارنده‌ها → استخراج ref و value
const { ref: onlineRef, value: onlineValue } = useCountUp(48);
const { ref: todayRef, value: todayValue } = useCountUp(101326);
const { ref: totalRef, value: totalValue } = useCountUp(48486403);
const { ref: uniRef, value: uniValue } = useCountUp(78);
const { ref: facultiesRef, value: facultiesValue } = useCountUp(421);
const { ref: researchRef, value: researchValue } = useCountUp(861);
const { ref: professorsRef, value: professorsValue } = useCountUp(32993);


  return (
    <footer className="mt-16 border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-12" dir="rtl">

        {/* ───── ردیف بالا ───── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 items-start">

          {/* ───── ارسال پیام ───── */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-100">ارسال پیام</h3>

            <p className="text-xs leading-6 text-slate-300/90">
              چنانچه در مشخصات ذکر شده برای عضو هیأت علمی (اعم از مشخصات فردی،
              پروفایل‌ها و غیره) اطلاعات ناصحیح مشاهده نمودید یا نظری در مورد سامانه دارید،
              تقاضامند است ما را در جریان بگذارید.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:brightness-110 transition"
            >
              <span className="text-base">✈</span>
              <span>ارسال بازخورد</span>
            </button>
          </div>

          {/* ───── آمار سامانه (داینامیک) ───── */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">آمار سامانه</h3>

            <div
              ref={onlineRef}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-[11px] shadow-sm shadow-slate-900/60 space-y-2"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">کاربران آنلاین</span>
                <span className="font-semibold text-sky-400">
                  {onlineValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={todayRef} className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">بازدید امروز</span>
                <span className="font-semibold text-emerald-400">
                  {todayValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={totalRef} className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">بازدید کل</span>
                <span className="font-semibold text-indigo-400">
                  {totalValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={uniRef} className="flex items-center justify-between">
                <span className="text-slate-400">تعداد دانشگاه‌ها</span>
                <span className="font-semibold text-slate-100">
                  {uniValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={facultiesRef} className="flex items-center justify-between">
                <span className="text-slate-400">تعداد دانشکده‌ها</span>
                <span className="font-semibold text-slate-100">
                  {facultiesValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={researchRef} className="flex items-center justify-between">
                <span className="text-slate-400">تعداد مراکز تحقیقاتی</span>
                <span className="font-semibold text-slate-100">
                  {researchValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>

              <div ref={professorsRef} className="flex items-center justify-between">
                <span className="text-slate-400">اعضای هیأت علمی شاغل</span>
                <span className="font-semibold text-slate-100">
                  {professorsValue.toLocaleString("fa-IR")+'+'}
                </span>
              </div>
            </div>
          </div>

          {/* ───── تماس با ما ───── */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">تماس با ما</h3>

            <p className="text-[11px] leading-6 text-slate-300/90">
              تهران، شهرک قدس، بلوار فرحزادی، بلوار ایوانک، ساختمان مرکزی
              وزارت بهداشت، درمان و آموزش پزشکی، بلوک ۸، طبقه ۱۳، مرکز توسعه
              و هماهنگی اطلاعات و انتشارات علمی
            </p>

            <div className="space-y-1 text-[11px]">
              <p className="flex items-center gap-2">
                <span className="text-sky-400">☎</span>
                <span>۰۲۱-۸۱۴۵۵۲۲۴</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sky-400">✉</span>
                <span className="font-semibold text-slate-100">
                  isid@behdasht.gov.ir
                </span>
              </p>
            </div>
          </div>

          {/* ───── توجه ───── */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">توجه</h3>

            <p className="text-[11px] leading-6 text-slate-300/90">
              کلیه حقوق این وب‌سایت متعلق به مرکز توسعه و هماهنگی اطلاعات و
              انتشارات علمی وزارت بهداشت است. استفاده از مطالب با ذکر منبع بلامانع است.
            </p>

            <p className="text-[11px] font-semibold text-slate-400">
              © {new Date().getFullYear()} ISID.RESEARCH.AC.IR, TEHRAN, IRAN.
            </p>
          </div>
        </div>

        {/* ───── قسمت پایین ───── */}
        <div className="mt-8 border-t border-slate-800/70 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>سامانه علم‌سنجی وزارت بهداشت – استفاده از سامانه به منزله پذیرش قوانین است.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-slate-300 transition-colors">شرایط و ضوابط</a>
            <a href="#" className="hover:text-slate-300 transition-colors">راهنمای سامانه</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
