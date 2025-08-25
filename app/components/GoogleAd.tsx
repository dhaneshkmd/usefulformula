// app/components/GoogleAd.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type Props = {
  slot: string;                // Your ad slot id from AdSense
  style?: React.CSSProperties; // Optional custom styling
  format?: "auto" | "fluid";   // keep to supported values
  fullWidth?: boolean;         // Responsive in-content ad
};

export default function GoogleAd({
  slot,
  style,
  format = "auto",
  fullWidth = true,
}: Props) {
  useEffect(() => {
    try {
      // This works whether or not the script has loaded yet; AdSense queues requests.
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Likely adblock or local dev — safe to ignore
      if (process.env.NODE_ENV !== "production") {
        console.debug("AdSense push error:", e);
      }
    }
  }, [slot]);

  const isDev = process.env.NODE_ENV !== "production";

  return (
    <ins
      key={slot}
      className="adsbygoogle"
      style={style ?? { display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-8441641457342117"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidth ? "true" : "false"}
      {...(isDev ? { "data-adtest": "on" } : {})}
    />
  );
}
