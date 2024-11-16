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
  const [showsearchBar, setshowsearchBar] = useState(true);

  window.addEventListener("scroll", function (event) {
    if (window.scrollY > 30) {
      setshowsearchBar(false);
    } else {
      setshowsearchBar(true);
    }
  });

  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setsearchSuggestions(json[1]);
    dispatch(cacheSuggestion({ [searchQuery]: json[1] }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setsearchSuggestions(cache[searchQuery]);
      } else {
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
      <div className="flex col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PwOypZPZT6YWFgtCZdokT9lKQ2-_IAagFQ&s"
          alt="hamburger-logo"
          className="h-12 mt-2 cursor-pointer"
          onClick={() => toggleMenuhandler()}
        />
        <a href="/"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgDC5KbVCgEGLQgwB22LXxPNb4jBvyHwLmw&s"
          alt="youtube-logo"
          className="h-16"
        /></a>
      </div>
      <div className="col-span-6 flex items-center justify-center">
        <div>
          <input
            type="text"
            className="border-gray-400 border w-[520px] rounded-l-full p-2"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          ></input>
          <button className="border-gray-400 bg-gray-100 border rounded-r-full p-2">
            Search
          </button>
          {showSuggestions && showsearchBar && (
            <div className="bg-white fixed w-[32.5rem] shadow-lg rounded-lg p-1">
              <ul>
                {searchSuggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="m-1 p-1 hover:bg-gray-100 cursor-pointer rounded-lg"
                  >
                    🔍 {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQUiJktnaLkZtl8I41mG8S_SxpGd_IOwJVw&s"
          className="h-8 w-8 mx-3 my-4"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZFbmz1dsMQ1sxbzxIcAveTpbx8ztZnAlXg&s"
          className="h-8 w-8 mx-3 my-4"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
          alt="user-logo"
          className="h-10 w-10 my-3 mx-3"
        />
      </div>
    </div>
  );
};

export default Header;
