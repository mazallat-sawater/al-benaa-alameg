
import type { LucideIcon } from "lucide-react";

import {
  Armchair,
  Fence,
  Grid,
  Home,
  Layers,
  Shield,
  TreePine,
  Warehouse,
  Zap,
} from "lucide-react";

export type ServiceSeoKey =
  | "canopies"
  | "fencing"
  | "warehouses"
  | "palaceCanopies"
  | "poolCanopies"
  | "structuralCanopies"
  | "pergolas"
  | "majalis"
  | "roofingTiles"
  | "fabricHouses"
  | "sandwichWarehouses"
  | "buildingFencing"
  | "railings"
  | "aluminum"
  | "coloredWood"
  | "painting"
  | "waterproofing"
  | "thermalInsulation"
  | "landscaping"
  | "schoolCanopies"
  | "laserCutCanopies"
  | "archCanopies"
  | "garageCanopies"
  | "roofInsulation"
  | "waterThermalInsulation"
  | "claddingCanopies"
  | "pyramidalCanopies";

export interface ServiceDefinition {
  id: ServiceSeoKey;
  slug: string;
  route: string;
  folder: string;
  title: string;
  shortTitle: string;
  badge: string;
  heroSubtitle: string;
  introTitle: string;
  introDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  benefitsTitle: string;
  hasHeaderImage: boolean;
  galleryImageCount: number;
  cardImage: string;
  icon: LucideIcon;

  features: Array<{
    title: string;
    description: string;
  }>;

  benefits: string[];

  serviceTypes: Array<{
    title: string;
    description: string;
  }>;

  contentSections: Array<{
    title: string;
    description: string;
    imageIndex: number;
  }>;

  areasText: string;
}

const areasText =
  "الدمام، الخبر، الظهران، العزيزية، الراكة، الحزام الذهبي، الجبيل، القطيف";

export const getServiceHeroPath = (
  service: ServiceDefinition
): string => {
  return service.hasHeaderImage
    ? `/al-benaa-alameg/${service.folder}/header.webp`
    : `/al-benaa-alameg/${service.folder}/1.webp`;
};

export const getServiceGalleryPaths = (
  service: ServiceDefinition
): string[] => {
  return Array.from(
    { length: service.galleryImageCount },
    (_, index) => `/al-benaa-alameg/${service.folder}/${index + 1}.webp`
  );
};

const defaultFeatures = (
  title: string
): Array<{
  title: string;
  description: string;
}> => [
  {
    title: "خامات مناسبة",
    description: `استخدام خامات مناسبة لتنفيذ ${title} حسب طبيعة الموقع والاستخدام.`,
  },
  {
    title: "تنفيذ حسب الموقع",
    description:
      "مراعاة أبعاد الموقع وطبيعته ومتطلبات الاستخدام قبل التنفيذ.",
  },
  {
    title: "تشطيب احترافي",
    description:
      "الاهتمام بالتفاصيل النهائية والتثبيت والتشطيب للحصول على نتيجة مرتبة.",
  },
];

const defaultBenefits = [
  "معاينة وفهم احتياج العميل قبل التنفيذ.",
  "حلول مناسبة لطبيعة الموقع والاستخدام.",
  "اهتمام بالمقاسات والتفاصيل النهائية.",
  "خامات مناسبة للاستخدام المطلوب.",
  "خدمة داخل الدمام والمنطقة الشرقية والمناطق القريبة.",
];

const makeService = (
  config: Omit<
    ServiceDefinition,
    | "features"
    | "benefits"
    | "serviceTypes"
    | "contentSections"
    | "areasText"
  >
): ServiceDefinition => {
  const title = config.title;

  return {
    ...config,

    features: defaultFeatures(title),

    benefits: defaultBenefits,

    serviceTypes: [
      {
        title: config.shortTitle,
        description: config.heroSubtitle,
      },
    ],

    contentSections: [
      {
        title: config.introTitle,
        description: config.introDescription,
        imageIndex: 1,
      },
      {
        title: config.galleryTitle,
        description: config.galleryDescription,
        imageIndex: Math.min(2, config.galleryImageCount),
      },
    ],

    areasText,
  };
};

