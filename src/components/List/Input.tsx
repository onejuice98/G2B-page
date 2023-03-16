interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  name: string;
}
const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        name={name}
        type="text"
        placeholder="yyyyMMdd"
        pattern="\d{8}"
        required
        className="rounded-md focus:border-green-600 focus:ring-0"
        {...rest}
      />
    </div>
  );
};
export default Input;
