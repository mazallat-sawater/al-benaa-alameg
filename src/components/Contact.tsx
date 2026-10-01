
import {
  Instagram,
  MapPin,
  Phone,
  Crown,
  Clock3,
  ArrowLeft,
  Navigation,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { client, contactLinks } from "@/config/client";

const WhatsAppIcon = ({
  className = "h-8 w-8",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452" />
  </svg>
);

const TikTokIcon = ({
  className = "h-6 w-6",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.94v13.67a2.89 2.89 0 11-2-2.75V9.02a6.84 6.84 0 10-1.08 13.6 6.84 6.84 0 006.84-6.84V8.26a8.77 8.77 0 005.13 1.65V6.02a4.84 4.84 0 01-1.18-.33z" />
  </svg>
);

const socialLinks = [
  {
    label: "إنستقرام",
    href: "https://instagram.com/kjh_fdd",
    icon: (
      <Instagram
        size={20}
        strokeWidth={1.8}
        className="shrink-0"
      />
    ),
  },
  ...(client.tiktok
    ? [
        {
          label: "تيك توك",
          href: client.tiktok,
          icon: <TikTokIcon className="h-5 w-5" />,
        },
      ]
    : []),
];

export const Contact = () => {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-[#07100D] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#B8944E]/[0.07] blur-[120px]" />

        <div className="absolute -bottom-48 -left-40 h-[600px] w-[600px] rounded-full bg-[#17382B]/50 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A85D]/[0.025] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,195,125,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,195,125,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#C8A85D]/70 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#C8A85D]/25 bg-[#C8A85D]/[0.055] px-5 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9BE78] shadow-[0_0_12px_rgba(217,190,120,0.8)]" />

            <Crown size={15} className="text-[#D9BE78]" />

            <span className="text-xs font-bold tracking-wide text-[#D9BE78] sm:text-sm">
              تواصل مع البناء العملاق
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D9BE78] shadow-[0_0_12px_rgba(217,190,120,0.8)]" />
          </div>

          <h2 className="text-4xl font-black leading-[1.15] tracking-tight text-[#F5F0E7] sm:text-5xl lg:text-7xl">
            مشروعك يبدأ
            <span className="mt-3 block bg-gradient-to-l from-[#8B672F] via-[#E3C979] to-[#A47C37] bg-clip-text text-transparent">
              من هنا
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#9FAAA4] sm:text-base">
            تحدث معنا عن مشروعك، وسنكون معك من أول فكرة حتى اختيار الحل
            المناسب للتنفيذ.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A85D]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C8A85D]" />
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A85D]/60" />
          </div>
        </div>

        {/* =====================================================
            MAIN CONTACT EXPERIENCE
        ====================================================== */}
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#C8A85D]/20 bg-gradient-to-br from-[#152C21] via-[#0C1B15] to-[#08110E] shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
            {/* gold frame */}
            <div className="pointer-events-none absolute inset-3 rounded-[2.15rem] border border-[#C8A85D]/[0.06]" />

            {/* decorative rings */}
            <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full border border-[#C8A85D]/10" />

            <div className="pointer-events-none absolute -left-14 -top-14 h-68 w-68 rounded-full border border-[#C8A85D]/10" />

            <div className="pointer-events-none absolute -bottom-48 -right-24 h-[500px] w-[500px] rounded-full bg-[#C8A85D]/[0.045] blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* =================================================
                  WHATSAPP HERO
              ================================================== */}
              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-right">
                  {/* BIG WHATSAPP ICON */}
                  <div className="relative mb-9">
                    <div className="absolute inset-[-18px] rounded-full border border-[#C8A85D]/10" />

                    <div className="absolute inset-[-9px] rounded-full border border-[#C8A85D]/20" />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#E3C979]/50 bg-gradient-to-br from-[#E0C477] via-[#C5A252] to-[#8D692F] text-[#07100D] shadow-[0_20px_55px_rgba(200,168,93,0.22)] transition-transform duration-500 hover:scale-105">
                      <WhatsAppIcon className="h-14 w-14" />

                      <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-[3px] border-[#152C21] bg-[#D9BE78] shadow-[0_0_15px_rgba(217,190,120,0.8)]" />
                    </div>
                  </div>

                  <div className="mb-3 text-[10px] font-black tracking-[0.3em] text-[#B8944E]">
                    WHATSAPP
                  </div>

                  <h3 className="text-3xl font-black text-[#F5F0E7] sm:text-4xl">
                    تواصل مباشر
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-8 text-[#9EA9A2] sm:text-base">
                    لديك استفسار؟ تريد معرفة السعر؟ أو لديك مشروع وتحتاج
                    استشارة؟ أرسل لنا التفاصيل مباشرة.
                  </p>

                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-9 inline-flex w-full items-center justify-center gap-4 rounded-2xl border border-[#E1C879]/50 bg-gradient-to-l from-[#D9BE78] via-[#C7A45A] to-[#A77F39] px-8 py-5 text-sm font-black text-[#07100D] shadow-[0_18px_45px_rgba(200,168,93,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(200,168,93,0.25)] sm:w-auto"
                  >
                    <span>تحدث معنا الآن</span>

                    <ArrowLeft
                      size={21}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </a>

                  <div className="mt-7 flex items-center gap-2 text-xs text-[#69766F]">
                    <ShieldCheck size={15} className="text-[#B8944E]" />
                    <span>تواصل سريع ومباشر</span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  PHONE PANEL
              ================================================== */}
              <div className="relative border-t border-[#C8A85D]/10 bg-[#050C09]/30 p-8 sm:p-12 lg:border-r lg:border-t-0 lg:p-14">
                <div className="flex h-full flex-col justify-center">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#C8A85D]/50" />

                    <span className="text-[10px] font-black tracking-[0.2em] text-[#A98643]">
                      CALL US
                    </span>
                  </div>

                  {/* Phone emblem */}
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-[#C8A85D]/25 bg-[#C8A85D]/[0.055] text-[#D9BE78] shadow-inner">
                    <Phone size={28} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                  </div>

                  <p className="text-xs font-bold text-[#747F79]">
                    رقم التواصل
                  </p>

                  <a
                    href={contactLinks.phone}
                    dir="ltr"
                    className="mt-3 block text-3xl font-black tracking-wide text-[#F5F0E7] transition-colors hover:text-[#D9BE78] sm:text-4xl"
                  >
                    {client.phone}
                  </a>

                  <div className="my-8 h-px bg-gradient-to-l from-[#C8A85D]/30 via-[#C8A85D]/10 to-transparent" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C8A85D]/15 text-[#C8A85D]">
                      <Clock3 size={20} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#E9E3D7]">
                        متاحون على مدار الساعة
                      </p>

                      <p className="mt-1 text-xs text-[#69756E]">
                        للاتصال والاستفسارات
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              THREE PREMIUM CONTACT CARDS
          ====================================================== */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {/* PHONE */}
            <a
              href={contactLinks.phone}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#C8A85D]/20 bg-[#0D1A15] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A85D]/50 hover:shadow-[0_25px_60px_rgba(217,190,120,0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#D9BE78] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-7 flex items-center justify-between">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A85D]/30 bg-gradient-to-br from-[#C8A85D]/15 to-transparent text-[#D9BE78]">
                  <Phone size={28} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />

                  <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 rounded-full bg-[#D9BE78]" />
                </div>

                <ArrowLeft
                  size={18}
                  className="text-[#65563A] transition-all duration-300 group-hover:-translate-x-1 group-hover:text-[#D9BE78]"
                />
              </div>

              <p className="text-[10px] font-black tracking-[0.18em] text-[#D9BE78]">
                PHONE
              </p>

              <h3
                dir="ltr"
                className="mt-2 text-2xl font-black tracking-wide text-[#F5F0E7]"
              >
                {client.phone}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#B8C1BB]">
                اتصال مباشر لفريقنا
              </p>
            </a>

            {/* LOCATION */}
            <a
              href="https://maps.google.com/?q=الريان،+الدمام،+السعودية"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#C8A85D]/20 bg-[#0D1A15] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A85D]/50 hover:shadow-[0_25px_60px_rgba(217,190,120,0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#D9BE78] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-7 flex items-center justify-between">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A85D]/30 bg-gradient-to-br from-[#C8A85D]/15 to-transparent text-[#D9BE78]">
                  <MapPin size={28} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                </div>

                <Navigation
                  size={18}
                  className="text-[#65563A] transition-colors group-hover:text-[#D9BE78]"
                />
              </div>

              <p className="text-[10px] font-black tracking-[0.18em] text-[#D9BE78]">
                LOCATION
              </p>

              <h3 className="mt-2 text-xl font-black text-[#F5F0E7]">
                موقعنا في الدمام
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#B8C1BB]">
                حي الريان
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D9BE78] transition-colors group-hover:text-[#E8D08A]">
                <span>عرض الموقع</span>
                <ArrowLeft size={14} />
              </div>
            </a>

            {/* HOURS */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#C8A85D]/20 bg-[#0D1A15] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A85D]/50 hover:shadow-[0_25px_60px_rgba(217,190,120,0.15)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#D9BE78] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-7 flex items-center justify-between">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A85D]/30 bg-gradient-to-br from-[#C8A85D]/15 to-transparent text-[#D9BE78]">
                  <Clock3 size={27} strokeWidth={2} />
                </div>

                <div className="relative flex h-3 w-3">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#D9BE78]/50" />
                  <span className="relative h-3 w-3 rounded-full bg-[#D9BE78] shadow-[0_0_12px_rgba(217,190,120,0.7)]" />
                </div>
              </div>

              <p className="text-[10px] font-black tracking-[0.18em] text-[#D9BE78]">
                AVAILABILITY
              </p>

              <h3 className="mt-2 text-xl font-black text-[#F5F0E7]">
                على مدار الساعة
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#B8C1BB]">
                متاحون للتواصل والاستفسارات طوال اليوم
              </p>
            </div>
          </div>

          {/* =====================================================
              AREAS
          ====================================================== */}
          <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-[#C8A85D]/20 bg-[#0D1A15] p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D9BE78]/[0.05] blur-3xl" />

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A85D]/30 bg-[#C8A85D]/[0.08] text-[#D9BE78]">
                  <MapPin size={26} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />

                  <div className="absolute inset-2 rounded-full border border-[#C8A85D]/15" />
                </div>

                <p className="text-[10px] font-black tracking-[0.25em] text-[#D9BE78]">
                  SERVICE AREAS
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#F5F0E7]">
                  نخدمكم في المنطقة الشرقية
                </h3>

                <p className="mt-2 text-base text-[#B8C1BB]">
                  خدماتنا متاحة في عدد من المدن والمناطق
                </p>
              </div>

              <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
                {client.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[#C8A85D]/25 bg-[#C8A85D]/[0.08] px-4 py-2 text-sm font-bold text-[#F5F0E7] transition-all duration-300 hover:border-[#D9BE78] hover:bg-[#D9BE78]/15"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              SOCIAL
          ====================================================== */}
          {socialLinks.length > 0 ? (
            <div className="mt-14 text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#D9BE78]/40" />

                <Sparkles size={14} className="text-[#D9BE78]" />

                <span className="text-sm font-bold text-[#B8C1BB]">
                  تابعونا على منصات التواصل
                </span>

                <Sparkles size={14} className="text-[#D9BE78]" />

                <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#D9BE78]/40" />
              </div>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C8A85D]/25 bg-[#0D1A15] text-[#D9BE78] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9BE78] hover:bg-[#D9BE78]/15 hover:shadow-[0_15px_35px_rgba(217,190,120,0.15)]"
                  >
                    <Instagram
                      size={24}
                      strokeWidth={2}
                      className="shrink-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {/* =====================================================
              FOOTER SIGNATURE
          ====================================================== */}
          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C8A85D]/20" />

            <div className="flex items-center gap-2 text-[10px] font-bold text-[#505C55]">
              <Crown size={12} className="text-[#806A3B]" />
              <span>مؤسسة البناء العملاق للمقاولات العامة</span>
            </div>

            <span className="h-px w-12 bg-[#C8A85D]/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

