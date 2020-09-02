import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

function Header({spotify}) {

    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header_left">
                 {/* searchIcon */}
                 <SearchIcon/>
                 
                 {/* input */}
                 <input
                    placeholder="Search for Artists, Songs,"
                    type="text"
                 />   
            </div>
            <div className="header_right">
                 <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                 
                 {/* if we dont optionally check then it throws TypeError: Cannot read property 'display_name' of null, because initially it is null, after some-time it fetches from the api */}
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
