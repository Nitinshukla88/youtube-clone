import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlices/globalSlice";

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1">
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
      <div className="col-span-8 flex items-center justify-center">
        <input type="text" className="border-gray-400 border w-1/2 rounded-l-full p-2" placeholder="Type to search"></input>
        <button className="border-gray-400 bg-gray-100 border rounded-r-full p-2">Search</button>
      </div>
      <div className="col-span-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"
          alt="user-logo" className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
