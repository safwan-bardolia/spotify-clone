import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon  from '@material-ui/icons/Home';
import SearchIcon  from '@material-ui/icons/Search';
import LibraryMusicIcon  from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
import { CircularProgress } from '@material-ui/core';


function Sidebar() {

    // get the value from DataLayer
    const[{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

            <br/>
            <strong className="sidebar_playlistsTitle">PLAYLISTS</strong>
            <hr/>

            {/* if playlists present then display it otherwise render circularProgress */}
            {playlists? playlists.items.map((playlist)=>(
                <SidebarOption key={playlist.id} title={playlist.name} />
            )) : <CircularProgress/>}

        </div>
    )
}

export default Sidebar
