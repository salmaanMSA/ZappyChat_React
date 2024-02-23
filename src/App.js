import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/nav/Nav';
import ChatBody from './components/ChatBody/ChatBody';
import dummyData from './dummyData.json'
import { addContacts, addConversations, showCurrentContact } from './actions';

function App() {
  const dispatch = useDispatch();
  // Load Initial Datas
  dispatch(addContacts(dummyData.contacts));
  dispatch(addConversations(dummyData.conversations));
  dispatch(showCurrentContact(dummyData.contacts[0]));

  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
