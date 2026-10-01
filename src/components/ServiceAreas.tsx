import { MapPin, Crown, Phone, MessageCircle, Sparkles } from "lucide-react";

const secondaryAreas = [
  "الخبر",
  "الظهران",
  "العزيزية",
  "الراكة",
  "الحزام الذهبي",
  "الجبيل",
  "القطيف",
];

export const ServiceAreas = () => {
  return (
    <section
      id="service-areas"
      dir="rtl"
      className="section-padding relative overflow-hidden bg-[#F5F0E7]"
    >
      {/* خلفية زخرفية */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C8A85D 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#C8A85D]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#152C21]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* العنوان */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8A85D]/40 bg-white px-4 py-2 text-xs font-extrabold text-[#8B672F] shadow-sm">
            <Crown size={14} className="shrink-0" />
            <span>مناطق الخدمة</span>
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight text-[#07100D] sm:text-4xl lg:text-5xl">
            نخدمكم في المنطقة الشرقية
            <span className="mt-2 block bg-gradient-to-l from-[#8B672F] via-[#E3C979] to-[#C8A85D] bg-clip-text text-transparent">
              مع التركيز على الدمام
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#9FAAA4] sm:text-base">
            مؤسسة البناء العملاق للمقاولات العامة تقدم حلولًا متكاملة للمظلات والسواتر
            والهناجر والمشاريع في الدمام والمناطق المجاورة.
          </p>
        </div>

        {/* بطاقة الدمام المميزة */}
        <div className="mx-auto mb-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#C8A85D]/40 bg-gradient-to-br from-[#07100D] via-[#0D1A15] to-[#152C21] p-6 shadow-[0_25px_70px_rgba(7,16,13,0.25)] sm:p-8 lg:p-10">
            {/* الخط الذهبي العلوي */}
            <div
              className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-l from-transparent via-[#E3C979] to-transparent"
              aria-hidden="true"
            />

            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* المحتوى */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E3C979]/50 bg-[#C8A85D]/20 text-[#E3C979] shadow-[0_8px_25px_rgba(200,168,93,0.2)]">
                    <MapPin size={28} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#F5F0E7] sm:text-3xl lg:text-4xl">
                      الدمام
                    </h3>
                    <p className="text-xs font-bold text-[#D9BE78] sm:text-sm">
                      المقر الرئيسي ومركز الخدمة
                    </p>
                  </div>
                </div>

                <h4 className="mb-4 text-xl font-black text-[#F5F0E7] sm:text-2xl">
                  مظلات وسواتر ومقاولات في الدمام
                </h4>

                <p className="mb-6 text-sm leading-7 text-[#9FAAA4] sm:text-base">
                  نقدم في الدمام خدمات متكاملة للمظلات والسواتر والهناجر والمستودعات
                  ومظلات القصور والمشاريع ومظلات المسابح والشد الإنشائي والبرجولات
                  وملاحق المجالس والقرميد وبيوت الشعر.
                </p>

                {/* أزرار التواصل */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://api.whatsapp.com/send/?phone=966507111345&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#E3C979]/50 bg-[#C8A85D] px-5 py-3 text-sm font-black text-[#07100D] transition-all hover:bg-[#D9BE78] sm:px-6 sm:text-base"
                  >
                    <MessageCircle size={18} className="shrink-0" />
                    واتساب
                    <Sparkles size={14} className="shrink-0 opacity-80" />
                  </a>

                  <a
                    href="tel:+966507111345"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#E3C979]/30 bg-[#0D1A15] px-5 py-3 text-sm font-black text-[#E3C979] transition-all hover:border-[#E3C979] hover:bg-[#152C21] sm:px-6 sm:text-base"
                  >
                    <Phone size={18} className="shrink-0" />
                    اتصل بنا
                  </a>
                </div>
              </div>

              {/* الخدمات */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#D9BE78]">
                  خدماتنا في الدمام:
                </p>
                <div className="space-y-2">
                  {[
                    "مظلات في الدمام",
                    "سواتر في الدمام",
                    "هناجر ومستودعات في الدمام",
                    "مظلات قصور ومشاريع في الدمام",
                    "مظلات مسابح في الدمام",
                    "مظلات شد إنشائي في الدمام",
                    "برجولات وجلسات في الدمام",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-sm text-[#F5F0E7]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#D9BE78]" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* المناطق الثانوية */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-extrabold text-[#07100D]">
              مناطق أخرى نخدمها
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {secondaryAreas.map((area) => (
              <div
                key={area}
                className="group flex items-center justify-center gap-2 rounded-xl border border-[#C8A85D]/20 bg-white p-4 shadow-sm transition-all hover:border-[#C8A85D]/50 hover:shadow-md"
              >
                <MapPin size={16} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                <span className="text-sm font-extrabold text-[#07100D] sm:text-base">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
