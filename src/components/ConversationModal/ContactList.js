import React from "react";
import Avatar from "../ChatList/Avatar";
import './conversationModal.css';
import { useDispatch, useSelector } from "react-redux";
import { showConversationModal, showCurrentContact } from "../../actions";


export default function ContactList(props) {

    const contact = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const { active, isOnline, image, animationDelay, name, id } = props;

    const selectChat = (e) => {
        const currId  = e.currentTarget.children[1].children[0].className;
        const currContact = contact.contact_list.find(item => item.id === parseInt(currId));
        dispatch(showCurrentContact(currContact));
        dispatch(showConversationModal(false));
    };

    return (
        <div
            style={{ animationDelay: `0.${animationDelay}s` }}
            onClick={selectChat}
            className="contactlist__item"
        >
            <Avatar
                image={image ? image : "http://placehold.it/80x80"}
                isOnline={isOnline}
            />

            <div className="userMeta">
                <p className={id}>{name}</p>
            </div>
        </div>
    )
}