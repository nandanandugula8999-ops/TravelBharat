// Phase 1 stub — will be replaced with full hero in Phase 3
export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1040, #2d1b6b, #0f9898)",
        color: "white",
        fontFamily: "var(--font-display)",
        textAlign: "center",
        padding: "2rem",
        paddingTop: "5rem",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🇮🇳</div>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        TravelBharat
      </h1>
      <p style={{ fontSize: "1.25rem", opacity: 0.8, maxWidth: "500px" }}>
        Explore India — State by State, City by City.
      </p>
      <p style={{ marginTop: "2rem", opacity: 0.5, fontSize: "0.875rem" }}>
        Phase 1 scaffold complete ✅ — Full UI coming in Phase 3.
      </p>
    </div>
  );
}
