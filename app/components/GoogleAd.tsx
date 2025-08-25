// app/components/GoogleAd.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: { [key: string]: any }[];
  }
}

type Props = {
  slot: string;                // Your ad slot id from AdSense
  style?: React.CSSProperties; // Optional custom styling
  format?: "auto" | "fluid" | "rectangle";
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
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // Fail silently (likely adblock or local dev)
      console.debug("AdSense push error:", e);
    }
  }, [slot]); // re-run only if slot changes

  return (
    <ins
      className="adsbygoogle"
      style={style ?? { display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-8441641457342117" // your publisher ID
      data-ad-slot={slot}                       // slot id from AdSense
      data-ad-format={format}
      data-full-width-responsive={fullWidth ? "true" : "false"}
    />
  );
}
