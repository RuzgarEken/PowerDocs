
// src/components/Highlight.jsx
export default function Highlight({ children, color = "#ffffff" }) {
  return (
    <span
      style={{
        color,
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}