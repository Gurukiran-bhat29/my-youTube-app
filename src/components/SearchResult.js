import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  YOUTUBE_KEYWORD_API_PART1,
  YOUTUBE_KEYWORD_API_PART2
} from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const SearchResult = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchParam] = useSearchParams();

  const getSearchResults = async () => {
    const response = await fetch(
      YOUTUBE_KEYWORD_API_PART1 + searchParam + YOUTUBE_KEYWORD_API_PART2
    );
    const jsonResponse = await response.json();
    jsonResponse.items.length > 0 && setSearchVideos(jsonResponse.items);
  }

  useEffect(() => {
    getSearchResults(searchParam.get('search_query'));
  }, [searchParam])

  if (searchVideos.length === 0) return <Shimmer />

  return (
    <div className="flex flex-wrap">
      {searchVideos.map((video) => {
        return (
          <Link key={video.id.videoId} to={'../watch?v=' + video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        )
      })}
    </div>
  )
}

export default SearchResult;