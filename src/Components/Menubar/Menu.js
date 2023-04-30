import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Style.css';

const Menu = () => {
    let isToggled = false;

    const toggleMenu = () => {
        if (window.innerWidth <= 750) {
            const menu = document.querySelector("#menuitems");
            if (!isToggled) {
                menu.style.transform = "translateX(0%)";
                isToggled = true;
            } else {
                menu.style.transform = "translateX(100vh)";
                isToggled = false;
            }
        }
    }

    const toggleTranslate = () => {
        const translate = document.querySelector(".translator");
        translate.classList.add("translator-toggle");
        toggleMenu();
    }
    
    function displayPlanning () {
        document.querySelector(".planning").style.display = 'flex';
        document.querySelector(".travelling").style.display = 'none';
        toggleMenu();
    }

    function displayExploration () {
        document.querySelector(".planning").style.display = 'none';
        document.querySelector(".travelling").style.display = 'flex';
        toggleMenu();
    }

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <React.Fragment>
            <div className="cross-icon" onClick={() => toggleMenu()}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
            </div>

            <ul className="menubar">
                <li id="logo">
                    <img id="logo-png" src="./Assets/logo.png" />
                    <a href="#" className="menu-link">Travelogue</a>
                </li>
                <li id="menuitems">
                    <ul id="menuitems-list">
                        <li className="items" onClick={() => displayPlanning()}>
                            <a className="menu-link" href="#planning">Planning</a>
                        </li>
                        <li className="items" onClick={() => displayExploration()}>
                            <a className="menu-link" href="#Hotels">Exploration</a>
                        </li>
                        <li className="items" onClick={() => toggleTranslate()}>
                            <a className="menu-link" href="#Translate">Translate</a>
                        </li>

                        {(isAuthenticated) ? (<li id="login-menu-btn">
                            <button onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button>
                        </li>) : (<li id="login-menu-btn">
                            <button onClick={() => loginWithRedirect()}>
                                Log In
                            </button>
                        </li>)}
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Menu;