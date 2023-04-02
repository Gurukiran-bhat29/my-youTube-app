import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { addMessage, clearMessage } from "../utils/chatSlice";
import ChatContainer from "./ChatContainer";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    return () => dispatch(clearMessage())
  }, [])

  const onSubmitChat = (e) => {
    e.preventDefault();
    if (liveMessage) {
      dispatch(
        addMessage({
          name: 'Guru kiran',
          message: liveMessage
        })
      )
      setLiveMessage('');
    }
  }

  return (
    <div className="w-full">
      <div className="flex">
        <div className="p-10">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get('v')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-full mr-10 my-10">
          <ChatContainer />
          <form onSubmit={onSubmitChat}>
            <input
              type='text'
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-2 py-1 rounded-md">Send</button>
          </form>
        </div>
      </div>
      <CommentContainer />

    </div>
  )
}

export default WatchPage;