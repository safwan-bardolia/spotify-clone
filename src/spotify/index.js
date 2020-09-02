// https:developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// name exports

// we are using spotify-api for authentication
export const authEndPoint = "https://accounts.spotify.com/authorize";

// once we logged in to above api, it redirect us to our project
const redirectUri = "http://localhost:3000/";

/*
steps:
1.click Login button
2.Redirect to Spotify login page
3.Redirect to our projects home page once authorized 
*/

const clientId = "31520ac2342e4269b70d94df3c820c9e";

/*
scopes(permission): it is very important

.because the way it works in Spotify is we redirect the user to spotify
& we include buch of scopes
*/

// following are bunch of scopes, 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// afther authentication we redirect to our project with access_token, so grab the parameter from the uri (as you can see #access_token)
// this is the function which whole job is to grab that access_token from url
export const getTokenFromUrl = () => {		// http://localhost:3000/#access_token=BQAC7TBHNxaCfVVyguwYQYkdLC_aSRWDbk_OoAA2uEZ2ZzyRBuvPqFPwyDlV95QYvWAjfggdeNiu5AyAA6HwcXvhiEbzDTZCTcz_s1PjQynlmKiGRsI0BQy_ink5DFAE7nu9IQLubPSYlq_5-KIiQ0AFllvwR57uHIvfc6MbVouvhacJO74t & token_type=Bearer & expires_in=3600
    return window.location.hash				    // it returns the string which represents the anchor part of a URL including the hash '#' sign.		
    .substring(1)					            // return the entire string after '#' symbol
    .split('&')						            // split a string into an array of substrings, and returns the new array.
    .reduce((initial, item) => {			    //  now 1st elem in array is {access_token="..."} & others are {token_type}, {expires_in} 
        let parts = item.split('=');			// reduce will loop throgh each elem, after 1st elem we split by '=' (i.e access_token = "key")
        initial[parts[0]] = decodeURIComponent(parts[1]);	// initial[parts[0]] => initial[access_token] , decodeURIComponent(parts[1]) => decodeURIComponent("key")

        return initial;
    },{});
}



// combine all the property in 1 url
// join(): Adds all the elements of an array separated by the specified separator string(here '%20' i.e ascii of space).
// response_type=token : once we authenticated give me back the token(it is basically string which represent your authentication)
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
