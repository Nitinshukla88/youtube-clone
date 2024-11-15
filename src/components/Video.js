import React from 'react'

const Video = ({ videoData }) => {
    console.log(videoData);

    const { snippet, statistics } = videoData;
  return (
    <div className='flex m-2 rounded-md'>
        <img src={snippet.thumbnails.default.url} className='h-24 rounded-md w-32'/>
        <div>
            <p className='text-xs line-clamp-2 text-ellipsis overflow-hidden'>{snippet.title}</p>
        </div>
        
    </div>
  )
}

export default Video