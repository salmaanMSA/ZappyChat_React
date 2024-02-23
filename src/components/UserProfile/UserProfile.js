import React from "react";
import './userProfile.css';
import { useSelector } from "react-redux";


export default function UserProfile() {

    const contact = useSelector(state => state.contacts);
    const currContact = contact.current_contact;

    const toggleInfo = (e) => {
        e.currentTarget.parentNode.classList.toggle("open");
    };
    return (
        <div className="main__userprofile">
            <div className="profile__card user__profile__image">
                <div className="profile__image">
                    <img src={currContact.image} />
                </div>
                <h4>{currContact.name}</h4>
                <p>{currContact.designation}</p>
            </div>
            <div className="profile__card">
                <div className="card__header" onClick={toggleInfo}>
                    <h4>Information</h4>
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className="card__content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    ultrices urna a imperdiet egestas. Donec in magna quis ligula
                </div>
            </div>
        </div>
    )
}   