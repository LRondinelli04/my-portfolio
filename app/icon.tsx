import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon generado: iniciales "LR" sobre el azul accent del tema.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4d7cff, #2bb3a3)",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        LR
      </div>
    ),
    { ...size }
  );
}
