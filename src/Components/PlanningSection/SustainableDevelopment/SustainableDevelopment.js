import React, { useState } from "react";
import guidelines from "./guidelines";
import './Style.css';

const SustainableDevelopmentGuidelines = ({ data, sno }) => {
    return (
        <li className="SustainableDevelopmentGuidelines">
            <div className="sno-sustainable">
                {sno + 1}
            </div>
            <div className="data-sustainable">
                {data}
            </div>
        </li>
    )
}

const SustainableDevelopment = () => {
    return (
        <React.Fragment>
            <h2 id="SustainableHeading">
                <span id="highlighted-text">
                    Sustainable development guidelines
                </span>
                <br />
                For tourism in India can help ensure that tourism activities in the country are environmentally, socially, and economically sustainable. Here are some key guidelines that can be followed:
            </h2>

            <ul className="SustainableDevelopment" id="SustainableDevelopment">
                {
                    guidelines.map((data, index) => {
                        return (
                            <SustainableDevelopmentGuidelines sno={index} data={data} key={index} >
                            </SustainableDevelopmentGuidelines>
                        )
                    })

                }</ul>

            <div id="video-sus">
                <iframe id="sustainable-video" src="https://www.youtube.com/embed/6caqENyxc48"
                    title="PM Modi addresses post-budget webinar on Developing Tourism - With Subtitles"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
            </div>

            <h2 id="SustainableEnding">
                By following these sustainable development guidelines, tourism in India can contribute to economic growth while minimizing the impact on the environment and promoting the well-being of local communities.
            </h2>
        </React.Fragment>
    );
}

export default SustainableDevelopment;