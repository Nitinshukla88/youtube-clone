import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlices/globalSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API } from "../utils/constants";

const WatchPage = () => {

  const [videoData, setvideoData] = useState([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async() => {
    const response = await fetch(VIDEO_API+"&id="+searchParams.get("v"));
    const data = await response.json();
    setvideoData(data);
  }

  const snippetData = videoData?.items?.[0]?.snippet;

  return (<div>
    <iframe width="920" height="470" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="mx-32 my-6 rounded-lg"></iframe>
    <div>
      <p className="font-bold ml-32 mb-2 text-lg">{snippetData?.title}</p>
      <p className="ml-32 font-semibold">{snippetData?.channelTitle}</p>
    </div>
  </div>)
};

export default WatchPage;
