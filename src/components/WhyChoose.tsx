
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Target,
  Crown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "جودة التنفيذ",
    desc: "نهتم بجودة التنفيذ في كل مشروع مع اختيار الخامات المناسبة والاهتمام بالتفاصيل النهائية.",
    icon: Award,
  },
  {
    number: "02",
    title: "دقة العمل",
    desc: "نراعي المقاسات والتفاصيل بدقة لضمان تنفيذ المشروع وفق المتطلبات والشكل المطلوب.",
    icon: Target,
  },
  {
    number: "03",
    title: "سرعة الاستجابة",
    desc: "نستقبل طلبات العميل ونتواصل معه بسرعة لفهم الاحتياج وتقديم الحلول المناسبة.",
    icon: Zap,
  },
  {
    number: "04",
    title: "فريق متخصص",
    desc: "فريق من الفنيين والمتخصصين يعمل على تنفيذ كل مشروع وفق طبيعته ومتطلباته.",
    icon: Users,
  },
  {
    number: "05",
    title: "حلول مناسبة للمشروع",
    desc: "نقدم حلولًا تناسب طبيعة كل موقع واحتياج العميل مع مراعاة الاستخدام والمساحة.",
    icon: Building2,
  },
  {
    number: "06",
    title: "متابعة واهتمام بالعميل",
    desc: "نتابع المشروع من البداية وحتى التنفيذ مع اهتمام مستمر بالعميل وتفاصيل العمل.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      dir="rtl"
      className="relative overflow-hidden bg-[#07100D] py-20 sm:py-24 lg:py-28"
    >
      {/* خلفية زخرفية */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D9BE78 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C8A85D]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#1C5A40]/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* العنوان */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9BE78]/30 bg-[#D9BE78]/[0.07] px-4 py-2 text-sm font-bold text-[#D9BE78]">
            <Crown size={15} className="shrink-0" />
            <span>لماذا تختار البناء العملاق؟</span>
            <Sparkles size={13} className="shrink-0" />
          </div>

          <h2 className="mb-5 text-3xl font-black leading-[1.35] text-[#F5F0E7] sm:text-4xl lg:text-5xl">
            تفاصيل تصنع
            <span className="mt-2 block bg-gradient-to-l from-[#8B672F] via-[#E3C979] to-[#C8A85D] bg-clip-text text-transparent">
              فرقًا حقيقيًا
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#9FAAA4] sm:text-base">
            نعمل في مؤسسة البناء العملاق للمقاولات العامة على تقديم حلول
            متكاملة تجمع بين جودة التنفيذ، دقة التفاصيل، الالتزام بالمواعيد
            والاهتمام الحقيقي باحتياج كل مشروع.
          </p>
        </div>

        {/* البطاقات */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[24px] border border-[#D9BE78]/15 bg-[#0D1A15]/90 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D9BE78]/45 hover:bg-[#102119]"
              >
                {/* الخط الذهبي العلوي */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] origin-right scale-x-0 bg-gradient-to-l from-[#8B672F] via-[#E3C979] to-[#C8A85D] transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* الرقم */}
                <div className="absolute left-5 top-5 text-[11px] font-black tracking-[0.2em] text-[#D9BE78]/35">
                  {feature.number}
                </div>

                {/* الأيقونة */}
                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D9BE78]/25 bg-gradient-to-br from-[#C8A85D]/15 to-transparent text-[#E3C979] shadow-[inset_0_0_25px_rgba(217,190,120,0.04)] transition-all duration-500 group-hover:border-[#D9BE78]/55 group-hover:shadow-[0_10px_35px_rgba(201,168,93,0.12)]">
                  <div className="absolute inset-2 rounded-xl border border-[#D9BE78]/10" />
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* العنوان */}
                <h3 className="mb-3 text-lg font-black text-[#F5F0E7] transition-colors duration-300 group-hover:text-[#E3C979] sm:text-xl">
                  {feature.title}
                </h3>

                {/* الوصف */}
                <p className="min-h-[84px] text-sm leading-7 text-[#9FAAA4]">
                  {feature.desc}
                </p>

                {/* أسفل البطاقة */}
                <div className="mt-6 flex items-center justify-between border-t border-[#D9BE78]/10 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D9BE78]/75">
                    <CheckCircle2 size={15} />
                    <span>التزام في التنفيذ</span>
                  </div>

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#D9BE78] shadow-[0_0_10px_rgba(217,190,120,0.8)]"
                    aria-hidden="true"
                  />
                </div>

                {/* تأثير داخلي */}
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#C8A85D]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#C8A85D]/[0.12]"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* شريط الثقة */}
        <div className="mt-8 rounded-[24px] border border-[#D9BE78]/20 bg-gradient-to-l from-[#152C21] via-[#0D1A15] to-[#152C21] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.16)] sm:mt-10 sm:p-6">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4 text-center sm:text-right">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9BE78]/30 bg-[#D9BE78]/10 text-[#E3C979]">
                <ShieldCheck size={22} />
              </div>

              <div>
                <p className="text-sm font-black text-[#F5F0E7] sm:text-base">
                  جودة وتنفيذ باهتمام بالتفاصيل
                </p>
                <p className="mt-1 text-xs leading-6 text-[#9FAAA4]">
                  حلول تناسب طبيعة كل مشروع واحتياج العميل.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#D9BE78]">
              <Sparkles size={15} />
              <span>البناء العملاق</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

