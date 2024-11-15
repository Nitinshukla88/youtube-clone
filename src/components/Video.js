import React from 'react'

const Video = ({ videoData }) => {
    console.log(videoData);

    const { snippet, statistics } = videoData;
  return (
    <div className='flex pb-2 rounded-lg border border-b-gray-200'>
        <img src={snippet.thumbnails.medium.url} className='h-[7rem] w-[12rem] rounded-lg'/>
        <div>
            <p className='text-sm line-clamp-2 font-semibold text-ellipsis overflow-hidden'>{snippet.title}</p>
            <p className='text-xs'>{snippet.channelTitle}</p>
            <div>
              <span className='text-xs'>{(
                    statistics?.viewCount /
                    Math.pow(10, statistics?.viewCount.length - 1)
                  ).toFixed(1)}M views &#x2022; </span>
                  <span className='text-xs'>{Math.ceil(snippet.categoryId/10)} years ago</span>
            </div>
        </div>
        
    </div>
  )
}

export default Video