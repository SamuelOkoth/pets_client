// messages.slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  conversations: [], // Make sure this is initialized as an array
};

const messagesSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(
        (chat) => chat.id !== action.payload
      );
    },
    getMyMessages: (state, action) => {
      state.conversations = action.payload;
    },
    getMyMessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { sendMessage, deleteMessage, getMyMessages, getMyMessage } =
  messagesSlice.actions;

const MessagesSlice = messagesSlice.reducer;
export default MessagesSlice;