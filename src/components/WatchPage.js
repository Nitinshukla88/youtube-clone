import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlices/globalSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/constants";
import CommentPage from "./CommentPage";

const WatchPage = () => {
  const [videoData, setvideoData] = useState([]);
  console.log(videoData);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const response = await fetch(VIDEO_API + "&id=" + searchParams.get("v"));
    const data = await response.json();
    setvideoData(data);
  };

  const { snippet, statistics } = videoData?.items?.[0] || {};

  return (
    <div>
      <iframe
        width="920"
        height="470"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-32 my-6 rounded-lg"
      ></iframe>
      <div className="ml-32">
        <p className="font-bold mb-2 text-lg">{snippet?.title}</p>
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
            className="w-12 h-12 mx-2"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{snippet?.channelTitle}</p>
            <p className="text-sm">
              {(
                statistics?.commentCount /
                Math.pow(10, statistics?.commentCount.length - 1)
              ).toFixed(2)}M subscribers
            </p>
          </div>
          <button className="bg-black text-white h-9 mt-1 mx-8 rounded-full px-5">
              Subsribe
            </button>
          <button className="h-9 mt-1 ml-40 bg-gray-200 rounded-full px-3 shadow-md">👍 {Math.ceil(statistics?.likeCount /
                Math.pow(10, statistics?.likeCount.length - 2))}K | 👎</button>
          <button className="h-9 mt-1 ml-4 border border-gray-100 bg-gray-200 rounded-full px-3 shadow-md">Share ⏩</button>
          <button className="h-9 mt-1 ml-4 bg-gray-200 rounded-full px-3 shadow-md">⬇️ Download</button>
          <button className="h-9 mt-1 ml-4 bg-gray-200 rounded-full px-3 shadow-md">...</button>
        </div>
      </div>
      <div className="mx-32 my-6">
        <CommentPage />
      </div>
    </div>
  );
};

export default WatchPage;
