
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  CheckCircle,
  LayoutGrid,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { client } from "@/config/client";
import { servicesList, servicesById } from "@/config/services";

const projectServiceMap: Record<string, string> = {
  مظلات: "canopies",
  سواتر: "fencing",
  "هناجر ومستودعات": "warehouses",
  "مظلات شد إنشائي": "structuralCanopies",
  "برجولات وجلسات خارجية": "pergolas",
  "بيوت شعر": "fabricHouses",
  شبوك: "buildingFencing",
  قرميد: "roofingTiles",
  "عزل مائي وحراري": "thermalInsulation",
  "تنسيق حدائق": "landscaping",
};

const galleryImages = servicesList.flatMap((service) =>
  Array.from({ length: service.galleryImageCount }, (_, index) => ({
    src: `${import.meta.env.BASE_URL}${service.folder}/${index + 1}.webp`,
    alt: `${service.title} - ${client.shortName}`,
    serviceTitle: service.title,
  })),
);

export const Projects = () => {
  const featuredProjects = client.projects.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-24 lg:py-28"
      dir="rtl"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#12372A]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#12372A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-18">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/25 bg-white/70 px-4 py-2 text-xs font-bold text-[#8A6A1F] shadow-sm backdrop-blur-sm">
            <Building2 size={15} />
            <span>معرض أعمالنا</span>
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight text-[#12372A] sm:text-4xl lg:text-5xl">
            أعمال تُظهر
            <span className="mt-2 block text-[#C9A227]">
              جودة التنفيذ
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
            نستعرض مجموعة من أعمال {client.shortName} في المظلات والسواتر
            والهناجر والمشاريع والمرافق والمساحات الخارجية في المنطقة الشرقية.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-20">
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A227]/20" />

            <h3 className="flex shrink-0 items-center gap-2 text-base font-black text-[#12372A] sm:text-lg">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              مشاريع مميزة
            </h3>

            <div className="h-px flex-1 bg-[#C9A227]/20" />
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px]">
            {featuredProjects.map((project, index) => {
              const serviceId =
                projectServiceMap[project.title] as keyof typeof servicesById;

              const service = serviceId ? servicesById[serviceId] : null;
              const projectImage = service?.cardImage;

              if (!projectImage) return null;

              const isLarge = index === 0;
              const isWide = index === 3;

              return (
                <Link
                  key={project.title}
                  to={project.link}
                  className={[
                    "group relative overflow-hidden rounded-3xl bg-[#12372A] shadow-[0_18px_50px_rgba(18,55,42,0.12)]",
                    "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(18,55,42,0.22)]",
                    isLarge
                      ? "sm:col-span-2 sm:row-span-2"
                      : isWide
                        ? "sm:col-span-2"
                        : "",
                  ].join(" ")}
                >
                  <img
                    src={projectImage}
                    alt={`مشروع ${project.title} - ${client.companyName}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    width="1000"
                    height="800"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071c14] via-[#12372A]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Gold glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[#C9A227]/10" />
                  </div>

                  {/* Project number */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm font-black text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Expand icon */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#12372A]/60 text-[#C9A227] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={17} />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                        <CheckCircle size={11} className="text-[#C9A227]" />
                        من أعمالنا
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md">
                        <MapPin size={11} className="text-[#C9A227]" />
                        الشرقية
                      </span>
                    </div>

                    <h3
                      className={[
                        "font-black text-white transition-transform duration-500 group-hover:-translate-y-1",
                        isLarge ? "text-2xl sm:text-3xl" : "text-xl",
                      ].join(" ")}
                    >
                      {project.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-white/65">
                      <Calendar size={12} />
                      تنفيذ حسب طبيعة المشروع
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#C9A227] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-3">
                      عرض تفاصيل المشروع
                      <ArrowLeft size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A227]/20" />

            <h3 className="flex shrink-0 items-center gap-2 text-base font-black text-[#12372A] sm:text-lg">
              <LayoutGrid size={18} className="text-[#C9A227]" />
              معرض الصور
            </h3>

            <div className="h-px flex-1 bg-[#C9A227]/20" />
          </div>

          {/* Masonry-like gallery */}
          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-[#12372A] sm:mb-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#071c14]/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="w-full p-4">
                    <div className="mb-1 h-0.5 w-8 bg-[#C9A227] transition-all duration-500 group-hover:w-14" />

                    <p className="text-sm font-black text-white">
                      {image.serviceTitle}
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-white/65">
                      {client.shortName}
                    </p>
                  </div>
                </div>

                {/* Gold frame */}
                <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-[#C9A227]/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#12372A] px-6 py-10 text-center shadow-[0_25px_70px_rgba(18,55,42,0.18)] sm:px-10 sm:py-12">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C9A227]/15 blur-2xl" />
          <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <span className="mb-3 block text-xs font-bold tracking-widest text-[#C9A227]">
              مشروعك القادم يبدأ من هنا
            </span>

            <h3 className="mb-3 text-2xl font-black text-white sm:text-3xl">
              لديك مشروع وتبحث عن الحل المناسب؟
            </h3>

            <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-white/65">
              تواصل معنا لمناقشة احتياج مشروعك واختيار الحل المناسب من خدماتنا.
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-black text-[#12372A] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b43a] sm:w-auto"
              >
                استشر مشروعك
                <ArrowLeft size={18} />
              </a>

              <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-white/65">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#C9A227]" />
                  استشارة
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#C9A227]" />
                  حلول حسب المشروع
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-[#C9A227]" />
                  تنفيذ احترافي
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
