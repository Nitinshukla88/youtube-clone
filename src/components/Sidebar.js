import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="w-40 shadow-lg">
      <ul className="m-4">
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Shorts</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Subscriptions</li>
      </ul>

      <h2 className="font-semibold mx-4 my-2">You</h2>
      <ul className="m-4">
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">History</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Playlists</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Watch later</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Liked videos</li>
      </ul>

      <h2 className="font-semibold mx-4 my-2">Explore</h2>
      <ul className="m-4">
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Trending</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Shopping</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Videos</li>
        <li className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
