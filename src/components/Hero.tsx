
import { Phone, MessageCircle, ArrowDown, HardHat, Sparkles } from "lucide-react";

import { client, contactLinks } from "@/config/client";

export const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[100dvh] overflow-hidden bg-[#12372A]"
    >
      {/* صورة الخلفية */}
      <img
        src={`/al-benaa-alameg/hero1/w.webp`}
        alt="مظلات وسواتر وهناجر في الدمام والخبر والمنطقة الشرقية"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* طبقات الهوية البصرية */}
      <div className="absolute inset-0 bg-[#12372A]/65" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#12372A]/95 via-[#12372A]/65 to-[#12372A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/80 via-transparent to-black/10" />

      {/* لمسات ذهبية */}
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />

      {/* المحتوى */}
      <div className="relative z-10 flex min-h-[100dvh] items-center px-5 py-28 sm:px-8 lg:px-16">
        <div className="w-full max-w-4xl animate-elegant-fade">
          {/* الشارة */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#12372A]/50 px-4 py-2 text-sm font-bold text-[#F7F5EF] shadow-lg backdrop-blur-md">
            <HardHat size={16} className="shrink-0 text-[#C9A227]" />
            <span>{client.tagline}</span>
          </div>

          {/* العنوان */}
          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-[1.25] tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-7xl">
            {client.hero.title}

            <span className="mt-3 block bg-gradient-to-l from-[#E0BD52] via-[#C9A227] to-[#8A6A1F] bg-clip-text text-transparent drop-shadow-lg">
              {client.hero.subtitle}
            </span>
          </h1>

          {/* خط ذهبي */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-20 bg-gradient-to-l from-[#C9A227] to-transparent" />
            <Sparkles size={15} className="text-[#C9A227]" />
            <span className="h-px w-10 bg-gradient-to-l from-[#C9A227] to-transparent" />
          </div>

          {/* الوصف */}
          <p className="mb-9 max-w-2xl text-base leading-8 text-[#F7F5EF]/90 drop-shadow-lg sm:text-lg lg:text-xl">
            {client.hero.paragraph1}
          </p>

          {/* الأزرار */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#C9A227] bg-[#C9A227] px-7 py-4 text-sm font-extrabold text-[#12372A] shadow-[0_12px_35px_rgba(201,162,39,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0BD52] hover:shadow-[0_18px_45px_rgba(201,162,39,0.35)] sm:w-auto"
            >
              <MessageCircle
                size={20}
                strokeWidth={2}
                className="shrink-0 transition-all duration-300 group-hover:scale-105"
              />
              تواصل معنا عبر واتساب
            </a>

            <a
              href={contactLinks.phone}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#F7F5EF]/30 bg-[#12372A]/45 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/70 hover:bg-[#12372A]/70 sm:w-auto"
            >
              <Phone
                size={20}
                strokeWidth={2}
                className="shrink-0 text-[#C9A227] transition-all duration-300 group-hover:scale-105"
              />
              اتصل الآن
            </a>
          </div>

          {/* معلومات سريعة */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#F7F5EF]/75">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
              المنطقة الشرقية
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
              خدمة متواصلة
            </span>
          </div>
        </div>
      </div>

      {/* سهم النزول */}
      <a
        href="#services"
        className="group absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
        aria-label="الانتقال إلى الخدمات"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/60 bg-[#12372A]/70 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]">
          <ArrowDown
            size={19}
            className="text-[#C9A227] transition-colors group-hover:text-[#12372A]"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
