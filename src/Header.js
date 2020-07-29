import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PersonIcon from '@material-ui/icons/Person';

import { Button } from '@material-ui/core';

//top header 
function Header() {
    return (
        <div className="header">
            {/*youtube logo*/}
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" alt="icon" src="https://1000logos.net/wp-content/uploads/2017/05/logo-youtube.png" />
            </div>

            {/*search box*/}
            <div className="header__search">
                <TextField className="header__input" placeholder="Search" variant="outlined" type="text" />
                <Button className="header__searchButton"><SearchIcon /></Button>
            </div>

            {/*right side logos*/}
            <div className="header__right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <PersonIcon />
            </div>
        </div>
    )
}

export default Header
