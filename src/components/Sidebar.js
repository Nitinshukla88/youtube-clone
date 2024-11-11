import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="w-40 shadow-lg">
      <ul className="m-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h2 className="font-bold m-2">You</h2>
      <ul className="m-4">
        <li>History</li>
        <li>Playlists</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>

      <h2 className="font-bold m-2">Explore</h2>
      <ul className="m-4">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
