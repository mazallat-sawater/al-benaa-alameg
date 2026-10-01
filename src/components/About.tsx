
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Target,
  Crown,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { client } from "@/config/client";

const features = [
  {
    icon: Award,
    title: "جودة في التنفيذ",
    description:
      "نحرص على تنفيذ الأعمال بعناية واختيار الحل المناسب لطبيعة كل مشروع واحتياج العميل.",
  },
  {
    icon: ShieldCheck,
    title: "اهتمام بالتفاصيل",
    description:
      "نهتم بالمقاسات والتفاصيل وجودة التشطيب بما يتناسب مع طبيعة العمل والموقع.",
  },
  {
    icon: Zap,
    title: "تنفيذ احترافي",
    description:
      "نعمل على إنجاز المشاريع بتنظيم ودقة واهتمام بمتطلبات كل موقع.",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description:
      "فريق متخصص في تنفيذ المظلات والسواتر والهناجر والأعمال المتنوعة للمشاريع والمنازل.",
  },
  {
    icon: Building2,
    title: "خدمات متنوعة",
    description:
      "نوفر مجموعة واسعة من خدمات المقاولات تشمل المظلات والسواتر والهناجر والعزل والتشطيبات.",
  },
  {
    icon: Target,
    title: "حلول حسب المشروع",
    description:
      "نراعي طبيعة الموقع والاستخدام والمساحة عند اختيار وتنفيذ الحل المناسب لكل مشروع.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative overflow-hidden bg-[#0B1712] py-20 sm:py-24 lg:py-28"
    >
      {/* خلفية زخرفية */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#D9BE78]/8 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#13251C]/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217, 190, 120, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 190, 120, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* العنوان */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(217, 190, 120, 0.28)] bg-[#13251C]/50 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Crown size={15} className="text-[#D9BE78]" />
            <span className="text-sm font-bold text-[#D9BE78]">
              من نحن
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight text-[#F5F0E7] sm:text-4xl lg:text-5xl">
            مؤسسة البناء العملاق
            <span className="mt-2 block bg-gradient-to-l from-[#E8D08A] via-[#D9BE78] to-[#E8D08A] bg-clip-text text-transparent">
              للمقاولات العامة
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B8C1BB] sm:text-lg">
            {client.description}
          </p>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* الجانب التعريفي */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(217, 190, 120, 0.28)] bg-[#172B21] p-7 shadow-[0_25px_70px_rgba(11, 23, 18, 0.25)] sm:p-9">
              {/* زخرفة ذهبية */}
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[rgba(217, 190, 120, 0.15)]" />
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full border border-[rgba(217, 190, 120, 0.1)]" />

              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9BE78] text-[#0B1712] shadow-lg">
                    <Building2 size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-[#D9BE78]">
                      خبرة وتنوع
                    </p>
                    <h3 className="mt-1 text-lg font-black text-[#F5F0E7]">
                      في أعمال المقاولات
                    </h3>
                  </div>
                </div>

                <p className="text-base leading-8 text-[#B8C1BB] sm:text-lg">
                  مؤسسة البناء العملاق للمقاولات العامة تقدم حلولًا متنوعة
                  للمنازل والمشاريع، تشمل المظلات والسواتر والهناجر ومظلات
                  القصور والمسابح والشد الإنشائي والبرجولات والجلسات الخارجية
                  وملاحق المجالس والقرميد وبيوت الشعر والمستودعات والشبوك
                  والدرابزين وأعمال الألمنيوم والخشب والأصباغ والعزل المائي
                  والحراري.
                </p>

                {/* نقاط مختصرة */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "حلول تناسب طبيعة كل مشروع",
                    "اهتمام بالتفاصيل والتشطيب",
                    "تنوع في خدمات المقاولات",
                    "خدمة في مدن المنطقة الشرقية",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-[rgba(217, 190, 120, 0.15)] bg-[#13251C]/40 px-3.5 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#D9BE78]"
                      />
                      <span className="text-sm font-semibold text-[#F5F0E7] sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* مناطق الخدمة */}
                <div className="mt-8 border-t border-[rgba(217, 190, 120, 0.15)] pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-[#D9BE78]" />
                    <h4 className="font-black text-[#F5F0E7]">مناطق خدمتنا</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {client.serviceAreas.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[rgba(217, 190, 120, 0.25)] bg-[#D9BE78]/10 px-3 py-1.5 text-sm font-medium text-[#F5F0E7]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* شارة ذهبية */}
            <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-[rgba(217, 190, 120, 0.28)] bg-[#172B21] px-5 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <ShieldCheck size={19} className="text-[#D9BE78]" />
                <span className="text-xs font-extrabold text-[#F5F0E7]">
                  تنفيذ باهتمام ودقة
                </span>
              </div>
            </div>
          </div>

          {/* المميزات */}
          <div>
            <div className="mb-7">
              <p className="mb-2 text-sm font-bold text-[#D9BE78]">
                لماذا البناء العملاق؟
              </p>

              <h3 className="text-2xl font-black leading-tight text-[#F5F0E7] sm:text-3xl">
                تفاصيل صغيرة تصنع
                <span className="text-[#E8D08A]"> فرقًا كبيرًا</span>
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#B8C1BB]">
                نهتم بأن يكون كل مشروع مناسبًا للموقع والاستخدام، مع التركيز
                على جودة التنفيذ والتفاصيل التي تمنح العمل مظهرًا عمليًا
                وأنيقًا.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border border-[rgba(217, 190, 120, 0.15)] bg-[#13251C] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(217, 190, 120, 0.4)] hover:shadow-[0_15px_35px_rgba(217, 190, 120, 0.1)]"
                  >
                    {/* خط ذهبي عند التحويم */}
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-[#D9BE78] to-[#E8D08A] transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#172B21] text-[#D9BE78] transition-all duration-300 group-hover:bg-[#D9BE78] group-hover:text-[#0B1712]">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-[10px] font-black text-[#D9BE78]">
                            0{index + 1}
                          </span>

                          <h4 className="text-sm font-extrabold text-[#F5F0E7] sm:text-base">
                            {feature.title}
                          </h4>
                        </div>

                        <p className="text-sm leading-6 text-[#B8C1BB] sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

