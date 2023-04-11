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
      <div className="flex w-full">
        <div className="px-10 py-10 w-[71%]">
          <iframe
            width="1200"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get('v')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-[29%] my-10 mr-10">
          <ChatContainer />
          <form className="flex justify-center mt-2" onSubmit={onSubmitChat}>
            <input
              placeholder=" Say Something.. "
              className="w-3/4 p-2 border-2 border-black rounded-lg mr-2"
              type='text'
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md">Send</button>
          </form>
        </div>
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage;