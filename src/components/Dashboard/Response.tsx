interface ResponseProps {
  message?: string;
}
const Response = ({ message }: ResponseProps) => {
  return <div> {message} </div>;
};
export default Response;
