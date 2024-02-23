import React, { useState, useEffect } from "react";
import './chatList.css';
import dummyData from '../../dummyData.json';
import ChatListItem from "./ChatListItem";
import ConversationModal from "../ConversationModal/ConversationModal"
import { useDispatch, useSelector } from "react-redux";
import { showConversationModal } from "../../actions";

export default function ChatList() {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = useSelector(state => state.contacts);
  let list_of_contacts;
  if (searchQuery !== '') {
    list_of_contacts = contacts.contact_list.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  else {
    list_of_contacts = contacts.contact_list
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="main__chatlist">
      <ConversationModal />
      <button className="btn" onClick={() => dispatch(showConversationModal(true))}>
        <i className="fa fa-plus"></i>
        <span>New conversation</span>
      </button>
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required onChange={handleSearchInputChange} />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {list_of_contacts.map((item, index) => {
          const conversation = contacts.conversation_list.find(conversation => conversation.contactId === item.id);
          const lastMsg = conversation ? conversation.messages[conversation.messages.length - 1].text : "No Conversation Yet";
            return (
              <ChatListItem
                name={item.name}
                key={item.id}
                id={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                lastMsg={lastMsg}
              />
            );
          })}
      </div>
    </div>
  )
}