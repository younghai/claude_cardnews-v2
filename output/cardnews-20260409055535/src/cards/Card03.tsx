import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    accent: '#7B9E6B',
    warm: '#D4A574',
    rust: '#B5704A',
  },
  typography: {
    headline: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic' as const },
    body: { fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 },
  },
  overlay: {
    closing: 'linear-gradient(to bottom, rgba(64,48,32,0.15) 0%, rgba(64,48,32,0.5) 100%)',
  },
};

export const Card03: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const tips = [
    { icon: "·", text: "평일 오전 7시 이전 방문 — 인파 없이 여유롭게" },
    { icon: "·", text: "돗자리와 음식 챙겨 벚꽃 피크닉" },
    { icon: "·", text: "해 뜰 무렵 황금 시간대에 사진 촬영" },
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <Img
          src={staticFile("card-03.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* OLIVE warm overlay */}
      <AbsoluteFill style={{ background: OLIVE.overlay.closing }} />

      {/* Content zone */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 72px 110px",
        }}
      >
        {/* Tag */}
        <div
          style={{
            opacity: bodyOpacity,
            fontFamily: OLIVE.typography.body.fontFamily,
            fontWeight: 400,
            fontSize: 30,
            color: OLIVE.colors.accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          방문 팁
        </div>

        {/* Title */}
        <h2
          style={{
            opacity: titleOpacity,
            ...OLIVE.typography.headline,
            fontSize: 64,
            color: "#FAFAFA",
            lineHeight: 1.15,
            margin: 0,
            marginBottom: 32,
          }}
        >
          벚꽃, 이렇게 즐겨요
        </h2>

        {/* Tips */}
        <div style={{ opacity: bodyOpacity, display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {tips.map((tip, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 40,
                  color: OLIVE.colors.warm,
                  lineHeight: 1,
                  paddingTop: 2,
                }}
              >
                {tip.icon}
              </span>
              <span
                style={{
                  fontFamily: OLIVE.typography.body.fontFamily,
                  fontWeight: 400,
                  fontSize: 34,
                  color: "rgba(250,240,220,0.9)",
                  lineHeight: 1.45,
                }}
              >
                {tip.text}
              </span>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div
          style={{
            opacity: bodyOpacity,
            paddingTop: 24,
            borderTop: `1px solid rgba(212,165,116,0.4)`,
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: 36,
              color: OLIVE.colors.warm,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            지금 피지 않으면,
            <br />
            내년을 기다려야 해요.
          </p>
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
        3 / 3
      </div>
    </AbsoluteFill>
  );
};
