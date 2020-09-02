import React, { useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from '../DataLayer';     // to pull info from DataLayer

/*super object, which is responsible for interaction between our React app with actual Spotify app
  but for interaction we need access_token*/
const spotify = new SpotifyWebApi();

function App() {

  // special syntax to pull info from DataLayer, (if we need to grab anything from DataLayer, we need to put into object)
  // dispatch: to dispatch action, by which we can update datalayer 
  const [{token}, dispatch] = useDataLayerValue();

  // run this function when component first render
  useEffect(()=>{
    const hash = getTokenFromUrl();

    // clear the url, because we dont want that it is visible in url
    window.location.hash="";

    const _token = hash.access_token;

    // initially _token is undefined (i.e before authorization), once it is authorized then only we update DataLayer(because at that time _token is present)
    if(_token) {

      // updating DataLayer (passing token)
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      // provide token to 'spotify' instance
      spotify.setAccessToken(_token);

      // get user info from spotify api
      spotify.getMe().then(user => {
      
        // updating DataLayer (passing user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      // get users playlists from spotify api
      spotify.getUserPlaylists().then(playlists =>{
        
        // updating DataLayer (passing users playlists)
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists
        })
      })

      // get user discover-weekly(hard-coded-key)
      spotify.getPlaylist('4D5d0Acjk6vjqD5FUlzXMh').then(response => {

        // updating DataLayer (passing users discover-weekly)
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
      
      
    }

  },[]);

  return (
    <div className="app">
      {/* if token is present then do this, otherwise render <Login> */}
      {token ? <Player spotify={spotify}/> : <Login/>}
    </div>
  );
}

export default App;
