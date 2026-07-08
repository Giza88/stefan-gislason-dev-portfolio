import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 45%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: "#2563eb",
            }}
          />
          <span style={{ fontSize: 28, color: "#64748b" }}>
            {new URL(siteConfig.siteUrl).host}
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: "900px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 36,
            fontWeight: 600,
            color: "#2563eb",
            maxWidth: "900px",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
          }}
        >
          {["IT Support", "React & Next.js", "AI Workflows"].map((label) => (
            <div
              key={label}
              style={{
                padding: "12px 20px",
                borderRadius: "9999px",
                border: "1px solid #e2e8f0",
                background: "rgba(255,255,255,0.85)",
                color: "#475569",
                fontSize: 22,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
