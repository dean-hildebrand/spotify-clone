import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //runs code base on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //dispatches the user into the data layer to be read by any component
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //grabs logged in users playlists and sets it in data layer
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // get users discover weekly feed
      spotify.getPlaylist("37i9dQZEVXcKpLzRUQYuJ1").then(res => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res

        })
      })
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
