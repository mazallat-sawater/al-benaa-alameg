
import { client, contactLinks } from "@/config/client";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-[#07100D] py-16 sm:py-20 lg:py-24"
    >
      {/* زخارف خلفية ثابتة */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C8A85D]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#183B2C]/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D9BE78]/35 bg-[#0D1A15] shadow-2xl">
          {/* الإطار الذهبي */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-[#8B672F] via-[#E3C979] to-[#8B672F]" />

          {/* زخرفة جانبية */}
          <div
            className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#D9BE78]/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#D9BE78]/10"
            aria-hidden="true"
          />

          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-14">
            {/* النص */}
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9BE78]/30 bg-[#07100D] px-4 py-2 text-xs font-bold text-[#D9BE78]">
                <Sparkles size={14} />
                <span>خدمة العملاء في الدمام</span>
              </div>

              <h2 className="text-3xl font-black leading-[1.35] text-[#F5F0E7] sm:text-4xl lg:text-5xl">
                مظلات وسواتر البناء العملاق
                <span className="mt-2 block text-[#D9BE78]">
                  تواصل معنا الآن
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm font-medium leading-8 text-[#AEB8B2] sm:text-base">
                مؤسسة البناء العملاق للمقاولات العامة تقدم خدمة سريعة ومباشرة
                في الدمام. تواصل معنا عبر واتساب أو الهاتف للحصول على استشارة
                مجانية لمشروعك.
              </p>

              {/* شريط الثقة */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-[#C8CCC9]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#D9BE78]" />
                  <span>سرعة التواصل</span>
                </div>

                <div className="hidden h-4 w-px bg-[#D9BE78]/25 sm:block" />

                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#D9BE78]" />
                  <span>متاحون 24/7</span>
                </div>
              </div>
            </div>

            {/* الأزرار */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
              {/* واتساب */}
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-[#D9BE78] bg-gradient-to-l from-[#D9BE78] via-[#C8A85D] to-[#8B672F] px-6 text-sm font-black text-[#07100D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(217,190,120,0.22)]"
              >
                <MessageCircle
                  size={22}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <span>تواصل عبر واتساب</span>

                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>

              {/* الهاتف */}
              <a
                href={contactLinks.phone}
                className="group flex min-h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-2xl border border-[#D9BE78]/50 bg-[#07100D] px-6 text-sm font-black text-[#F5F0E7] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9BE78] hover:bg-[#10231B]"
              >
                <Phone
                  size={22}
                  strokeWidth={2}
                  className="text-[#D9BE78] transition-transform duration-300 group-hover:scale-105"
                />

                <span>اتصل الآن</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

