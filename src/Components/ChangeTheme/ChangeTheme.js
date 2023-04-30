import React from 'react';
import './Style.css';

const ChangeTheme = () => {

    let themeToggled = false;
    const changeTheme = () => {
        const menuBar = document.querySelector(".menubar");
        menuBar.classList.toggle("themed-menubar");

        document.querySelector(".menubar").classList.toggle("themed-menubar");
        document.querySelectorAll(".line")[0].classList.toggle("themed-lines");
        document.querySelectorAll(".line")[1].classList.toggle("themed-lines");
        document.body.classList.toggle("themed-body");
        document.querySelector(".translator").classList.toggle("themed-translator");

        const menuItems = document.querySelector("#menuitems");
        if (!themeToggled) {
            menuItems.style.background = "#f5f6f7";
            menuItems.style.color = "black";

            document.querySelector(".theme-btn img").src = "./assets/light-theme.svg";

            themeToggled = true;
        } else {
            menuItems.style.background = "rgb(2, 4, 10)";
            menuItems.style.color = "white";

            document.querySelector(".theme-btn img").src = "./assets/dark-theme.svg";

            themeToggled = false;
        }
    }

    return (
        <React.Fragment>
            <div className="theme-btn" onClick={() => changeTheme()}>
                <img src="" alt="change theme" />
                <img src="./Assets/dark-theme.svg" alt="change theme" />
            </div>
        </React.Fragment>
    );
}

export default ChangeTheme;