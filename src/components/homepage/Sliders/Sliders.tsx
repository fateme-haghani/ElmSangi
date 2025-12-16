import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/images/tmb_14_220414134127.jpg";
import Image2 from "../../../assets/images/156994052.jpg";
import Image3 from "../../../assets/images/tmb_18_220414134418.jpg";

function Sliders() {
  return (
    <div className="max-w-3xl mx-auto mt-6 rounded-2xl shadow-xl bg-slate-900/40 backdrop-blur-md border border-slate-700/40 overflow-hidden">

      <Carousel indicators={false} fade interval={2500}>
        
        {/* Slide 1 */}
        <Carousel.Item>
          <img 
            src={Image1} 
            alt="Slide 1" 
            className="d-block w-full h-[220px] object-cover opacity-90"
          />
          <Carousel.Caption className="bg-slate-900/50 backdrop-blur-sm rounded-xl px-3 py-2">
            <h5 className="text-sm font-semibold text-sky-300">
              وضعیت پژوهش دانشگاه‌ها
            </h5>
            <p className="text-[11px] text-slate-200">
              روند رشد مقالات و تاثیر علمی
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img 
            src={Image2} 
            alt="Slide 2" 
            className="d-block w-full h-[220px] object-cover opacity-90"
          />
          <Carousel.Caption className="bg-slate-900/50 backdrop-blur-sm rounded-xl px-3 py-2">
            <h5 className="text-sm font-semibold text-emerald-300">
              همکاری‌های علمی ایران
            </h5>
            <p className="text-[11px] text-slate-200">
              تحلیل شبکه‌ همکاری بین‌المللی
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img 
            src={Image3} 
            alt="Slide 3" 
            className="d-block w-full h-[220px] object-cover opacity-90"
          />
          <Carousel.Caption className="bg-slate-900/50 backdrop-blur-sm rounded-xl px-3 py-2">
            <h5 className="text-sm font-semibold text-indigo-300">
              حوزه‌های برتر پژوهشی
            </h5>
            <p className="text-[11px] text-slate-200">
              رشته‌هایی با بیشترین استناد
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Sliders;
