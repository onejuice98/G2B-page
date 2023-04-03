interface TypographyProps {
  variants: "h1" | "span";
  children: React.ReactNode;
  hoverColor?: string;
  click?: (keyword: string) => Promise<void>;
  pointer?: boolean;
}
const Typography = ({
  variants,
  children,
  hoverColor,
  click,
  pointer,
}: TypographyProps) => {
  let tag;
  switch (variants) {
    case "h1":
      tag = <h1>{children}</h1>;
      break;
    case "span":
      tag = (
        <span
          onClick={() => click}
          className={
            hoverColor && `hover:${hoverColor} ` + pointer && `cursor-pointer`
          }
        >
          {children}
        </span>
      );
      break;
  }
  return tag;
};
export default Typography;
