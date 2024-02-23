import React from "react";
import './chatList.css';
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { showCurrentContact } from "../../actions";


export default function ChatListItem(props) {

    const contact = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const { active, isOnline, image, animationDelay, name, id, lastMsg } = props;

    const selectChat = (e) => {
        // Remove "active" class from all sibling chat items
        for (let index = 0; index < e.currentTarget.parentNode.children.length; index++) {
            e.currentTarget.parentNode.children[index].classList.remove("active");
        }
    
        // Add "active" class to the clicked chat item
        e.currentTarget.classList.add("active");
    
        // Print the ID, key, or name of the selected chat item
        const currId  = e.currentTarget.children[1].children[0].className;
        console.log("id", currId);
        const currContact = contact.contact_list.find(item => item.id === parseInt(currId));
        dispatch(showCurrentContact(currContact));
    };

    return (
        <div
            style={{ animationDelay: `0.${animationDelay}s` }}
            onClick={selectChat}
            className={`chatlist__item ${active ? active : ""} `}
        >
            <Avatar
                image={image ? image : "http://placehold.it/80x80"}
                isOnline={isOnline}
            />

            <div className="userMeta">
                <p className={id}>{name}</p>
                <span className="lastMsg">{lastMsg}</span>
            </div>
        </div>
    )
}