import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    warm: "#D4A574",
    rust: "#B5704A",
  },
  overlay: {
    content: "linear-gradient(to bottom, rgba(64,48,32,0.3) 0%, rgba(64,48,32,0.75) 100%)",
  },
};

export const Card02: React.FC<CardProps> = ({ durationInFrames }) => {
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
  const badgeOpacity = interpolate(frame, [BODY_IN + 6, BODY_IN + 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image — soboro bread close-up */}
      <Img
        src={staticFile("card-02.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* OLIVE warm content overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: OLIVE.overlay.content,
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
            fontSize: 30,
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 300,
            letterSpacing: 3,
            color: OLIVE.colors.warm,
            marginBottom: 20,
            opacity: tagOpacity,
          }}
        >
          대표 메뉴
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
          튀김소보로,
          <br />
          특허 받은 국민 빵
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
            marginBottom: 28,
          }}
        >
          바삭한 겉, 달콤한 팥소
          <br />
          2012년 특허 · 매일 완판
        </p>

        {/* Price badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            opacity: badgeOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 38,
              fontWeight: 700,
              color: OLIVE.colors.rust,
              letterSpacing: 1,
            }}
          >
            1,700원
          </span>
          <span
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 30,
              fontWeight: 300,
              color: "rgba(240, 232, 213, 0.65)",
            }}
          >
            6개 세트 10,000원
          </span>
        </div>
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
        2 / 3
      </div>
    </AbsoluteFill>
  );
};
