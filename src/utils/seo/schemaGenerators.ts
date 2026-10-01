
import { KeywordResearch } from "@/types/seo.types";

const SITE_URL =
  "https://hsammnwralrfyd-del.github.io/al-benaa-alameg/";

export const generateLocalBusinessSchema = (
  _pageData: unknown,
  keywords: KeywordResearch
) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "مؤسسة البناء العملاق للمقاولات العامة",

    image: `${SITE_URL}icon1/icon.webp`,

    description:
      `مؤسسة البناء العملاق للمقاولات العامة متخصصة في ${keywords.primary} - ${keywords.secondary.join(" | ")}`,

    url: SITE_URL,

    telephone: "+966507111345",

    address: {
      "@type": "PostalAddress",
      streetAddress: "الريان",
      postalCode: "32256",
      addressLocality: "الدمام",
      addressRegion: "المنطقة الشرقية",
      addressCountry: "SA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2743",
      longitude: "50.2008",
    },

    priceRange: "$$",

    areaServed: [
      {
        "@type": "City",
        name: "الدمام",
      },
      {
        "@type": "City",
        name: "الخبر",
      },
      {
        "@type": "City",
        name: "الظهران",
      },
      {
        "@type": "City",
        name: "العزيزية",
      },
      {
        "@type": "City",
        name: "الراكة",
      },
      {
        "@type": "City",
        name: "الحزام الذهبي",
      },
      {
        "@type": "City",
        name: "الجبيل",
      },
      {
        "@type": "City",
        name: "القطيف",
      },
      {
        "@type": "AdministrativeArea",
        name: "المنطقة الشرقية",
      },
    ],

    keywords: keywords.longTail.slice(0, 5).join(", "),
  };
};

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

