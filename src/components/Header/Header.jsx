import React, { useState } from 'react';
import "./Header.css";
import { SlMagnifier } from "react-icons/sl";
import logo from "../../assets/logo.svg";
import Icon from './Icon/Icon';
import { LuHome } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuBriefcase } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle } from "react-icons/lu";

const Header = () => {

    return (
        <div className='nav'>
            <div className='settings'>
              <RxHamburgerMenu size={21}/>
            </div>
            <div className='logo__search'>
                <img className="logo" draggable="false" src={logo} height={35} width={35} alt="Logo"/>
                <div className='search'>
                    <SlMagnifier size={19}/>
                    <input type="text" placeholder='Search ...'/>
                </div>
            </div>
            <div className='nav__options'>
                <Icon img={LuHome} name={"Home"} />
                <Icon img={LuUsers} name={"Network"} />
                <Icon img={LuBriefcase} name={"Jobs"} />
                <Icon img={LuMessageSquare} name={"Messaging"} />
                <Icon img={LuBell} name={"Notifications"} />
                <div className='user'>
                    <Icon img={LuUserCircle} name={"User"} />
                </div>
            </div>
        </div>
    );
}

export default Header;