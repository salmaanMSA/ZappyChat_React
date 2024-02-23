import React, { useState, useRef } from "react";
import './chatContent.css';
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../actions";

export default function ChatContent() {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contacts);
    const currContact = contact.current_contact;
    const currConversation = contact.conversation_list.find(conversation => conversation.contactId === currContact.id);
    const currContactId = currContact.id;
    let currImage;
    let myImage;
    const messagesEndRef = useRef(null);

    if (currConversation) {
        currConversation.messages.map((itm, index) => {
            if (itm.type === "me") {
                myImage = itm.image;
            }
            else if (itm.type === "other") {
                currImage = itm.image;
            }
        });
    }
    else {
        myImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL_zpTULJ9oHSTLYX2iaSAeeCxoPUi3hWKQ&usqp=CAU";
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
          }, 200);
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        console.log(message);
        if (message.trim() !== '') {
            const msgObj = {
                "id": (currConversation) ? currConversation.messages.length + 1 : 1,
                "text": message,
                "type": "me",
                "image": myImage,
                "timestamp": Date.now()
            }
            // Dispatch action to send message
            dispatch(sendMessage(currContactId, msgObj));
            // Clear the message input
            setMessage('');
            scrollToBottom();
        }
    };

    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div className="blocks">
                    <div className="current-chatting-user">
                        <Avatar
                            isOnline="active"
                            image={currContact.image}
                        />
                        <p>{currContact.name}</p>
                    </div>
                </div>

                <div className="blocks">
                    <div className="settings">
                        <button className="btn-nobg">
                            <i className="fa fa-cog"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content__body">
                {currConversation ?
                    <div className="chat__items">
                        {currConversation.messages.map((itm, index) => {
                            return (
                                <ChatItem
                                    animationDelay={index + 2}
                                    key={itm.key}
                                    user={itm.type ? itm.type : "me"}
                                    text={itm.text}
                                    image={itm.image}
                                    timestamp={itm.timestamp}
                                />
                            );
                        })}
                    </div>
                    :
                    <div className="no__conversation">
                        <h2>No conversation Found</h2>
                        <h4>Start a New Conversation....!!!</h4>
                    </div>
                }
                <div ref={messagesEndRef} />
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <button className="addFiles">
                        <i className="fa fa-plus"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message here"
                        onChange={handleMessageChange}
                        value={message}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn" onClick={handleSubmitMessage}>
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}