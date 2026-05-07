import { Link } from "react-router-dom";

const VARIANT_CLASS = {
  primary: "btn btn-primary",
  ghost: "btn btn-ghost",
  link: "btn-link"
};

export function Button({
  variant = "primary",
  to,
  href,
  external = false,
  ariaLabel,
  rel,
  target,
  children,
  className = "",
  ...rest
}) {
  const cls = [VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
    const finalRel = isExternal ? rel ?? "noopener" : rel;
    const finalTarget = isExternal && /^https?:/.test(href) ? target ?? "_blank" : target;
    return (
      <a
        className={cls}
        href={href}
        aria-label={ariaLabel}
        rel={finalRel}
        target={finalTarget}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} to={to} aria-label={ariaLabel} {...rest}>
      {children}
    </Link>
  );
}
