const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className={`p-2 m-2 shadow-lg w-96 sm:w-96 md:w-80 lg:w-80 xl:w-96`}>
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