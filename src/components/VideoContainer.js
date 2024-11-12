import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    const result = await fetch(YOUTUBE_API);
    const data = await result.json();
    console.log(data);
    setvideos(data.items);
  }

  return (
    <div className='flex flex-wrap'>
  
      {videos.map((video) => <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>)};

    </div>
  )
}

export default VideoContainer