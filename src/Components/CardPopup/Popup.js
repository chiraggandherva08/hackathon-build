import React from "react";
import './Style.css';

const Popup = () => {

    setTimeout(() => {
        const qrCode = document.querySelector("#qr-code-popup");
        qrCode.style.transform = "translateX(0%)";
    }, 3000);

    const closePopUp = () => {
        const qrCode = document.querySelector("#qr-code-popup");
        qrCode.style.transform = "translateX(-100vw)";
    }

    return (
        <React.Fragment>
            <div id="qr-code-popup">
                <div id="close-qr-code-popup">
                    <img src="./Assets/close.svg" onClick={() => closePopUp()} />
                </div>
                <div id="qr-code">
                    <img src="./Assets/scan-qrcode.svg" />
                </div>
                <div id="disc-code">
                    Scan the code
                </div>
            </div>
        </React.Fragment>
    );
}

export default Popup;