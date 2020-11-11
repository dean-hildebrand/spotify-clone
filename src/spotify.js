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
]
