import React, { useState } from "react";
import "./style.css";
import allCities from "./citiesNames";

const DayWeather = ({ weatherData, main, date }) => {

    return (
        <div className="main-body">
            <div className="image"><img src={`./weather-assets/${main.toLowerCase()}.svg`} /></div>
            
            <div className="disc">{weatherData[0]}</div>
            
            <div className="temp">
                <div className="max">Max <br />{weatherData[0]}</div>
                <div className="min">Min <br />{weatherData[1]}</div>
                <div className="current">{weatherData[2]}</div>
            </div>

            <div id="date-sec">
                {date[0]}:{date[1]}:{date[2]}
            </div>
        </div>
    );
}

function Weather() {

    const [cityName, setCityName] = useState('');
    const [weatherData, setData] = useState([]);

    function fetchData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?cnt=7&q=${city}&appid=c8bf51e89e3187a5bb1c6bf76ff14902`).then(response => response.json()).then(
            (response) => {
                setData(response.list);
                setCityName(response.city.name);
            }
        );
    }

    const passInput = () => {
        let city = document.querySelector(".input-section input").value.toLowerCase();
        city = city.trim();

        if (city == "") {
            return;
        }

        if (!allCities.includes(city)) {
            document.querySelector("#error-city").innerText = `${city} is not a city!`;
            document.querySelector(".weather-for-seven-days").style.display = 'none';
            return;
        } else {
            document.querySelector("#error-city").innerText = ``;
            document.querySelector(".weather-for-seven-days").style.display = 'flex';
        }
        setCityName(city);
        fetchData(city);
    }

    const dateObj = new Date();
    let date = dateObj.getDate() - 1;
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    return (
        <React.Fragment>
            <div className="all-weather" id="weather">
                <h2 id="weather-heading">{cityName} weather data for a week:</h2>

                <div className="input-section">
                    <input type="text" placeholder="Enter city..." />
                    <button id="get-weather" onClick={() => passInput()}>Get weather</button>
                </div>

                <div className="weather-for-seven-days">
                    {
                        weatherData.map((object, index) => {
                            const month31 = [1, 3, 5, 7, 8, 10, 12];
                            const month30 = [4, 6, 9, 11];
                            const month28 = [2];

                            date++;

                            if (date > 31 && month31.includes(month)) {
                                date = 1;
                                month++;
                            } else if (date > 30 && month30.includes(month)) {
                                date = 1;
                                month++;
                            } else if (date > 28 && month28.includes(month)) {
                                month++;
                            }

                            if (month == 12 && date == 31) {
                                month = 1;
                                year++;
                            }

                            return (
                                <DayWeather key={index}
                                    weatherData={Object.values(object.main)}
                                    main={object.weather[0].main}
                                    date={[date, month, year]}
                                />
                            )
                        })
                    }
                </div>

                <div id="error-city">
                </div>

            </div>
        </React.Fragment>
    )
}
export default Weather;