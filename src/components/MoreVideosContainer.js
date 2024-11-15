import React from 'react'
import Video from './Video';
import { useSelector } from 'react-redux';

const MoreVideosContainer = () => {

  const videosList = useSelector(store => store.video.videos);
  console.log(videosList[0]);
  return (
    <div>
      {videosList.map((v) => <Video videoData={v}/>)}
    </div>
  )
}

export default MoreVideosContainer;