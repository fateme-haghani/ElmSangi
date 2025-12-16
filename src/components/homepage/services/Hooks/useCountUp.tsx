import { useEffect, useRef, useState } from "react";

export function useCountUp(endValue, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = endValue / (duration / 16);

          const step = () => {
            start += increment;
            if (start < endValue) {
              setValue(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setValue(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [endValue, duration]);

  return { ref, value };
}
