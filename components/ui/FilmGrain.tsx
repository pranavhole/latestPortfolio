"use client";

export default function FilmGrain() {
  return (
    <>
      {/* SVG filter definition */}
      <svg
        style={{ position: "fixed", width: 0, height: 0, zIndex: -1 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="film-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="0.8s"
                values="0.65;0.68;0.63;0.66;0.65"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="screen" result="blend" />
            <feComposite in="blend" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 6,
          pointerEvents: "none",
          opacity: 0.04,
          filter: "url(#film-grain)",
          background: "#fff",
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
