import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg w-80 h-72 m-2 p-2 rounded-lg hover:bg-gray-100">
      <div>
        <img
          alt="video-img"
          src={thumbnails.medium.url}
          className="rounded-lg"
        />
        <div className="flex my-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
            className="h-10 w-10 mr-1"
          />
          <ul>
            <li className="font-medium text-ellipsis line-clamp-2 mb-1">{title}</li>
            <li className="text-sm text-gray-800">{channelTitle}</li>
            <span className="text-sm text-gray-800">{(
                    statistics?.viewCount /
                    Math.pow(10, statistics?.viewCount.length - 1)
                  ).toFixed(2)}M views &#x2022; </span>
                  <span className="text-sm text-gray-800">{Math.ceil(snippet.categoryId/10)} years ago</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
