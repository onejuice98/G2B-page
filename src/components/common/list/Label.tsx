interface LabelProps {
  text: React.ReactNode;
}
/**
 * input 위의 라벨 컴포넌트
 * @default font-size => 12px, margin left => 4px
 * @param text Label Text
 */
const Label = ({ text }: LabelProps) => {
  return <label className="text-xs ml-1"> {text}</label>;
};
export default Label;
