export const initialState = {
    token:null,
    user: null,
    playLists: [],      // 
    playing: false,     // is the song playing?
    item:null,           // what song you are listening?
    discover_weekly:null
}

// reducer takes some existing amount of data(here 'state' of DataLayer, at start this 'state' is 'initialState') & action object
const reducer = (state, action) => {

    // very imp for debugging, it gives which action is dispatch right now
    console.log(action);
    
    // Action => type, payload

    switch (action.type) {
        case 'SET_USER':
            // return new state by updating 'user' property
            return {
                ...state, user: action.user
            }

        case 'SET_TOKEN':
            // return new state by updating 'token' property
            return {
                ...state, token: action.token
            }

        case 'SET_PLAYLISTS':
            // return new state by updating 'playlists' property
            return {
                ...state, playlists: action.playlists
            }
    
        case 'SET_DISCOVER_WEEKLY':
            // return new state by updating 'discover_weekly' property
            return {
                ...state, discover_weekly: action.discover_weekly
            }

        // case "SET_ITEM":
        //     return {
        //         ...state, item: action.item
        //     }  
        
        // case "SET_PLAYING":
        //     return {
        //         ...state, playing: action.playing
        //     }    
            

        default:
            return state;
    }
}

export default reducer;