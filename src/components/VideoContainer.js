import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { saveVidoes } from "../utils/videoSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [y, setY] = useState(document.scrollingElement.scrollHeight);

  const videos = useSelector((store) => store.video.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const handleNavigation = useCallback((e) => {
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
      // setVideos([].concat(...videos, savedVideos.slice(0, 3)));
    }
    setY(window.scrollY)
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
  }

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={'watch?v=' + video.id}>
            <VideoCard info={video} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer;