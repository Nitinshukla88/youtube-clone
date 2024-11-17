import React from 'react'
import Video from './Video';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MoreVideosContainer = () => {

  const videosList = useSelector(store => store.video.videos);
  console.log(videosList[0]);
  return (
    <div>
      {videosList.map((v) => <Link to={"/watch?v="+v.id} key={v.id}><Video videoData={v}/></Link>)}
    </div>
  )
}

export default MoreVideosContainer;