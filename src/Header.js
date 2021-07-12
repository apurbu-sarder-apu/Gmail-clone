import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from "@material-ui/icons/Apps";
import { Notifications } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjetahhnw_XbKlx_npTW7Z9RjGWWZypX_qxHnzak2-BydCUf0Lt-05oqmH1XURVGA1Gjk&usqp=CAU" alt="Gmail"></img>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar />
            </div>
        </div>
    );
}

export default Header;
