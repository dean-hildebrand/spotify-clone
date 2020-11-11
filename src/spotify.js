// end point to redirect to spotify login page for your account
export const authEndpoint = "https://accounts.spotify.com/authorize";

// once logged in, redirects back to localhost app
const redirectUri = "http://localhost:3000/";

//client id create for me by spotify
const clientId = "0130b936efeb46c0bf49753f5acf0394";

//setting scopes for what the user is allowed persmisson to do
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//gets auth token from url onces accepting spotifys terms
//splits the url and reduces to the token only
export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    let parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1])

    return initial;
  }, {})
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_diaglog=true`;
