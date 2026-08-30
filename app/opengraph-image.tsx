import { ImageResponse } from "next/og";

export const alt = "Soul Color Test - What color is your soul?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", color: "#f1f1e8", background: "#070a09", fontFamily: "Arial, sans-serif", padding: "64px" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "26px", background: "#9fe870" }} />
        <div style={{ width: "100%", border: "2px solid rgba(241,241,232,.2)", padding: "52px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: "24px", color: "#9fe870", fontWeight: 700 }}>SOUL COLOR TEST</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "70px", lineHeight: 1, fontWeight: 700 }}>What color is your soul?</div>
            <div style={{ display: "flex", marginTop: "22px", color: "#aeb4ab", fontSize: "28px" }}>A free 7 or 16-question color and virtue reflection.</div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {["#d6a63a", "#4f79d1", "#4b8f86", "#c64b45"].map((color) => <div key={color} style={{ width: "92px", height: "14px", background: color }} />)}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
