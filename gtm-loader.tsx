import { useEffect } from "react";

const gtmId = "GTM-WRXSC2R7"
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const GtmLoader = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // 🔥 Trigger refresh event every time the Studio loads / reloads
    window.dataLayer.push({
      event: "dashboard_pitches",
      timestamp: Date.now(),
      path: window.location.pathname,
      click_type: "filters",
      click_text: "Refresh",
    });

    // Prevent loading GTM multiple times
    if (window.dataLayer.some((e: any) => e?.event === "gtm.js")) {
      return;
    }

    // Push GTM init event
    window.dataLayer.push({
      "gtm.start": Date.now(),
      event: "gtm.js",
    });

    // Load GTM <script>
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }, []);

  return null;
};
