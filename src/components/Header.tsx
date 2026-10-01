import {
  Phone,
  MessageCircle,
  Menu,
  X,
  } from "lucide-react";
  import { useEffect, useState, type MouseEvent } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { client, contactLinks } from "@/config/client";
  
  const navItems = [
  { label: "الرئيسية", hash: "#home" },
  { label: "خدماتنا", hash: "#services" },
  { label: "أعمالنا", hash: "#portfolio" },
  { label: "من نحن", hash: "#about" },
  { label: "تواصل معنا", hash: "#contact" },
  ];
  
  const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHome = location.pathname === "/";
  
  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 40);
  

  handleScroll();
  
  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });
  
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  
  
  }, []);
  
  useEffect(() => {
  setOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
  if (open) {
  document.body.style.overflow = "hidden";
  } else {
  document.body.style.overflow = "";
  }
  

  return () => {
    document.body.style.overflow = "";
  };
  
  
  }, [open]);
  
  const scrollToHash = (hash: string) => {
  if (hash === "#home") {
  window.scrollTo({
  top: 0,
  behavior: "smooth",
  });
  return;
  }
  
  const element = document.querySelector(hash);
  
  if (!element) return;
  
  const offset =
    element.getBoundingClientRect().top +
    window.scrollY -
    88;
  
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  
  };
  
  const handleNavigation = (
  event: MouseEvent<HTMLAnchorElement>,
  hash: string,
  ) => {
  event.preventDefault();
  setOpen(false);
  
  if (hash === "#home") {
    if (isHome) {
      navigate("/", { replace: true });
  
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  
    return;
  }
  
  if (isHome) {
    window.history.replaceState(null, "", hash);
    scrollToHash(hash);
  } else {
    navigate(`/${hash}`);
  }

  
  };
  
  useEffect(() => {
  if (!isHome || !location.hash) return;
  
  
  const timer = setTimeout(
    () => scrollToHash(location.hash),
    200,
  );
  
  return () => clearTimeout(timer);
  
  
  }, [isHome, location.hash]);
  
  const handleLogoClick = (
  event: MouseEvent<HTMLAnchorElement>,
  ) => {
  event.preventDefault();
  setOpen(false);
  
  
  if (isHome) {
    navigate("/", { replace: true });
  
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate("/");
  }
  
  
  };
  
  return (
  <header
  dir="rtl"
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
  >
  <div
  className={`absolute inset-x-0 top-0 -z-10 h-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#C8A85D]/20 bg-[#07100D]/98 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl"
              : "bg-[#07100D]/95 backdrop-blur-md"
          }`}
  />
  
    <div className="section-container">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="group relative flex shrink-0 items-center gap-3"
          aria-label={`العودة إلى الصفحة الرئيسية - ${client.shortName}`}
        >
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#C8A85D]/30 bg-[#0D1A15] p-1.5 shadow-[0_4px_15px_rgba(200,168,93,0.1)] transition-all duration-300 group-hover:border-[#D9BE78] group-hover:shadow-[0_6px_20px_rgba(200,168,93,0.2)]">
            <img
              src={`/al-benaa-alameg/icon1/icon.webp`}
              alt={client.shortName}
              className="h-full w-full object-contain"
              width="48"
              height="48"
              decoding="async"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-[#D9BE78] leading-tight">مظلات وسواتر</p>
            <p className="text-xs font-semibold text-[#F5F0E7] leading-tight">البناء العملاق</p>
          </div>
        </Link>
  
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                isHome && location.hash === item.hash;
  
              return (
                <a
                  key={item.hash}
                  href={
                    isHome
                      ? item.hash
                      : `/${item.hash}`
                  }
                  onClick={(e) =>
                    handleNavigation(e, item.hash)
                  }
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-[#D9BE78]"
                      : "text-[#B8C1BB] hover:text-[#F5F0E7]"
                  }`}
                >
                  {item.label}
  
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 rounded-full bg-gradient-to-l from-[#D9BE78] to-[#E8D08A]" />
                  )}
                </a>
              );
            })}
          </div>
        </nav>
  
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contactLinks.phone}
            className="group flex h-11 items-center gap-2 rounded-xl border border-[#C8A85D]/30 bg-[#0D1A15] px-4 text-sm font-semibold text-[#F5F0E7] transition-all duration-200 hover:border-[#D9BE78] hover:bg-[#152C21] hover:shadow-[0_4px_15px_rgba(200,168,93,0.15)]"
          >
            <Phone
              size={18}
              strokeWidth={2}
              className="shrink-0 text-[#D9BE78] transition-all duration-300 group-hover:scale-105"
            />
            <span>اتصل الآن</span>
          </a>
  
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 items-center gap-2 rounded-xl bg-gradient-to-l from-[#D9BE78] via-[#C8A85D] to-[#A47C37] px-4 text-sm font-semibold text-[#07100D] shadow-[0_4px_15px_rgba(200,168,93,0.25)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(200,168,93,0.35)]"
          >
            <MessageCircle
              size={18}
              strokeWidth={2}
              className="shrink-0 transition-all duration-300 group-hover:scale-105"
            />
            <span>واتساب</span>
          </a>
        </div>
  
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={
            open ? "إغلاق القائمة" : "فتح القائمة"
          }
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C8A85D]/30 bg-[#0D1A15] text-[#D9BE78] transition-colors hover:border-[#D9BE78] hover:bg-[#152C21] lg:hidden"
        >
          {open ? (
            <X
              size={22}
              className="transition-transform duration-300"
            />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>
    </div>
  
    <div
      className={`fixed inset-0 top-[72px] z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
        open
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />
  
    <div
      className={`fixed inset-x-0 top-[72px] z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-[#C8A85D]/20 bg-[#07100D] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 lg:hidden ${
        open
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <nav className="section-container py-6">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              isHome && location.hash === item.hash;
  
            return (
              <a
                key={item.hash}
                href={
                  isHome
                    ? item.hash
                    : `/${item.hash}`
                }
                onClick={(e) =>
                  handleNavigation(e, item.hash)
                }
                className={`block px-4 py-4 text-lg font-semibold transition-all ${
                  isActive
                    ? "bg-[#D9BE78]/10 text-[#D9BE78] border-r-4 border-[#D9BE78]"
                    : "text-[#B8C1BB] hover:bg-[#0D1A15] hover:text-[#F5F0E7]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
  
        <div className="mt-8 space-y-3">
          <a
            href={contactLinks.phone}
            className="group flex h-14 items-center justify-center gap-3 rounded-xl border border-[#C8A85D]/30 bg-[#0D1A15] text-base font-semibold text-[#F5F0E7] transition-all hover:border-[#D9BE78] hover:bg-[#152C21] hover:shadow-[0_4px_15px_rgba(200,168,93,0.15)]"
          >
            <Phone
              size={22}
              strokeWidth={2}
              className="text-[#D9BE78] transition-all duration-300 group-hover:scale-105"
            />
            <span>اتصل الآن</span>
          </a>
  
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-[#D9BE78] via-[#C8A85D] to-[#A47C37] text-base font-semibold text-[#07100D] shadow-[0_4px_15px_rgba(200,168,93,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(200,168,93,0.35)]"
          >
            <MessageCircle size={22} strokeWidth={2} className="transition-all duration-300 group-hover:scale-105" />
            <span>واتساب</span>
          </a>
        </div>
      </nav>
    </div>
  </header>

  
  );
  };
  
  export default Header;
  