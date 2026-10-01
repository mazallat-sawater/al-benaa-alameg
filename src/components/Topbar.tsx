
import { client, contactLinks } from "@/config/client";
import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const Topbar = () => {
  return (
    <div
      dir="rtl"
      className="relative z-50 hidden border-b border-[#C8A85D]/20 bg-[#FCFAF5] sm:block"
    >
      {/* لمعة ذهبية رفيعة */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#C8A85D]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[48px] w-full max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* الجهة اليمنى */}
        <div className="flex items-center gap-5">
          {/* المنطقة */}
          <div className="flex items-center gap-2.5 text-[#183B2C]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A85D]/30 bg-[#C8A85D]/10">
              <MapPin
                size={16}
                strokeWidth={1.8}
                className="text-[#9A762F] transition-all duration-300 group-hover:scale-105"
              />
            </span>

            <div className="leading-none">
              <span className="block text-[10px] font-semibold text-[#7C857F]">
                نخدمكم في
              </span>
              <span className="mt-1 block text-xs font-extrabold">
                المنطقة الشرقية
              </span>
            </div>
          </div>

          <span
            className="h-7 w-px bg-[#C8A85D]/20"
            aria-hidden="true"
          />

          {/* ساعات العمل */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A85D]/30 bg-white text-[#9A762F] shadow-sm">
              <Clock3 size={16} strokeWidth={1.8} className="transition-all duration-300 group-hover:scale-105" />
            </span>

            <div className="leading-none">
              <span className="block text-[10px] font-semibold text-[#7C857F]">
                متاحون لخدمتكم
              </span>
              <span className="mt-1 block text-xs font-extrabold text-[#183B2C]">
                {client.hours}
              </span>
            </div>
          </div>
        </div>

        {/* الجهة اليسرى */}
        <div className="flex items-center gap-3">
          {/* اسم المؤسسة */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#183B2C] text-[#D9BE78] shadow-sm">
              <Sparkles size={14} strokeWidth={1.8} />
            </span>

            <span className="text-xs font-black text-[#183B2C]">
              {client.shortName}
            </span>
          </div>

          {/* واتساب */}
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/[0.06] px-3.5 py-2 text-xs font-extrabold text-[#176B3A] transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
            aria-label="تواصل معنا عبر واتساب"
            data-gtm="whatsapp-topbar"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
              <MessageCircle size={14} strokeWidth={2} />
            </span>

            <span>واتساب</span>
          </a>

          {/* الهاتف */}
          <a
            href={contactLinks.phone}
            className="group flex items-center gap-2 rounded-full border border-[#C8A85D]/35 bg-gradient-to-l from-[#C8A85D]/15 to-[#C8A85D]/5 px-3.5 py-2 text-xs font-black text-[#183B2C] transition-all duration-300 hover:border-[#C8A85D]/60 hover:from-[#C8A85D]/20 hover:to-[#C8A85D]/10"
            aria-label={`اتصل بنا على ${client.phone}`}
            data-gtm="phone-topbar"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#183B2C] text-[#E3C979] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
              <Phone size={14} strokeWidth={2} />
            </span>

            <span dir="ltr">{client.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

