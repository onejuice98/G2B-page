import Label from "../common/list/Label";

interface SelectProps extends React.ComponentProps<"select"> {
  label: string;
  name: string;
  options: string[];
  values: string[];
}
const Select = ({ label, name, options, values, ...rest }: SelectProps) => {
  return (
    <div className="flex flex-col">
      <Label text={label} />
      <select
        name={name}
        className="w-24 text-xs rounded-md focus:border-green-600 focus:ring-0"
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={values[index]}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
