import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className={`p-2 m-2 shadow-lg w-96 md:w-80 lg:${!isMenuOpen ? 'w-[335px]' : 'w-96'}`}>
      <img className='rounded-lg w-full' alt='tumb-nail' src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics && statistics.viewCount && <li>{statistics.viewCount} views</li>}
      </ul>
    </div>
  )
}

export default VideoCard;