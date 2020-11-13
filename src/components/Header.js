import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core"

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Playlists..."
          type="text"
        />
      </div>
      <div className="header__right">
      <Avatar src="" alt="DH"/>
      <h4>Dean Hildebrand</h4>
      </div>
    </div>
  );
}

export default Header;
