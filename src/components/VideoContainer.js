import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/appSlices/videoSlice';

const VideoContainer = () => {

  const [videos, setvideos] = useState([]);
  const dispatch = useDispatch();
  const videosList = useSelector(store => store.video.videos);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
        appendMoreVideos();
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videos]);

  const appendMoreVideos = () => {
    setvideos((prevVideos) => {
      const halflength = Math.ceil(videosList.length/2);
      return [...prevVideos, ...videosList.slice(0, halflength)]
  });
  };

  const getVideos = async() => {
    const result = await fetch(YOUTUBE_API);
    const data = await result.json();
    setvideos(data.items);
    dispatch(addVideos(data.items));
  }

  return (
    <div className='flex flex-wrap'>
  
      {videos.map((video) => <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}/></Link>)}

    </div>
  )
}

export default VideoContainer