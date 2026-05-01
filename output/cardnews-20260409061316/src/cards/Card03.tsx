import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface CardProps {
  durationInFrames: number;
}

const OLIVE = {
  colors: {
    accent: "#7B9E6B",
    warm: "#D4A574",
    rust: "#B5704A",
  },
  overlay: {
    closing: "linear-gradient(to bottom, rgba(64,48,32,0.15) 0%, rgba(64,48,32,0.5) 100%)",
  },
};

export const Card03: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const STAT_IN = 36;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const tagOpacity = interpolate(frame, [TITLE_IN - 4, TITLE_IN + 8], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const statOpacity = interpolate(frame, [STAT_IN, STAT_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image — queue outside bakery */}
      <Img
        src={staticFile("card-03.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* OLIVE warm closing overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: OLIVE.overlay.closing,
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
            color: OLIVE.colors.accent,
            marginBottom: 20,
            opacity: tagOpacity,
          }}
        >
          오직 대전에서만
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
          그래도 대전을
          <br />
          떠나지 않는 이유
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
          전국 비프랜차이즈 베이커리 1위
          <br />
          줄 서서라도 먹는 빵지순례의 성지
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 36,
            opacity: statOpacity,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 42,
                fontWeight: 500,
                fontStyle: "italic",
                color: OLIVE.colors.rust,
                lineHeight: 1,
              }}
            >
              1,243억
            </span>
            <span
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 28,
                fontWeight: 300,
                color: "rgba(240, 232, 213, 0.6)",
                letterSpacing: 1,
              }}
            >
              2023년 매출
            </span>
          </div>
          <div
            style={{
              width: 1,
              background: "rgba(240, 232, 213, 0.25)",
              alignSelf: "stretch",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 42,
                fontWeight: 500,
                fontStyle: "italic",
                color: OLIVE.colors.warm,
                lineHeight: 1,
              }}
            >
              1,100명
            </span>
            <span
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 28,
                fontWeight: 300,
                color: "rgba(240, 232, 213, 0.6)",
                letterSpacing: 1,
              }}
            >
              직원 수
            </span>
          </div>
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
        3 / 3
      </div>
    </AbsoluteFill>
  );
};