export const servicesList: ServiceDefinition[] = [
  makeService({
    id: "canopies",
    slug: "canopies",
    route: "/canopies",
    folder: "garage-canopies",
    title: "مظلات",
    shortTitle: "مظلات",
    badge: "مظلات البناء العملاق",
    heroSubtitle:
      "تنفيذ مظلات متنوعة للمنازل والفلل والمواقف والمشاريع والمساحات الخارجية.",
    introTitle: "مظلات للمنازل والمشاريع",
    introDescription:
      "تنفيذ مظلات متنوعة للمواقف والمداخل والمساحات الخارجية مع مراعاة شكل الموقع واستخدامه.",
    galleryTitle: "نماذج من أعمال المظلات",
    galleryDescription:
      "نماذج من تصاميم المظلات المناسبة للمنازل والمواقف والمشاريع.",
    benefitsTitle: "مميزات مظلات البناء العملاق",
    hasHeaderImage: true,
    galleryImageCount: 5,
    cardImage: "/al-benaa-alameg/garage-canopies/1.webp",
    icon: Home,
  }),

  makeService({
    id: "fencing",
    slug: "fencing",
    route: "/fencing",
    folder: "fencing",
    title: "سواتر",
    shortTitle: "سواتر",
    badge: "سواتر البناء العملاق",
    heroSubtitle:
      "تنفيذ سواتر للمنازل والمنشآت والمساحات الخارجية بمقاسات وتصاميم متنوعة.",
    introTitle: "سواتر للمنازل والمنشآت",
    introDescription:
      "تنفيذ سواتر تساعد على الخصوصية والحماية وتنظيم المساحات الخارجية.",
    galleryTitle: "نماذج السواتر",
    galleryDescription:
      "نماذج من أعمال السواتر والتغطيات الخارجية.",
    benefitsTitle: "مميزات السواتر",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/al-benaa-alameg/fencing/1.webp",
    icon: Fence,
  }),

  makeService({
    id: "warehouses",
    slug: "warehouses",
    route: "/warehouses",
    folder: "warehouses",
    title: "هناجر ومستودعات",
    shortTitle: "هناجر ومستودعات",
    badge: "هناجر ومستودعات",
    heroSubtitle:
      "تنفيذ هناجر ومستودعات للمشاريع والمنشآت والاستخدامات المختلفة.",
    introTitle: "هناجر ومستودعات للمشاريع والمنشآت",
    introDescription:
      "تنفيذ هناجر ومستودعات بمقاسات مناسبة لطبيعة المشروع مع الاهتمام بالهيكل والتغطية والتشطيب.",
    galleryTitle: "نماذج الهناجر والمستودعات",
    galleryDescription:
      "نماذج من أعمال الهناجر والمستودعات للمشاريع والمنشآت.",
    benefitsTitle: "مميزات تنفيذ الهناجر والمستودعات",
    hasHeaderImage: false,
    galleryImageCount: 6,
    cardImage: "/al-benaa-alameg/warehouses/1.webp",
    icon: Warehouse,
  }),

  makeService({
    id: "palaceCanopies",
    slug: "palace-canopies",
    route: "/palace-canopies",
    folder: "pyramidal-canopies",
    title: "مظلات قصور ومشاريع",
    shortTitle: "مظلات قصور ومشاريع",
    badge: "مشاريع وقصور",
    heroSubtitle:
      "مظلات واسعة وتصاميم مناسبة للقصور والمشاريع والمداخل والمساحات الكبيرة.",
    introTitle: "مظلات للمشاريع والقصور",
    introDescription:
      "حلول مظلات للمواقع الكبيرة مع الاهتمام بالشكل العام والتناسق مع المبنى.",
    galleryTitle: "نماذج مظلات المشاريع",
    galleryDescription:
      "نماذج من تصاميم المظلات المناسبة للمشاريع والقصور.",
    benefitsTitle: "مميزات مظلات المشاريع",
    hasHeaderImage: false,
    galleryImageCount: 5,
    cardImage: "/al-benaa-alameg/pyramidal-canopies/1.webp",
    icon: Grid,
  }),

  makeService({
    id: "poolCanopies",
    slug: "pool-canopies",
    route: "/pool-canopies",
    folder: "pool-canopies",
    title: "مظلات مسابح",
    shortTitle: "مظلات مسابح",
    badge: "مظلات المسابح",
    heroSubtitle:
      "تنفيذ مظلات للمسابح والمساحات المحيطة بها.",
    introTitle: "مظلات للمسابح",
    introDescription:
      "تنفيذ مظلات مناسبة للمسابح والجلسات المحيطة بها لتوفير الظل والاستفادة من المساحة الخارجية.",
    galleryTitle: "نماذج مظلات المسابح",
    galleryDescription:
      "نماذج من مظلات وتغطيات المسابح.",
    benefitsTitle: "مميزات مظلات المسابح",
    hasHeaderImage: true,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/pool-canopies/1.webp",
    icon: Home,
  }),

  makeService({
    id: "structuralCanopies",
    slug: "structural-canopies",
    route: "/structural-canopies",
    folder: "structural-canopies",
    title: "مظلات شد إنشائي",
    shortTitle: "شد إنشائي",
    badge: "مظلات شد إنشائي",
    heroSubtitle:
      "مظلات شد إنشائي للمشاريع والمدارس والمجمعات الحكومية والملاعب.",
    introTitle: "مظلات الشد الإنشائي",
    introDescription:
      "حلول شد إنشائي مناسبة للمشاريع والمدارس والمرافق والملاعب والمساحات الواسعة.",
    galleryTitle: "نماذج الشد الإنشائي",
    galleryDescription:
      "نماذج من تصاميم وتنفيذ مظلات الشد الإنشائي.",
    benefitsTitle: "مميزات الشد الإنشائي",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/structural-canopies/1.webp",
    icon: Layers,
  }),

  makeService({
    id: "pergolas",
    slug: "pergolas",
    route: "/pergolas",
    folder: "pergolas",
    title: "برجولات وجلسات خارجية",
    shortTitle: "برجولات وجلسات",
    badge: "برجولات وجلسات",
    heroSubtitle:
      "تنفيذ برجولات وجلسات خارجية للمنازل والاستراحات والمساحات الخارجية.",
    introTitle: "برجولات وجلسات خارجية",
    introDescription:
      "تنفيذ برجولات وجلسات خارجية مناسبة للمنازل والاستراحات والمساحات الخارجية.",
    galleryTitle: "نماذج البرجولات والجلسات",
    galleryDescription:
      "نماذج من أعمال البرجولات والجلسات الخارجية.",
    benefitsTitle: "مميزات البرجولات",
    hasHeaderImage: true,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/pergolas/1.webp",
    icon: Armchair,
  }),

  makeService({
    id: "majalis",
    slug: "majalis",
    route: "/majalis",
    folder: "majalis",
    title: "ملاحق مجالس",
    shortTitle: "ملاحق مجالس",
    badge: "ملاحق مجالس",
    heroSubtitle:
      "حلول وتجهيزات للمجالس والمساحات الخارجية حسب طبيعة الموقع.",
    introTitle: "ملاحق المجالس",
    introDescription:
      "تنفيذ حلول مناسبة للمجالس والمساحات الخارجية مع الاستفادة من تصاميم الجلسات والبرجولات.",
    galleryTitle: "نماذج الجلسات الخارجية",
    galleryDescription:
      "نماذج مرجعية للمجالس والجلسات والمساحات الخارجية.",
    benefitsTitle: "مميزات ملاحق المجالس",
    hasHeaderImage: true,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/majalis/1.webp",
    icon: Armchair,
  }),

  makeService({
    id: "roofingTiles",
    slug: "roofing-tiles",
    route: "/roofing-tiles",
    folder: "roofing-tiles",
    title: "قرميد",
    shortTitle: "قرميد",
    badge: "قرميد",
    heroSubtitle:
      "تنفيذ أعمال القرميد وتغطيات الأسطح والمداخل.",
    introTitle: "أعمال القرميد",
    introDescription:
      "تنفيذ أعمال القرميد وتغطيات مناسبة للأسطح والمداخل والمساحات الخارجية.",
    galleryTitle: "نماذج القرميد",
    galleryDescription:
      "نماذج من أعمال القرميد والتغطيات الخارجية.",
    benefitsTitle: "مميزات القرميد",
    hasHeaderImage: false,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/roofing-tiles/1.webp",
    icon: Home,
  }),

  makeService({
    id: "fabricHouses",
    slug: "fabric-houses",
    route: "/fabric-houses",
    folder: "fabric-houses",
    title: "بيوت شعر",
    shortTitle: "بيوت شعر",
    badge: "بيوت شعر",
    heroSubtitle:
      "تنفيذ بيوت شعر وجلسات بطابع عربي للمجالس والاستراحات.",
    introTitle: "بيوت الشعر والجلسات العربية",
    introDescription:
      "تنفيذ بيوت شعر وجلسات بطابع عربي مناسبة للمجالس والاستراحات والمساحات الخارجية.",
    galleryTitle: "نماذج بيوت الشعر",
    galleryDescription:
      "نماذج من أعمال بيوت الشعر والجلسات العربية.",
    benefitsTitle: "مميزات بيوت الشعر",
    hasHeaderImage: true,
    galleryImageCount: 4,
    cardImage: "/al-benaa-alameg/fabric-houses/1.webp",
    icon: Home,
  }),
];

export const servicesById = servicesList.reduce(
  (acc, service) => {
    acc[service.id] = service;
    return acc;
  },
  {} as Record<ServiceSeoKey, ServiceDefinition>
);

