import React from "react";
import { useState } from "react";
import ContactList from "./ContactList";
import './conversationModal.css';
import { useDispatch, useSelector } from "react-redux";
import { showConversationModal } from "../../actions";

export default function ConversationModal ()  {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <div className={`modal-${contacts.showConversationModal ? 'open' : 'close'}`}>
      <div className="modal-content">
        <span className="close" onClick={() => dispatch(showConversationModal(false))}>
          &times;
        </span>
        <h2>Start New Conversation</h2>
        <div className="chatlist__items">
          {contacts.contact_list.map((item, index) => {
            return (
              <ContactList
                name={item.name}
                key={item.id}
                id={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};