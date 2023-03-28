import Label from "../common/list/Label";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  name: string;
}
const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col">
      <Label text={label} />
      <input
        name={name}
        type="text"
        placeholder="연도월일"
        pattern="\d{8}"
        required
        className="w-24 text-xs rounded-md focus:border-green-600 focus:ring-0"
        {...rest}
      />
    </div>
  );
};
export default Input;
