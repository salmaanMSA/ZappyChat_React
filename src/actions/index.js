export const ADD_CONTACTS = "ADD_CONTACTS";

export const ADD_CONVERSATIONS = "ADD_CONVERSATIONS";

export const ADD_NEW_CONVERSATION = "ADD_NEW_CONVERSATION";

export const SHOW_CURRENT_CONTACT = "SHOW_CURRENT_CONTACT";

export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export const SHOW_CONVERSATION_MODAL = "SHOW_CONVERSATION_MODAL";

export const SEND_MESSAGE = "SEND_MESSAGE";


export function addContacts(contacts) {
    return {
        type: ADD_CONTACTS,
        contacts
    }
}

export function addConversations(conversations) {
    return {
        type: ADD_CONVERSATIONS,
        conversations
    }
}

export function addNewConversation(newConversation) {
    return {
        type: ADD_NEW_CONVERSATION,
        newConversation
    }
}

export function showCurrentContact(contact) {
    return {
        type: SHOW_CURRENT_CONTACT,
        contact
    }
}

export function addSearchResult(contact){
    return {
        type: ADD_SEARCH_RESULT,
        contact
    }
}

export function showConversationModal(toShow){
    return {
        type: SHOW_CONVERSATION_MODAL,
        toShow
    }
}

export function sendMessage(currId, msgObj){
    return {
        type: SEND_MESSAGE,
        currId,
        msgObj
    }
}