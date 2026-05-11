export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#16120E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#C4673A",
            marginBottom: "16px",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1.04,
            color: "#FAF9F7",
            marginBottom: "16px",
          }}
        >
          Página no encontrada
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(250,249,247,0.45)",
            marginBottom: "32px",
          }}
        >
          La página que buscas no existe.
        </p>
        <a
          href="/es"
          style={{
            display: "inline-flex",
            padding: "12px 24px",
            background: "#C4673A",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
