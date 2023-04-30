import React from "react";
import "./preview.css";
import crossIcon from './cross.svg';

const Preview = () => {
  const removePreview = () => {
    document.querySelector(".preview-tab").classList.remove("toggle-preview-tab");
  }

  return (
    <div className="preview-tab">
      <div className="preview-container">

        <div className="cross-preview-tab">
          <img src={crossIcon} onClick={() => {removePreview()}} />
        </div>

        <h1 className="preview-heading">
          Preview
        </h1>

        <div className="image-preview">
          <img src="./metro-images/none.png" />
        </div>
      </div>
    </div>
  );
};

export default Preview;