import React from "react";
import './preview.css';

const ViewMetroMaps = () => {
    const togglePreview = () => {
        const previewMap = document.querySelector(".preview-tab");
        previewMap.classList.add("toggle-preview-tab");
    }

    return (
        <React.Fragment>
            <button id="preview-map-btn" onClick={() => {togglePreview()}}>
                Preview Map
            </button>
        </React.Fragment>
    );
}

export default ViewMetroMaps;