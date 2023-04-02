export const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=' + process.env.REACT_APP_GOOGLE_API_KEY;
;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
  ;
export const Lists = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'Football', 'Mixes', 'News', 'Comedy'];

export const YOUTUBE_KEYWORD_API_PART1 =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';

export const YOUTUBE_KEYWORD_API_PART2 =
  '&key=' + process.env.REACT_APP_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 25;
