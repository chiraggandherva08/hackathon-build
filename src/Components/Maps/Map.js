import React from "react";
import './Style.css';

const Map = () => {
    return (
        <div className="map-section">
            <iframe className="user-current-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.270893332217!2d76.99948847293851!3d28.620238191245456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0558ab22e663%3A0x817f9332787b7275!2sHoly%20World%20School!5e0!3m2!1sen!2sin!4v1681748552565!5m2!1sen!2sin"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map;