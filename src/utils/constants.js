const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://proxy.cors.sh/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";