import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    warm: '#D4A574',
  },
  typography: {
    headline: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic' as const },
    body: { fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 },
  },
  overlay: {
    content: 'linear-gradient(to bottom, rgba(64,48,32,0.3) 0%, rgba(64,48,32,0.75) 100%)',
  },
};

export const Card02: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const spots = [
    { num: "01", name: "진해 군항제", detail: "36만 그루 벚나무 · 3/27~4/5" },
    { num: "02", name: "여의도 봄꽃축제", detail: "한강뷰 1.7km · 4/8~4/12" },
    { num: "03", name: "석촌호수", detail: "도심 속 꽃길 · 4/3~4/11" },
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <Img
          src={staticFile("card-02.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* OLIVE warm overlay */}
      <AbsoluteFill style={{ background: OLIVE.overlay.content }} />

      {/* Content zone */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 72px 100px",
        }}
      >
        {/* Tag */}
        <div
          style={{
            opacity: bodyOpacity,
            fontFamily: OLIVE.typography.body.fontFamily,
            fontWeight: 400,
            fontSize: 30,
            color: OLIVE.colors.warm,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          2026 벚꽃 명소
        </div>

        {/* Title */}
        <h2
          style={{
            opacity: titleOpacity,
            ...OLIVE.typography.headline,
            fontSize: 68,
            color: "#FAFAFA",
            lineHeight: 1.15,
            margin: 0,
            marginBottom: 36,
          }}
        >
          전국 TOP 3
        </h2>

        {/* Spots list */}
        <div style={{ opacity: bodyOpacity, display: "flex", flexDirection: "column", gap: 20 }}>
          {spots.map((spot) => (
            <div
              key={spot.num}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                paddingBottom: 20,
                borderBottom: "1px solid rgba(250,240,220,0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 36,
                  color: OLIVE.colors.warm,
                  lineHeight: 1,
                  minWidth: 40,
                  paddingTop: 4,
                }}
              >
                {spot.num}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span
                  style={{
                    fontFamily: OLIVE.typography.body.fontFamily,
                    fontWeight: 700,
                    fontSize: 38,
                    color: "#FAFAFA",
                    lineHeight: 1.2,
                  }}
                >
                  {spot.name}
                </span>
                <span
                  style={{
                    fontFamily: OLIVE.typography.body.fontFamily,
                    fontWeight: 400,
                    fontSize: 32,
                    color: "rgba(250,240,220,0.65)",
                    lineHeight: 1.3,
                  }}
                >
                  {spot.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* Page number */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        2 / 3
      </div>
    </AbsoluteFill>
  );
};
