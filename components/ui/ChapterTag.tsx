export default function ChapterTag({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: "0.6rem",
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: "#ff1a1a",
        border: "1px solid rgba(255,26,26,0.25)",
        padding: "4px 14px",
        borderRadius: 2,
        background: "rgba(255,26,26,0.05)",
        marginBottom: "1.5rem",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#ff1a1a",
          boxShadow: "0 0 6px #ff1a1a",
          display: "inline-block",
          animation: "blink-dot 2s infinite",
          flexShrink: 0,
        }}
      />
      Chapter {number} · {label}
      <style>{`
        @keyframes blink-dot {
          0%,100%{opacity:1} 50%{opacity:0.3}
        }
      `}</style>
    </div>
  );
}
