import React from 'react'

const Video = ({ videoData }) => {

    const { snippet, statistics } = videoData;
  return (
    <div className='flex mb-3 rounded-lg cursor-pointer hover:bg-gray-100'>
        <img src={snippet.thumbnails.medium.url} className='h-[7rem] w-[12rem] rounded-lg'/>
        <div className='px-2'>
            <p className='text-sm line-clamp-2 font-semibold text-ellipsis mb-1 overflow-hidden'>{snippet.title}</p>
            <p className='text-xs mb-1'>{snippet.channelTitle}</p>
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