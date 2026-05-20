import { ImageResponse } from "next/og";

export const alt = "Lucas Rondinelli — Desarrollador Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tarjeta social generada por código. Next la auto-detecta y la inyecta
// en las metatags og:image / twitter:image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#09090f",
          backgroundImage:
            "linear-gradient(135deg, rgba(77,124,255,0.20), transparent 45%), linear-gradient(315deg, rgba(43,179,163,0.16), transparent 45%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#399d83",
            }}
          />
          <span
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: "#8a90a6",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Center: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-3px",
            }}
          >
            Lucas Rondinelli
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 40,
              color: "#5b8cff",
              fontWeight: 600,
            }}
          >
            Desarrollador Full Stack
          </div>
        </div>

        {/* Bottom: location + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#8a90a6",
          }}
        >
          <span>La Plata, Buenos Aires · Argentina</span>
          <span style={{ color: "#ededf2" }}>lucasrondinelli.netlify.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
