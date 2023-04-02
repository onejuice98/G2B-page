interface TypographyProps {
  variants: "h1" | "span";
  children: React.ReactNode;
  hoverColor?: string;
}
const Typography = ({ variants, children, hoverColor }: TypographyProps) => {
  let tag;
  switch (variants) {
    case "h1":
      tag = <h1>{children}</h1>;
      break;
    case "span":
      tag = (
        <span className={hoverColor && `hover:${hoverColor}`}>{children}</span>
      );
      break;
  }
  return tag;
};
export default Typography;
