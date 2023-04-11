import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomComment, generateRandomName } from "../utils/helperUtils";
import ChatMessage from "./ChatMessage";

const ChatContainer = () => {

  const messages = useSelector(store => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomComment(50)
      }))
    }, 1500);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col-reverse p-2 h-[500px] border border-gray-600 rounded-xl overflow-x-hidden overflow-y-auto scrollbar-hide">
      {messages.map((chat, index) =>
        <ChatMessage key={'name' + index} name={chat.name} message={chat.message} />
      )}
    </div>
  )
}

export default ChatContainer;