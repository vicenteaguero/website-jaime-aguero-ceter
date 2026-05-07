import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-paper border-2 border-paper hover:bg-paper hover:text-primary",
  outline:
    "bg-transparent text-paper border-2 border-paper hover:bg-paper hover:text-primary",
  solid:
    "bg-primary text-paper border-2 border-primary hover:bg-primary-soft hover:border-primary-soft"
};

export function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "px-6 py-3 rounded-md font-bold text-fluid-sm",
    "transition-colors duration-300 ease-soft motion-safe:hover:-translate-y-0.5",
    "transition-transform",
    variants[variant] ?? variants.primary,
    className
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
