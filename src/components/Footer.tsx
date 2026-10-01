
import {
  Phone,
  MapPin,
  Award,
  Instagram,
  MapPinned,
  Crown,
  Building2,
  ShieldCheck,
  Zap,
  ArrowUpLeft,
  Clock3,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { client, contactLinks } from "@/config/client";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.94v13.67a2.89 2.89 0 11-2-2.75V9.02a6.84 6.84 0 10-1.08 13.6 6.84 6.84 0 006.84-6.84V8.26a8.77 8.77 0 005.13 1.65V6.02a4.84 4.84 0 01-1.18-.33z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-7 w-7 shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const socialLinks = [
  ...(client.tiktok
    ? [
        {
          label: "تيك توك",
          href: client.tiktok,
          icon: <TikTokIcon />,
        },
      ]
    : []),

  ...(client.instagram
    ? [
        {
          label: "إنستقرام",
          href: client.instagram,
          icon: <Instagram size={20} className="shrink-0" />,
        },
      ]
    : []),

  ...(client.mapsUrl
    ? [
        {
          label: "خرائط جوجل",
          href: client.mapsUrl,
          icon: <MapPinned size={20} className="shrink-0" />,
        },
      ]
    : []),
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-[#D9BE78]/35 bg-[#F7F4EC] text-[#183B2C]"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#D9BE78]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#183B2C]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Brand + CTA */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[22px] border border-[#D9BE78]/70 bg-white p-2 shadow-[0_12px_35px_rgba(24,59,44,0.10)]">
                <img
                  src={`${import.meta.env.BASE_URL}icon1/icon.webp`}
                  alt={client.shortName}
                  className="h-full w-full object-contain"
                  width="76"
                  height="76"
                  decoding="async"
                />

                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F7F4EC] bg-[#D9BE78] shadow-md">
                  <Crown
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#183B2C]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles
                    size={15}
                    strokeWidth={1.7}
                    className="text-[#A77E32]"
                  />

                  <span className="text-xs font-bold tracking-[0.18em] text-[#A77E32]">
                    الجودة • الفخامة • الاحتراف
                  </span>
                </div>

                <h2 className="text-xl font-black leading-tight text-[#183B2C] sm:text-2xl lg:text-3xl">
                  {client.shortName}
                </h2>

                <div className="mt-1 flex items-center gap-2">
                  <Award
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#A77E32]"
                  />

                  <span className="text-sm font-bold text-[#6D756F]">
                    للمقاولات العامة
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#69736D] sm:text-base">
              {client.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {client.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9BE78]/55 bg-white px-3.5 py-2 text-xs font-bold text-[#496056] shadow-sm"
                >
                  <MapPin
                    size={16}
                    strokeWidth={2}
                    className="text-[#A77E32] transition-all duration-300 group-hover:scale-105"
                  />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#D9BE78]/60 bg-[#183B2C] p-6 shadow-[0_18px_50px_rgba(24,59,44,0.16)] sm:p-7">
            <div
              className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#D9BE78]/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9BE78]/50 bg-[#D9BE78] text-[#183B2C]">
                  <MessageCircle size={22} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#D9BE78]">
                    جاهزون لخدمتكم
                  </p>

                  <h3 className="text-lg font-black text-white">
                    ابدأ مشروعك معنا
                  </h3>
                </div>
              </div>

              <p className="mb-5 text-sm leading-7 text-white/70">
                تواصل معنا الآن للاستفسار عن خدمات المظلات والسواتر والهناجر
                والمقاولات العامة.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[54px] items-center justify-center gap-3 rounded-2xl bg-[#D9BE78] px-5 text-sm font-black text-[#183B2C] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5CD92] hover:shadow-xl"
                >
                  <WhatsAppIcon />

                  <span>تواصل عبر واتساب</span>

                  <ArrowUpLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href={contactLinks.phone}
                  className="group flex min-h-[54px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <Phone size={20} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />

                  <span dir="ltr">{client.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10 h-px bg-gradient-to-l from-transparent via-[#D9BE78]/65 to-transparent" />

        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Quick links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9BE78]/60 bg-white text-[#A77E32] shadow-sm">
                <ArrowUpLeft size={19} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-[10px] font-bold text-[#A77E32]">
                  اكتشف الموقع
                </span>

                <h4 className="text-base font-black text-[#183B2C]">
                  روابط سريعة
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {client.navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#68736D] transition-all duration-300 hover:border-[#D9BE78]/40 hover:bg-white hover:text-[#183B2C] hover:shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A85D] transition-transform duration-300 group-hover:scale-150" />

                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9BE78]/60 bg-white text-[#A77E32] shadow-sm">
                <Building2 size={20} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-[10px] font-bold text-[#A77E32]">
                  تخصصنا
                </span>

                <h4 className="text-base font-black text-[#183B2C]">
                  خدماتنا
                </h4>
              </div>
            </div>

            <div className="space-y-2">
              {client.services.slice(0, 6).map((service) => (
                <div
                  key={service.title}
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#68736D] transition-all duration-300 hover:border-[#D9BE78]/35 hover:bg-white hover:text-[#183B2C]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#183B2C] text-[10px] font-black text-[#D9BE78]">
                    ✓
                  </span>

                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service areas */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9BE78]/60 bg-white text-[#A77E32] shadow-sm">
                <MapPinned size={20} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-[10px] font-bold text-[#A77E32]">
                  حضورنا
                </span>

                <h4 className="text-base font-black text-[#183B2C]">
                  نطاق الخدمة
                </h4>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D9BE78]/45 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <MapPin
                  size={18}
                  strokeWidth={2}
                  className="text-[#A77E32] transition-all duration-300 group-hover:scale-105"
                />

                <span className="text-sm font-black text-[#183B2C]">
                  نخدمكم في المنطقة الشرقية
                </span>
              </div>

              <p className="text-sm leading-7 text-[#737C77]">
                {client.serviceAreas.join(" · ")}
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-[#183B2C]/10 pt-4">
                <Clock3
                  size={18}
                  strokeWidth={2}
                  className="text-[#A77E32] transition-all duration-300 group-hover:scale-105"
                />

                <span className="text-xs font-bold text-[#68736D]">
                  {client.hours}
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9BE78]/60 bg-white text-[#A77E32] shadow-sm">
                <Phone size={20} strokeWidth={1.7} />
              </div>

              <div>
                <span className="block text-[10px] font-bold text-[#A77E32]">
                  نحن هنا
                </span>

                <h4 className="text-base font-black text-[#183B2C]">
                  تواصل معنا
                </h4>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={contactLinks.phone}
                className="group flex items-center gap-3 rounded-2xl border border-[#D9BE78]/45 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A85D] hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183B2C] text-[#D9BE78]">
                  <Phone size={20} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
                </div>

                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-[#8A918D]">
                    اتصل بنا
                  </span>

                  <span
                    dir="ltr"
                    className="block truncate text-sm font-black text-[#183B2C]"
                  >
                    {client.phone}
                  </span>
                </div>
              </a>

              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[#25D366]/25 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <WhatsAppIcon />
                </div>

                <div>
                  <span className="block text-[11px] font-semibold text-[#8A918D]">
                    واتساب
                  </span>

                  <span className="block text-sm font-black text-[#183B2C]">
                    تواصل فوري
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
          {[
            {
              icon: ShieldCheck,
              label: "ثقة",
              text: "التزام في التنفيذ",
            },
            {
              icon: Zap,
              label: "سرعة",
              text: "استجابة سريعة",
            },
            {
              icon: Award,
              label: "جودة",
              text: "عناية في التفاصيل",
            },
          ].map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#D9BE78]/45 bg-white px-3 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A85D] hover:shadow-md sm:flex-row sm:gap-4 sm:text-right"
            >
              <div className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#183B2C] text-[#D9BE78] shadow-sm sm:mb-0">
                <Icon size={20} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
              </div>

              <div>
                <span className="block text-sm font-black text-[#183B2C]">
                  {label}
                </span>

                <span className="mt-0.5 block text-[10px] font-semibold text-[#8A918D] sm:text-xs">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        {socialLinks.length > 0 && (
          <div className="mt-12 border-t border-[#D9BE78]/40 pt-8">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="text-center sm:text-right">
                <span className="block text-xs font-bold text-[#A77E32]">
                  تابع جديدنا
                </span>

                <p className="mt-1 text-sm font-bold text-[#59655F]">
                  تابعنا على وسائل التواصل الاجتماعي
                </p>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D9BE78]/55 bg-white text-[#183B2C] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A85D] hover:bg-[#183B2C] hover:text-[#D9BE78] hover:shadow-md"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-[#D9BE78]/40 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-right">
            <p className="text-xs font-medium text-[#8A918D] sm:text-sm">
              © {year} {client.shortName} — جميع الحقوق محفوظة
            </p>

            <a
              href="https://wa.me/967779098659"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="التواصل مع م/حسام منور عبر واتساب"
              className="group inline-flex items-center gap-2 text-xs font-bold text-[#A77E32] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#183B2C] sm:text-sm"
            >
              <MessageCircle
                size={16}
                strokeWidth={2}
                className="transition-all duration-300 group-hover:scale-105"
              />

              <span>تصميم وتطوير</span>

              <span className="font-black text-[#183B2C] underline decoration-[#D9BE78] decoration-1 underline-offset-4 transition-colors group-hover:text-[#A77E32]">
                م/حسام منور
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export default Footer;

