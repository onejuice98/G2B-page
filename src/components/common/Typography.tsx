interface TypographyProps {
  variants: "h1" | "span";
  children: React.ReactNode;
  size?: "text-xs";
  color?: "text-blue-300";
  hoverColor?: string;
  click?: () => void;
  pointer?: boolean;
  bold?: boolean;
}
const Typography = ({
  variants,
  children,
  size,
  color,
  hoverColor,
  click,
  pointer,
  bold,
}: TypographyProps) => {
  const typoStyle = `${hoverColor && `${hoverColor}`} ${
    pointer && `cursor-pointer`
  } ${bold && `font-bold`} ${
    size && `text-${size} ${color && `text-${color}`}`
  }`;
  let tag;
  switch (variants) {
    case "h1":
      tag = <h1>{children}</h1>;
      break;
    case "span":
      tag = (
        <span onClick={() => click} className={typoStyle}>
          {children}
        </span>
      );
      break;
  }
  return tag;
};
export default Typography;
