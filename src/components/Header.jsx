import "./MainPage.css";
import logo from "../logo.svg";
import React from "react";


const Header = ({themeToggler}) => {

    return (
        <div className="headerBlock">
            <div className="headerFlex">
                <div className="logo">
                    <span>Discover with Me</span>
                </div>
                <div className="liveSearch">
                </div>
                <div className="darkMode" onClick={() => themeToggler()}>
                    <img src={logo} className="img"/><span>Dark Mode</span>
                </div>
            </div>
        </div>
    );
}

export default Header;