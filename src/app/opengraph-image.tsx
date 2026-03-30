import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Eleythra Derin Teknoloji";

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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1320 0%, #0F1B2D 42%, #0B1320 100%)",
          paddingLeft: 72,
          paddingRight: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            height: 4,
            width: 112,
            background: "#00A8E8",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            maxWidth: 920,
          }}
        >
          Eleythra Derin Teknoloji
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255,255,255,0.9)",
            marginTop: 20,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Misafir deneyimini daha akıllı, hızlı ve kişisel hale getiren AI ve veri odaklı
          teknolojiler.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 17,
            color: "rgba(0,168,232,0.98)",
            marginTop: 36,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          eleythra.com
        </div>
      </div>
    ),
    { ...size },
  );
}
