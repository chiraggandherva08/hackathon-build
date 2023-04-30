import React, { useState } from "react";
import './Style.css';
import Card from "./Card";
import Data from "./TourGuidesData";

const TourGuide = () => {
    const [TourData, setTourData] = useState([]);

    const addtourGuide = () => {

    }

    const filterTourGuides = (event) => {
        const value = event.target.value.trim().toLowerCase();

        if (value == "") {
            setTourData([]);
            return;
        }

        let filteredData = [];
        Data.map( (tourGuideData) => {
            if (tourGuideData[0].startsWith(value)) {
                filteredData.push(tourGuideData);
            }
        } );
        setTourData(filteredData);
    }

    return (
        <React.Fragment>
            <h1 id="tour-guides-heading">TOUR GUIDES</h1>

            <input type="text" id="filer-guides-data" onChange={ (event) => {filterTourGuides(event) }} placeholder="Search guides for location.." />
            <button id="add-tour-guide">Add Your Information?</button>

            <div className="tour-guides"> {
                TourData.map( (tourGuide, index) => {
                    return <Card 
                        key={index}
                        place={tourGuide[0]} 
                        name={tourGuide[1]}  
                        disc={tourGuide[2]} 
                        category={tourGuide[3]}
                        phoneNo={tourGuide[4]} />
                })
            } </div>

            <div className="add-tour-guide">
                <input type="text" id="add-tour-guide-place" placeholder="Enter location" />
                <input type="text" id="add-tour-guide-name" placeholder="Enter your name" />
                <textarea cols="30" rows="5" id="add-tour-guide-disc" type="text" placeholder="Enter review..." ></textarea>
                <input type="text" id='add-tour-guide-cate' />
                <input type="text" id='add-tour-guide-phoneno' />

                <button id="review-location-btn" onClick={() => { addtourGuide() }}>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default TourGuide;