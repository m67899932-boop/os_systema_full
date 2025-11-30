"use client";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Sistema OS & Frotas
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#555" }}>
        Bem-vindo! Escolha uma das seções abaixo:
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/os"
          style={{
            padding: "20px 30px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          🔧 Ordens de Serviço
        </a>

        <a
          href="/frotas"
          style={{
            padding: "20px 30px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          🚚 Frotas
        </a>

        <a
          href="/login"
          style={{
            padding: "20px 30px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          🔐 Login
        </a>
      </div>
    </div>
  );
}
