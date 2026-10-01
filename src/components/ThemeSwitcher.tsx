import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"}
      className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C8A85D]/30 bg-[#0D1A15] text-[#D9BE78] transition-all duration-300 hover:border-[#D9BE78] hover:bg-[#152C21] hover:shadow-[0_4px_15px_rgba(200,168,93,0.15)] dark:border-[#C8A85D]/30 dark:bg-[#0D1A15] dark:text-[#D9BE78] dark:hover:border-[#D9BE78] dark:hover:bg-[#152C21]"
    >
      {theme === "dark" ? (
        <Moon size={22} className="transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <Sun size={22} className="transition-transform duration-300 group-hover:scale-110" />
      )}
    </button>
  );
}
