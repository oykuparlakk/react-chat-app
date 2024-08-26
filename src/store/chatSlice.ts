import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: { text: string; timestamp: number; isUserMessage: boolean }[];
  inputText: string;
  suggestions: string[];
}

const initialState: ChatState = {
  messages: [],
  inputText: "",
  suggestions: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload;
    },
    clearInputText: (state) => {
      state.inputText = "";
    },
    addMessage: (state, action: PayloadAction<{ text: string; timestamp: number; isUserMessage: boolean }>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { updateInputText, setSuggestions, clearInputText, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
