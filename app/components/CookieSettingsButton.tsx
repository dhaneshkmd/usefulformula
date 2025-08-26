// app/components/CookieSettingsButton.tsx
"use client";

export default function CookieSettingsButton() {
  return (
    <button
      style={{
        marginTop: "1.5rem",
        padding: "0.5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: 6,
        background: "#f9f9f9",
        cursor: "pointer",
      }}
      onClick={() => {
        // Cookiebot renew (reopen the banner)
        // @ts-ignore
        window?.Cookiebot?.renew?.();
      }}
    >
      Change your cookie settings
    </button>
  );
}
