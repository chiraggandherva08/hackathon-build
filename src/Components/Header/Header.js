import React, { useState } from "react";
import './Style.css';
import allCities from "./citiesNames";

const Header = () => {
	const [citiesList, setFilteredCitiesList] = useState([...allCities]);

	const getUserCurrentLocation = () => {
		const getLocation = (position) => {
			const coordinates = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			return coordinates;
		};

		const throwError = (error) => {
			return error;
		};
		navigator.geolocation.getCurrentPosition(getLocation, throwError);
	}

	
	const setLocation = (event) => {
		const destination = event.target.value.toLowerCase();
		filterAllCities(destination);
	}

	const filterAllCities = (destination) => {
		if (destination == "") {
			return [...allCities];
		}

		const newList = [];

		citiesList.filter((city) => {
			if (city.includes(destination) && !newList.includes(city)) {
				newList.push(city);
			}
		})
		setFilteredCitiesList([...newList]);
		return newList;
	}

	return (
		<React.Fragment>
			<div className="user_locations" id="locations">

				<button id="from-location" onClick={() => { getUserCurrentLocation() }}>grant location access</button>
				
				<div className="input-for-destination">

					<input onChange={(event) => { setLocation(event) }} id="to-location" placeholder="Your Destination" />

					<ul className="city-suggestions">
						{
							citiesList.map((value, indx) => {
								return (
									<li className="cities-sugg" key={indx}>
										{value}
									</li>
								);
							})
						}
					</ul>

				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;