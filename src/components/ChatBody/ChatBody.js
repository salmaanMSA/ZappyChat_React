import React from 'react';
import './chatBody.css';
import ChatList from '../ChatList/ChatList';
import ChartContent from '../ChatContent/ChatContent';
import UserProfile from '../UserProfile/UserProfile';

export default function chatBody() {
    return (
        <div className='main__chatbody'>
            <ChatList />
            <ChartContent />
            <UserProfile />
        </div>
    )
}