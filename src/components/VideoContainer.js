import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { addVideos, saveVidoes } from "../utils/videoSlice";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const savedVideos = useSelector((store) => store.video.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const handleNavigation = useCallback(() => {
    const timer = setTimeout(() => {

      if (y < window.scrollY) {
        // scrolling down
        dispatch(addVideos(videos))
      }
      setY(window.scrollY)
    }, 100)

    return () => clearTimeout(timer);

  }, [y]);

  useEffect(() => {

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    dispatch(saveVidoes(jsonData.items))
    setVideos(jsonData.items)
  }

  return (
    <div>
      <ButtonList />
      <div className="flex flex-wrap justify-center">
        {savedVideos.map((video, index) => {
          return (
            <Link key={video.id + index} to={'watch?v=' + video.id}>
              <VideoCard info={video} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default VideoContainer;