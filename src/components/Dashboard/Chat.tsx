import { useState } from "react";
import { postChatGpt } from "../../lib/apis";
import { SendSVG } from "../common/svgs";
import Response from "./Response";

const Chat = () => {
  const [message, setMessage] = useState<string>();
  const [response, setResponse] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(event.currentTarget.message.value);
    const data = await postChatGpt(event.currentTarget.message.value);

    setResponse(data.message);
  };
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          className="border-none rounded-md focus:ring-0"
          id="message"
          type="text"
          placeholder="입력해주세요"
        />
        <button type="submit">
          <SendSVG w={20} h={20} />
        </button>
      </form>
      <div>
        <Response message={response} />
      </div>
    </div>
  );
};
export default Chat;
