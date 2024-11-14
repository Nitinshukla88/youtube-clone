import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlices/globalSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSuggestion } from "../utils/appSlices/searchSlice";

const Header = () => {
  const cache = useSelector((store) => store.search);
  const [searchQuery, setsearchQuery] = useState("");
  const [searchSuggestions, setsearchSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setsearchSuggestions(json[1]);
    dispatch(cacheSuggestion({ [searchQuery] : json[1]}));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(cache[searchQuery]){
        setsearchSuggestions(cache[searchQuery]);
      }else{
        getSearchResults();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PwOypZPZT6YWFgtCZdokT9lKQ2-_IAagFQ&s"
          alt="hamburger-logo"
          className="h-12 mt-2 cursor-pointer"
          onClick={() => toggleMenuhandler()}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgDC5KbVCgEGLQgwB22LXxPNb4jBvyHwLmw&s"
          alt="youtube-logo"
          className="h-16"
        />
      </div>
      <div className="col-span-6 pl-16">
        <input
          type="text"
          className="border-gray-400 border w-1/2 rounded-l-full p-2 mt-3"
          placeholder="Type to search"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={()=> setshowSuggestions(true)}
          onBlur={()=> setshowSuggestions(false)}
        ></input>
        <button className="border-gray-400 bg-gray-100 border rounded-r-full p-2 inline">
          Search
        </button>
        {showSuggestions && <div className="bg-white fixed w-[26.5rem] rounded-lg p-1">
          <ul>
            {searchSuggestions.map((suggestion) => (<li key={suggestion} className="m-1 p-1 hover:bg-gray-100 cursor-pointer rounded-lg">🔍 {suggestion}</li>))}
          </ul>
        </div>}
      </div>
      <div className="col-span-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
          alt="user-logo"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
