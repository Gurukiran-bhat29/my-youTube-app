import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
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