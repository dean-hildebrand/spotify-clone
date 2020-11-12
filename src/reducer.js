export const initialState = {
  user: null,
  //set back to null after finishing project
  token: "BQAU29yW9eZ-DhvYLJsnq5EKDEbSHf_qMqjYXiArMksh1j-NuilvnY_krCh9jtJ1O7nZfW9rVFs3yr8hZ6IWGaibZCm6kZclpxlp__WwTS6bhxG26aQkvrc2kUGJh-kvdje_ytpZOU8OaNR_3ilB3VIHmNotFSx8f9s1xzofWKiQH2N20SRT",
  playlists: [],
  playing: false,
  item: null
};

const reducer = (state, action) => {
console.log(action);

switch(action.type){
  case 'SET_USER':
  return {
    ...state,
    user: action.user
  };
  case "SET_TOKEN":
  return {
    ...state,
    token: action.token
  };
  case 'SET_PLAYLISTS':
  return {
    ...state,
    playlists: action.playlists
  }

  default:
  return state;
}
}

export default reducer
