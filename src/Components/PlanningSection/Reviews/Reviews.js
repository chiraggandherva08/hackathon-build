import React, { useState } from "react";
import './Styles.css';
import allReviews from "./ReviewsData";
import { FaStar } from "react-icons/fa";

const Review_ = ({ place, username, review }) => {
    return (
        <li className="review">
            <div className="user-name-review">{place}</div>
            <div className="user-name-review">{username}</div>
            <div className="review-message">{review}</div>
        </li>
    )
}

function Reviews() {

    const [allData, setAllData] = useState([]);

    const addReview = () => {
        const location = document.querySelector("#review-location-name").value.trim().toLowerCase();
        const name = document.querySelector("#reviewer-name").value.trim().toLowerCase();
        const review = document.querySelector("#review-location").value.trim().toLowerCase();

        allReviews.push([location, name, review]);
        filterAllReviews();
        toggleAddReviewWindow();
        return;
    }

    const toggleAddReviewWindow = () => {
        document.querySelector(".inputs-for-review").classList.toggle("toggle-review-window");
    }

    const filterAllReviews = () => {
        let filteredArr = [];

        const val = document.querySelector("#filter-for").value.trim().toLowerCase();

        if (val == "") {
            setAllData(filteredArr);
            return;
        }

        allReviews.map( (currentReview) => {
            if (currentReview[0].startsWith(val)) {
                filteredArr.push(currentReview);
            }
        });

        setAllData(filteredArr);
    }

    return (
        <React.Fragment>
            <h2 id="submit-reviews-heading" >Submit your review</h2>

            <div className="review-section" id="reviews">
                <div className="input-reviews" >
                    <div className="inputs-for-review">
                        <input type="text" id="review-location-name" placeholder="Enter location" />
                        <input type="text" id="reviewer-name" placeholder="Enter your name" />
                        <textarea cols="30" rows="5" id="review-location" type="text" placeholder="Enter review..." ></textarea>
                        <button id="review-location-btn" onClick={() => { addReview() }}>Submit</button>
                    </div>
                </div>

                <input type="text" id="filter-for" onChange={() => { filterAllReviews () }} placeholder="Filter for?" />
                <button id="add-review-button-toggle" onClick={() => { toggleAddReviewWindow () }}> Add review? </button>

                <h1 id="title-reviews">
                </h1>

                <ul className="all-reviews">{
                    (allData.length == 0) ? (
                        <div id="search-for-places">Search For Places</div>
                    ) : (
                        allData.map((place, index) => {
                            return <Review_ key={index} place={place[0]} username={place[1]} review={place[2]} stars={place[3]} />
                        })
                    )
                }
                </ul>
            </div>

        </React.Fragment>
    );
}

export default Reviews;