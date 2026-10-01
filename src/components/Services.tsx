
import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

import { client } from "@/config/client";
import { servicesList } from "@/config/services";

export const Services = () => {
  return (
    <section
      id="services"
      dir="rtl"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-28"
    >
      {/* خلفية زخرفية خفيفة */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(18,55,42,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* لمسات لونية */}
      <div
        className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#12372A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* عنوان القسم */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white/70 px-4 py-2 text-sm font-bold text-[#12372A] shadow-sm backdrop-blur-sm">
            <Wrench size={15} className="shrink-0 text-[#C9A227]" />
            <span>خدماتنا المتكاملة</span>
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight text-[#12372A] sm:text-4xl lg:text-5xl">
            خدمات {client.shortName}
            <span className="mt-2 block bg-gradient-to-l from-[#8A6A1F] via-[#C9A227] to-[#E0BD52] bg-clip-text text-transparent">
              للمظلات والسواتر والمشاريع
            </span>
          </h2>

          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#12372A]/70 sm:text-base">
            نقدم مجموعة متكاملة من خدمات المظلات والسواتر والهناجر والمشاريع
            والمقاولات العامة في المنطقة الشرقية، مع حلول تناسب احتياج كل
            مشروع وموقع.
          </p>
        </div>

        {/* الخدمات */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <Link
                key={service.id}
                to={service.route}
                className={`group block min-w-0 ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#12372A]/10 bg-white shadow-[0_10px_35px_rgba(18,55,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A227]/40 hover:shadow-[0_20px_50px_rgba(18,55,42,0.13)] ${
                    isFeatured ? "lg:flex-row" : ""
                  }`}
                >
                  {/* الخط الذهبي عند التحويم */}
                  <span className="absolute inset-x-0 top-0 z-20 h-1 origin-right scale-x-0 bg-gradient-to-l from-[#C9A227] to-[#8A6A1F] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* الصورة */}
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured
                        ? "h-56 sm:h-64 lg:h-auto lg:min-h-[340px] lg:w-[52%]"
                        : "h-48 sm:h-52"
                    }`}
                  >
                    <img
                      src={service.cardImage}
                      alt={`${service.title} - ${client.companyName}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                    />

                    {/* طبقة الصورة */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* رقم الخدمة */}
                    <span className="absolute right-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/30 bg-[#12372A]/75 px-2 text-xs font-black text-[#F7F5EF] shadow-lg backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* اسم الخدمة على الصورة للبطاقة الرئيسية */}
                    {isFeatured && (
                      <div className="absolute bottom-5 right-5 left-5">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-[#C9A227]/40 bg-[#12372A]/80 px-3 py-2 text-sm font-bold text-white backdrop-blur-md">
                          <Icon size={16} className="text-[#C9A227]" />
                          {service.title}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* المحتوى */}
                  <div
                    className={`flex flex-1 flex-col p-5 sm:p-6 ${
                      isFeatured ? "lg:w-[48%] lg:justify-center lg:p-7" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {!isFeatured && (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A227]/25 bg-[#12372A] text-[#C9A227] shadow-sm transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#12372A]">
                            <Icon size={19} className="shrink-0" />
                          </div>
                        )}

                        <h3 className="text-base font-black leading-snug text-[#12372A] sm:text-lg">
                          {isFeatured ? "حلول متكاملة للمشاريع" : service.title}
                        </h3>
                      </div>

                      {!isFeatured && (
                        <span className="shrink-0 text-xs font-black text-[#C9A227]/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>

                    <p className="mb-5 flex-1 text-sm leading-7 text-[#12372A]/65 sm:text-base">
                      {service.introDescription.slice(0, 140)}...
                    </p>

                    <ul className="mb-5 space-y-2.5">
                      {service.benefits.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs leading-6 text-[#12372A]/65 sm:text-sm"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-1 shrink-0 text-[#C9A227]"
                          />
                          <span className="min-w-0 break-words">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between border-t border-[#12372A]/10 pt-4 text-sm font-black text-[#8A6A1F]">
                      <span>تفاصيل الخدمة</span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12372A] text-[#C9A227] transition-all duration-300 group-hover:-translate-x-1 group-hover:bg-[#C9A227] group-hover:text-[#12372A]">
                        <ArrowLeft size={17} className="shrink-0" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* سطر ختامي */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm font-semibold text-[#12372A]/55">
            خدمات متنوعة وحلول عملية تناسب المنازل والمشاريع والمنشآت في
            المنطقة الشرقية
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

