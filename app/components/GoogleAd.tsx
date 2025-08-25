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
  format?: "auto" | "fluid" | "rectangle";
  fullWidth?: boolean;         // responsive in-content ad
};

export default function GoogleAd({
  slot,
  style,
  format = "auto",
  fullWidth = true,
}: Props) {
  useEffect(() => {
    // Push a new ad request when mounted
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore in dev or if blocked by an adblocker
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style ?? { display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-8441641457342117"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidth ? "true" : "false"}
    />
  );
}
