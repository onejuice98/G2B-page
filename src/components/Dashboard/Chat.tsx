import { useState } from "react";
import { postChatGpt } from "../../lib/apis";
import { IMessage } from "../../types/dashboard";
import { SendSVG } from "../common/svgs";

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const [message, setMessage] = useState<IMessage[]>([
    { text: "안녕하세요! 반갑습니다. 무엇이든 물어보세요!", user: false },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userMessage = { text: event.currentTarget.message.value, user: true };
    setMessage((prevMessage) => [...prevMessage, userMessage]);
    setInputText("");
    setLoading(true);

    const data = await postChatGpt(event.currentTarget.message.value);

    setLoading(false);
    const botMessage = { text: data.message, user: false };
    setMessage((prevMessage) => [...prevMessage, botMessage]);
  };
  return (
    <div className="flex flex-col-reverse bg-white rounded-md shadow-md w-full">
      <form
        className="flex justify-between items-center p-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border-0 focus:ring-0 h-16"
          id="message"
          type="text"
          placeholder="메시지를 입력해주세요..."
          autoComplete="off"
          value={inputText}
          onChange={textChange}
          disabled={loading}
        />
        <button type="submit">
          <SendSVG w={20} h={20} />
        </button>
      </form>
      <hr />
      <div className="flex flex-col justify-end h-[556px] overflow-y-scroll">
        {message.map((value, index) => (
          <div
            className={`p-4 ${value.user ? `bg-yellow-100` : `bg-gray-100`}`}
            key={index}
          >
            {value.text}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Chat;
