import React from "react";
import './chatList.css';


export default function Avatar(props) {
    
    const { image, isOnline } = props;

    return (
        <div className="avatar">
            <div className="avatar-img">
                <img src={image} alt="#" />
            </div>
            <span className={`isOnline ${isOnline}`}></span>
        </div>
    )
}