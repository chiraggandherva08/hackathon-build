import React from "react";
import './Style.css';

const Translator = () => {
    const toggleTranslate = () => {
        const translate = document.querySelector(".translator");
        translate.classList.toggle("translator-toggle");
    }

    const showResponse = (text, response) => {
        const output = document.querySelector(".user-output");
        output.innerHTML = response;
    }

    const generateResponse = (translateFrom, translateTo, text) => {
        const url =
            `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

        fetch(url).then(res => res.json()).then(
            (response) => {
                if (response.responseStatus == 403) {
                    const output = document.querySelector(".user-output");
                    output.innerHTML = "";
                    return;
                }
                else
                showResponse(text, response.responseData.translatedText);
            }
        );
    }

    const loadResponse = () => {
        const text = document.querySelector(".user-input textarea").value;

        const inputLang = document.querySelector("#input-lang").value;
        const outputLang = document.querySelector("#output-lang").value;

        if (inputLang == "" || outputLang == "") {
            const output = document.querySelector(".user-output");
            output.innerHTML = "First select input and output languages";
            return;
        } 
        else {
            generateResponse(inputLang, outputLang, text);
            return;
        }
    }

    return (
        <React.Fragment>
            <div className="translator" id="Translate">
                <div className="close-tab">
                    <img src="./Assets/close.svg" onClick={() => toggleTranslate()} />
                </div>

                <div className="main-translator-body">
                    <div className="languages">
                        <input id="input-lang" placeholder="Input Language" type="text" required/>
                        <input id="output-lang" placeholder="Output Language" type="text" required/>
                    </div>

                    <div className="input-part">
                        <div className="user-input">
                            <textarea placeholder="Enter text here...." cols="30" rows="10"></textarea>
                        </div>
                        <button id="translate-text" onClick={() => (loadResponse())}>Translate?</button>
                    </div>

                    <div className="output-part">
                        <div className="user-output">
                        </div>
                    </div>

                    {/* <button id="voice-reco-button" onClick={() => {startListening()}}>Hear</button> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Translator;