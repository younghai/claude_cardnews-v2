import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    primary: "#8B7B6B",
    background: "#F0E8D5",
    accent: "#7B9E6B",
    warm: "#D4A574",
    skin: "#E8D5C4",
    rust: "#B5704A",
  },
  overlay: {
    cover: "linear-gradient(to bottom, rgba(64,48,32,0.15) 0%, rgba(64,48,32,0.5) 100%)",
    content: "linear-gradient(to bottom, rgba(64,48,32,0.3) 0%, rgba(64,48,32,0.75) 100%)",
  },
};

export const Card01: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const tagOpacity = interpolate(frame, [TITLE_IN - 4, TITLE_IN + 8], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <Img
        src={staticFile("card-01.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* Warm OLIVE overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: OLIVE.overlay.cover,
        }}
      />

      {/* Bottom text block */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 80,
          right: 80,
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "inline-block",
            fontSize: 30,
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 300,
            letterSpacing: 4,
            color: OLIVE.colors.accent,
            marginBottom: 24,
            opacity: tagOpacity,
            textTransform: "uppercase" as const,
          }}
        >
          성심당 · 1956
        </div>

        {/* Main title */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 58,
            fontWeight: 500,
            lineHeight: 1.25,
            color: "rgba(255, 248, 235, 0.97)",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 20,
          }}
        >
          밀가루 두 포대에서
          <br />
          시작된 이야기
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(240, 232, 213, 0.85)",
            lineHeight: 1.6,
            opacity: bodyOpacity,
          }}
        >
          1956년, 피난민의 찐빵 노점이
          <br />
          대전의 심장이 되기까지
        </p>
      </div>

      {/* Page number */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 4,
          color: "rgba(255, 248, 235, 0.4)",
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >
        1 / 3
      </div>
    </AbsoluteFill>
  );
};
