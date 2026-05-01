import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    primary: '#8B7B6B',
    background: '#F0E8D5',
    accent: '#7B9E6B',
    warm: '#D4A574',
    rust: '#B5704A',
  },
  typography: {
    headline: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontStyle: 'italic' as const },
    body: { fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400 },
  },
  overlay: {
    cover: 'linear-gradient(to bottom, rgba(64,48,32,0.15) 0%, rgba(64,48,32,0.5) 100%)',
  },
};

export const Card01: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <AbsoluteFill style={{ opacity: bgOpacity }}>
        <Img
          src={staticFile("card-01.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* OLIVE warm overlay */}
      <AbsoluteFill style={{ background: OLIVE.overlay.cover }} />

      {/* Bottom text zone */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 72px 120px",
        }}
      >
        {/* Tag */}
        <div
          style={{
            opacity: bodyOpacity,
            fontFamily: OLIVE.typography.body.fontFamily,
            fontWeight: 400,
            fontSize: 32,
            color: OLIVE.colors.warm,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            marginBottom: 20,
          }}
        >
          Spring 2026
        </div>

        {/* Main title */}
        <h1
          style={{
            opacity: titleOpacity,
            ...OLIVE.typography.headline,
            fontSize: 88,
            color: "#FAFAFA",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
          }}
        >
          봄이 왔다
        </h1>

        {/* Subtitle */}
        <p
          style={{
            opacity: bodyOpacity,
            fontFamily: OLIVE.typography.body.fontFamily,
            fontWeight: 400,
            fontSize: 40,
            color: "rgba(250,240,220,0.85)",
            lineHeight: 1.45,
            margin: 0,
          }}
        >
          벚꽃축제 2026
          <br />
          <span style={{ fontSize: 34, color: "rgba(250,240,220,0.65)" }}>
            전국 개화 시작
          </span>
        </p>
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
        1 / 3
      </div>
    </AbsoluteFill>
  );
};
