export function Eyebrow({ children, className = "" }) {
  const cls = ["eyebrow", className].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      <span className="pip" aria-hidden="true" />
      {children}
    </span>
  );
}
