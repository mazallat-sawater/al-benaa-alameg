
import React from "react";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ChevronLeft,
  Images,
  Maximize2,
  X,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";

const galleryImages = Array.from({ length: 12 }, (_, index) => ({
  src: `/al-benaa-alameg/Gallery1/${index + 1}.webp`,
  alt: `معرض أعمال مؤسسة البناء العملاق للمقاولات العامة - الصورة ${index + 1}`,
  service: "أعمال مؤسسة البناء العملاق",
}));

export const Gallery = () => {
  const [active, setActive] = React.useState(0);
  const [lightbox, setLightbox] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  const goNext = React.useCallback(() => {
    setActive((index) => (index + 1) % galleryImages.length);
  }, []);

  const goPrev = React.useCallback(() => {
    setActive(
      (index) =>
        (index - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  /*
   * ==========================================
   * التشغيل التلقائي المريح
   * كل 4.5 ثانية
   * ==========================================
   */
  React.useEffect(() => {
    if (isPaused || lightbox || galleryImages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      goNext();
    }, 4500);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, lightbox, goNext]);

  /*
   * ==========================================
   * لوحة المفاتيح داخل Lightbox
   * ==========================================
   */
  React.useEffect(() => {
    if (!lightbox) return;

    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(false);
      }

      if (event.key === "ArrowLeft") {
        goNext();
      }

      if (event.key === "ArrowRight") {
        goPrev();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, goNext, goPrev]);

  /*
   * ==========================================
   * إذا لم توجد صور
   * ==========================================
   */
  if (galleryImages.length === 0) {
    return null;
  }

  const current = galleryImages[active];

  return (
    <section
      id="gallery"
      dir="rtl"
      className="relative overflow-hidden bg-[#F5F0E7] py-20 sm:py-24 lg:py-28"
    >
      {/* ==========================================
          زخارف الخلفية
      ========================================== */}

      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#C8A85D]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#183B2C]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==========================================
            عنوان القسم
        ========================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A85D]/40 bg-white px-4 py-2 text-xs font-extrabold text-[#8B672F] shadow-sm">
            <Images size={15} />
            <span>معرض أعمالنا</span>
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#183B2C] sm:text-4xl lg:text-5xl">
            أعمالنا بالصور

            <span className="mt-2 block text-[#A47C32]">
              نفتخر بتنفيذنا
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-8 text-[#68736D] sm:text-base">
            مجموعة من أعمال مؤسسة البناء العملاق للمقاولات العامة في المظلات
            والسواتر والهناجر والمشاريع والمرافق والمساحات الخارجية في المنطقة
            الشرقية.
          </p>
        </div>

        {/* ==========================================
            المعرض الرئيسي
        ========================================== */}

        <div className="mx-auto max-w-6xl">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* ==========================================
                الإطار الرئيسي
            ========================================== */}

            <div className="relative overflow-hidden rounded-[2rem] border border-[#C8A85D]/35 bg-[#07100D] p-2 shadow-[0_25px_70px_rgba(7,16,13,0.18)] sm:p-3">
              {/* الخط الذهبي العلوي */}

              <div
                className="pointer-events-none absolute inset-x-10 top-0 z-30 h-[3px] bg-gradient-to-l from-transparent via-[#E3C979] to-transparent"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#07100D]">
                {/* ==========================================
                    الصورة الرئيسية
                ========================================== */}

                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true);
                    setLightbox(true);
                  }}
                  onTouchStart={() => setIsPaused(true)}
                  className="group relative block w-full cursor-zoom-in"
                  aria-label="عرض الصورة بحجم كامل"
                >
                  <div className="aspect-[4/3] w-full sm:aspect-[16/9]">
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      loading="eager"
                      decoding="async"
                      width="1400"
                      height="788"
                    />
                  </div>

                  {/* طبقة الصورة */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100D]/90 via-[#07100D]/10 to-transparent" />

                  {/* ==========================================
                      معلومات الخدمة
                  ========================================== */}

                  <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between gap-4 sm:bottom-7 sm:right-7 sm:left-7">
                    <div className="text-right">
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#E3C979]/40 bg-[#07100D] px-3 py-1.5 text-[10px] font-bold text-[#E3C979] sm:text-xs">
                        <Sparkles size={12} />
                        {current.service}
                      </div>

                      <h3 className="max-w-xl text-lg font-black text-white sm:text-2xl lg:text-3xl">
                        {current.service}
                      </h3>
                    </div>

                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E3C979]/50 bg-[#07100D] text-[#E3C979] shadow-lg sm:flex">
                      <Maximize2 size={19} />
                    </span>
                  </div>
                </button>

                {/* ==========================================
                    السابق
                ========================================== */}

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsPaused(true);
                    goPrev();
                  }}
                  className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E3C979]/45 bg-[#07100D] text-[#E3C979] shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#E3C979] hover:bg-[#183B2C] sm:right-6 sm:h-12 sm:w-12"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRight size={21} />
                </button>

                {/* ==========================================
                    التالي
                ========================================== */}

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsPaused(true);
                    goNext();
                  }}
                  className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E3C979]/45 bg-[#07100D] text-[#E3C979] shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#E3C979] hover:bg-[#183B2C] sm:left-6 sm:h-12 sm:w-12"
                  aria-label="الصورة التالية"
                >
                  <ChevronLeft size={21} />
                </button>

                {/* ==========================================
                    حالة العرض
                ========================================== */}

                <div className="absolute right-5 top-5 z-20 sm:right-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-[#E3C979]/35 bg-[#07100D] px-3 py-2 text-[10px] font-bold text-[#F5F0E7]">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        isPaused
                          ? "bg-[#C8A85D]"
                          : "animate-pulse bg-[#D9BE78]",
                      )}
                    />

                    <span>
                      {isPaused ? "متوقف" : "عرض تلقائي"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              معلومات الصورة والعداد
          ========================================== */}

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-black text-[#183B2C] sm:text-lg">
                {current.service}
              </p>

              <p className="mt-1 text-xs font-medium text-[#7A837E]">
                اضغط على الصورة لمشاهدتها بحجم كامل
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* زر التشغيل والإيقاف */}

              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                className="flex h-10 items-center gap-2 rounded-full border border-[#C8A85D]/45 bg-white px-4 text-xs font-extrabold text-[#183B2C] shadow-sm transition-all hover:border-[#C8A85D] hover:bg-[#FCFAF5]"
                aria-label={
                  isPaused
                    ? "تشغيل العرض التلقائي"
                    : "إيقاف العرض التلقائي"
                }
              >
                {isPaused ? (
                  <>
                    <Play size={14} className="text-[#8B672F]" />
                    تشغيل
                  </>
                ) : (
                  <>
                    <Pause size={14} className="text-[#8B672F]" />
                    إيقاف
                  </>
                )}
              </button>

              {/* العداد */}

              <div className="rounded-full border border-[#183B2C]/10 bg-white px-4 py-2 text-xs font-black text-[#183B2C] shadow-sm">
                <span className="text-[#A47C32]">
                  {String(active + 1).padStart(2, "0")}
                </span>

                <span className="mx-1 text-[#B2B8B4]">
                  /
                </span>

                <span>
                  {String(galleryImages.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ==========================================
              الصور المصغرة
          ========================================== */}

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#183B2C]">
                تصفح أعمالنا
              </span>

              <span className="text-[10px] font-medium text-[#7A837E]">
                اختر أي صورة لإيقاف العرض عليها
              </span>
            </div>

            <div className="scrollbar-none flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setIsPaused(true);
                  }}
                  className={cn(
                    "group relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 bg-[#07100D] transition-all duration-300 sm:h-24 sm:w-36",
                    active === index
                      ? "border-[#C8A85D] shadow-[0_8px_25px_rgba(200,168,93,0.22)]"
                      : "border-transparent opacity-65 hover:border-[#D9BE78]/50 hover:opacity-100",
                  )}
                  aria-label={`عرض ${image.service}`}
                  aria-current={active === index}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="144"
                    height="96"
                  />

                  {active === index && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#D9BE78]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          LIGHTBOX
      ========================================== */}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07100D] p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
          onClick={() => setLightbox(false)}
        >
          {/* الإطار */}

          <div
            className="pointer-events-none absolute inset-3 border border-[#D9BE78]/20 sm:inset-6"
            aria-hidden="true"
          />

          {/* زر الإغلاق */}

          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute left-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9BE78]/45 bg-[#0D1A15] text-[#E3C979] shadow-xl transition-all hover:scale-105 hover:bg-[#183B2C]"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>

          {/* السابق */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9BE78]/45 bg-[#0D1A15] text-[#E3C979] shadow-xl transition-all hover:scale-105 hover:bg-[#183B2C] sm:right-8 sm:h-12 sm:w-12"
            aria-label="الصورة السابقة"
          >
            <ChevronRight size={21} />
          </button>

          {/* التالي */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9BE78]/45 bg-[#0D1A15] text-[#E3C979] shadow-xl transition-all hover:scale-105 hover:bg-[#183B2C] sm:left-8 sm:h-12 sm:w-12"
            aria-label="الصورة التالية"
          >
            <ChevronLeft size={21} />
          </button>

          {/* الصورة الكبيرة */}

          <div
            className="relative z-20 flex max-h-[90vh] max-w-[92vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[78vh] max-w-full rounded-2xl border border-[#D9BE78]/30 object-contain shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
            />

            <div className="mt-4 flex items-center gap-3 rounded-full border border-[#D9BE78]/30 bg-[#0D1A15] px-5 py-2.5 text-xs font-bold text-[#F5F0E7]">
              <Sparkles
                size={14}
                className="text-[#E3C979]"
              />

              <span>{current.service}</span>

              <span className="text-[#D9BE78]">
                {active + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

