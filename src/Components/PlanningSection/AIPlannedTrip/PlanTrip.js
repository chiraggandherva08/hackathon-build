import React from "react";
import './Style.css';
import chatGPT_Response from "./AIPlanner";

const TripPlanner = () => {
    function changeWeatherlocation (event) {
        const weatherCityInput = document.querySelector("#weather-city-input");
        weatherCityInput.value = event.target.value;
    }

    const createUserQuery = () => {
        const startingLocation = document.querySelector("#starting-point").value.trim();
        const endingLocation = document.querySelector("#ending-point").value.trim();
        const mode = document.querySelector("#mode-of-transport").value.trim().toLowerCase();
        const purpose = document.querySelector("#purpose").value.trim().toLowerCase();
        let noOfDays = document.querySelector("#number-of-days").value.trim();

        if (noOfDays*0 != 0) {
            return;
        }

        if (noOfDays == 0 || startingLocation == "" || endingLocation == "") {
            return;
        } else {
            const animation = document.querySelector(".loading-trip");
            const text = document.querySelector(".creating-trip");
            animation.classList.add("display-flex");
            text.classList.add("display-flex");

            const outputWindow = document.querySelector(".planned-trip");
            outputWindow.style.height = '0px';
            outputWindow.style.opacity = '0';

            if (purpose == "") {
                const query = `plan a ${noOfDays} day trip from ${startingLocation} to ${endingLocation} via ${mode} with atleast 1 sustainable tips and time taken.`;
                chatGPT_Response(query);
            } else {
                const query = `plan a ${noOfDays} day trip from ${startingLocation} to ${endingLocation} via ${mode} with atleast 1 sustainable tips and time taken (purpose is - ${purpose}).`;
                chatGPT_Response(query);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="trip-planner">
                <div className="input-fields-for-planner">
                    <input id="starting-point" type="text" placeholder="Starting point..."/>
                    <input id="ending-point" onChange={(event) => {
                        changeWeatherlocation(event)
                    }} type="text" placeholder="Ending point..."/>
                    <input id="number-of-days" type="text" placeholder="Number of days.."/>
                    <input id="purpose" type="text" placeholder="Purpose(Optional)"/>

                    <select id="mode-of-transport">
                        <option htmlFor="mode-of-transport" value="air" >By air</option>
                        <option htmlFor="mode-of-transport" value="road">By road</option>
                        <option htmlFor="mode-of-transport" value="train">By train</option>
                    </select>

                    <button id="generate-trip-btn" onClick={() => {createUserQuery()}}>Generate?</button>
                </div>

                <div className="planning-img">
                    <img src="./Assets/travel.svg" />
                </div>
            </div>

            <ul className="planned-trip">
            </ul>

            <div className="loading-trip">
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
                <div id="bar4"></div>
                <div id="bar5"></div>
            </div>

            <div className="creating-trip">
                Keep calm, <br />
                We are preparing your itinerary.
            </div>

        </React.Fragment>
    );
}

export default TripPlanner;