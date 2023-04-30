import React, { useState } from "react";
import './Style.css';

let location = {};

const getLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
        location = res.coords;
    });
}

getLocation();

const allEmergencyPhoneNumbers = [['women', '1091'], ['police', '100'], ['fire', '101']];

const toggleContacts = () => {
    document.querySelector(".emergency-contacts").classList.toggle("emergency-contacts-toggled");
}

const showAddContacts = (show) => {
    const addContact = document.querySelector("#add-contact");
    if (show) {
        addContact.style.display = 'flex';
    } else {
        addContact.style.display = 'none';
    }
}

const Emergency = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([...allEmergencyPhoneNumbers]);
    const AddContact = () => {
        return (
            <ul id="add-contact">
                <input id="user-name" type="text" placeholder="Enter name of the person..." />
                <input id="user-phone-no" type="text" placeholder="Enter phone no. of the person..." />
                <button id="add-contact-btn" onClick={() => { AddContactToList() }}>add contact</button>
                <button id="add-contact-cancel" onClick={() => { showAddContacts(false) }} >cancel</button>
            </ul>
        );
    }

    const AllContacts = ({ name, contact }) => {
        const message = `
        it is an emergency message from my side , My latitude: ${location.latitude}, longitude: ${location.longitude} https://www.google.com/maps/?q=${location.latitude},${location.longitude} .`;

        return (
            <li className="emergency-contact">
                <a href={`https://wa.me/91${contact}?text=${message}`} target="_blank">
                    <div className="name">{name}</div>
                </a>
                <div className="contact">{contact}</div>
            </li>
        );
    };

    const AddContactToList = () => {
        const name = document.querySelector("#user-name").value.trim().toLowerCase();
        const phone = document.querySelector("#user-phone-no").value.trim();

        if (parseInt(phone) != phone || name == "" || phone == "") {
            return;
        }
        const newContacts = [...emergencyContacts, [name, phone]];
        setEmergencyContacts(newContacts);
        showAddContacts(false);
    }

    return (
        <div className="emergency">

            <AddContact />

            <div className="button-for-emergency">
                <img src="./Assets/emergency.svg" onClick={() => { toggleContacts() }} />
                <img src="./Assets/add-contact.svg" onClick={() => { showAddContacts(true) }} />
            </div>

            <ul className="emergency-contacts"> {
                emergencyContacts.map((contacts, index) => {
                    return (
                        <AllContacts name={contacts[0]} contact={contacts[1]} key={index} />
                    );
                })
            }
            </ul>
        </div>
    );
}

export default Emergency;