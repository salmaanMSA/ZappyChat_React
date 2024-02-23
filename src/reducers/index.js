import { combineReducers } from "redux";
import {
    ADD_CONTACTS, ADD_CONVERSATIONS, ADD_NEW_CONVERSATION,
    SHOW_CURRENT_CONTACT, ADD_SEARCH_RESULT, SHOW_CONVERSATION_MODAL, SEND_MESSAGE
} from "../actions";

const initialContactState = {
    contact_list: [],
    conversation_list: [],
    current_contact: [],
    showConversationModal: false
}

export function contacts(state = initialContactState, action) {
    switch (action.type) {
        case ADD_CONTACTS:
            return {
                ...state,
                contact_list: action.contacts
            }
        case ADD_CONVERSATIONS:
            return {
                ...state,
                conversation_list: action.conversations
            }
        case ADD_NEW_CONVERSATION:
            const updatedConversationList = state.conversation_list.map(conversation => {
                if (conversation.contactId === action.conversation.contactId) {
                    return {
                        ...conversation,
                        messages: [...conversation.messages, action.conversation.message]
                    };
                }
                return conversation;
            });

            return {
                ...state,
                conversation_list: updatedConversationList
            };
        case SHOW_CURRENT_CONTACT:
            return {
                ...state,
                current_contact: action.contact
            }
        case SHOW_CONVERSATION_MODAL:
            return {
                ...state,
                showConversationModal: action.toShow
            }
        case SEND_MESSAGE:
            const currConversation = state.conversation_list.find(conversation => conversation.contactId === action.currId);
            if (currConversation) {
                currConversation.messages.push(action.msgObj);
            }
            else {
                const newConversation = {
                    "id": state.conversation_list.length + 1,
                    "contactId": action.currId,
                    "messages": [
                        action.msgObj
                    ]
                }
                state.conversation_list.push(newConversation);
            }
            return {
                ...state,
                showConversationModal: action.toShow
            }    
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    contacts
});