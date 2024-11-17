import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlices/globalSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/constants";
import CommentPage from "./CommentPage";
import MoreVideosContainer from "./MoreVideosContainer";

const WatchPage = () => {
  const [videoData, setvideoData] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoData();
  }, [searchParams]);

  const getVideoData = async () => {
    const response = await fetch(VIDEO_API + "&id=" + searchParams.get("v"));
    const data = await response.json();
    setvideoData(data);
  };

  const { snippet, statistics } = videoData?.items?.[0] || {};
  // console.log(videoData.items[0]);

  return (
    <div className="flex w-full">
      <div className="w-[1050px]">
        <iframe
          width="850"
          height="470"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="ml-28 my-6 rounded-lg"
        ></iframe>
        <div className="ml-32">
          <p className="font-semibold mb-2 text-lg break-words">
            {snippet?.title}
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
                  className="w-12 h-12 mx-2"
                />
                <div className="flex flex-col">
                  <p className="font-sm">{snippet?.channelTitle}</p>
                  <p className="text-xs">
                    {(
                      statistics?.commentCount /
                      Math.pow(10, statistics?.commentCount.length - 1)
                    ).toFixed(2)}
                    M subscribers
                  </p>
                </div>
              </div>
              <button className="bg-black text-white h-9 mt-1 ml-4 rounded-full px-4 text-sm">
                Subscribe
              </button>
            </div>
            <div>
              <button className="h-9 mt-1 bg-gray-200 rounded-full px-3 shadow-md text-sm">
                👍{" "}
                {Math.ceil(
                  statistics?.likeCount /
                    Math.pow(10, statistics?.likeCount.length - 2)
                )}
                K | 👎
              </button>
              <button className="h-9 mt-1 ml-4 border border-gray-100 bg-gray-200 rounded-full px-2 text-sm shadow-md">
                Share ⏩
              </button>
              <button className="h-9 mt-1 ml-4 bg-gray-200 rounded-full px-3 shadow-md text-sm">
                ⬇️ Download
              </button>
              <button className="h-9 mt-1 ml-4 bg-gray-200 rounded-full px-3 shadow-md">
                ...
              </button>
            </div>
          </div>
          <div className="bg-gray-200 px-4 py-4 my-3 rounded-2xl">
            <div className="">
              <span className="text-sm font-semibold mr-3">
                {(
                  statistics?.viewCount /
                  Math.pow(10, statistics?.viewCount.length - 1)
                ).toFixed(2)}
                M views
              </span>
              <span className="text-sm font-semibold">
                {Math.ceil(snippet?.categoryId / 10)} years ago
              </span>
            </div>
            <p className="text-xs text-ellipsis line-clamp-3">
              {snippet?.description}
            </p>
          </div>
        </div>
        <div className="ml-32 my-6">
          <CommentPage />
        </div>
      </div>
      <div className="w-full mx-10 my-6 rounded-lg h-[101rem] overflow-y-scroll">
        <MoreVideosContainer />
      </div>
    </div>
  );
};

export default WatchPage;
