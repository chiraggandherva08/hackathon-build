import React from "react";
import { FaBootstrap } from "react-icons/fa";

const TravellingActivities = () => {
    return (
        <>
            <h1 className="text-center text-sucess my-5"> TRAVELLING ACTIVITIES</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img src=" " />
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">CAMPING</h5>
                                    <p className="card-text">Camping is do-it-yourself accommodation:</p>

                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">RAFTING</h5>
                                    <p className="card-text"> The sport of traveling on a river or other body of water in a usually inflatable raft</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">SKY DIVING</h5>
                                    <p className="card-text">The sport of jumping from great heights or an airplane.</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src=" " />
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">SAFARI</h5>
                                    <p className="card-text"> A forest trail, exploring the forest regions via a jeep or a elephant or even on a horse.</p>

                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">HIKING</h5>
                                    <p className="card-text">Hiking, walking in nature as a recreational activity..</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">ZIP LINNING</h5>
                                    <p className="card-text">The activity of sliding down a zip line for fun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default TravellingActivities;