export function Container({ children, as: Tag = "div", className = "", ...rest }) {
  const cls = ["container", className].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
