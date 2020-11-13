import React from "react";
import "../css/body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";


function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
