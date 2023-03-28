import Input from "./Input";
import Select from "./Select";

const BIDNO_OPTIONS = ["선택", "조경식재"];
const BIDNO_VALUES = ["0000", "4993"];
const AREA_OPTIONS = ["선택", "강원", "강원 횡성"];
const AREA_VALUES = ["000000", "42", "42730"];

interface FormProps {
  submitFn: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Form = ({ submitFn }: FormProps) => {
  return (
    <form
      className="flex w-fit justify-around text-gray-500 text-sm gap-2 p-4 bg-white rounded-md shadow-md"
      onSubmit={submitFn}
    >
      <Input name="from" label="시작날짜" />
      <Input name="to" label="종료날짜" />
      <Select
        name="bidNo"
        label="업종"
        options={BIDNO_OPTIONS}
        values={BIDNO_VALUES}
      />
      <Select
        name="areaCode"
        label="지역"
        options={AREA_OPTIONS}
        values={AREA_VALUES}
      />

      <button
        type="submit"
        className="flex justify-center items-center bg-green-400 p-4 text-white rounded-md font-medium hover:bg-green-600"
      >
        검색
      </button>
    </form>
  );
};
export default Form;
