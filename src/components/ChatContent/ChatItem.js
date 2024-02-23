import React from "react";
import Avatar from "../ChatList/Avatar";

function formatTimestamp(timestamp) {
    // Create a new Date object with the timestamp
    const date = new Date(timestamp);
    
    // Format time
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const timeString = date.toLocaleTimeString('en-US', timeOptions);

    // Format date
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', dateOptions);

    // Combine time and date strings
    const formattedDateTime = `${timeString} ${dateString}`;
    
    return formattedDateTime;
}

export default function ChatItem(props) {

    const { image, timestamp, text, user } = props;

    return (
        <div
            style={{ animationDelay: `0.8s` }}
            className={`chat__item ${user ? user : ""}`}
        >
            <div className="chat__item__content">
                <div className="chat__msg">{text}</div>
                <div className="chat__meta">
                    <span>{formatTimestamp(timestamp)}</span>
                </div>
            </div>
            <Avatar isOnline="active" image={image} />
        </div>
    );
}