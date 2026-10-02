import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeProvider";

// Handle GitHub Pages SPA routing fallback
// When 404.html redirects with ?p=/path, redirect to the actual path
const searchParams = new URLSearchParams(window.location.search);
const path = searchParams.get('p');
if (path) {
  const newUrl = window.location.origin + window.location.pathname.replace(/\/$/, '') + path + window.location.hash;
  window.history.replaceState(null, '', newUrl);
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
