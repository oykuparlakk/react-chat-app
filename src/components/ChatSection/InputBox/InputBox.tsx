import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInputText, clearInputText, setSuggestions, addMessage } from "../../../store/chatSlice";
import { Attach, Emoji, Camera, Microphone } from "../../Icons";
import {
  InputWrapper,
  Input,
  Suggestions,
  AttachIcon,
  InputContainer,
  InputIcons,
  SendVoiceButton,
} from "./InputBox.styles";
import { RootState } from "../../../store/store";

const suggestionsList = [
  "Hello", "How are you?", "Goodbye", "Thanks", "Yes", "No", "Please", "Sorry", "Help", 
  "What time is it?", "Where are you?", "I don't know", "I like it", "I don't like it",
  "Can you help me?", "Please call me", "Let's meet", "See you later", "Take care", "Good luck",
];

interface InputBoxProps {
  onSend: (message: string, isUserMessage: boolean) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const dispatch = useDispatch();
  const inputText = useSelector((state: RootState) => state.chat.inputText);
  const filteredSuggestions = useSelector((state: RootState) => state.chat.suggestions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(updateInputText(value));

    if (value) {
      const filtered = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setSuggestions(filtered));
    } else {
      dispatch(setSuggestions([]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText.trim()) {
      onSend(inputText, true); // Call onSend with the message
      dispatch(clearInputText());
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    dispatch(updateInputText(suggestion));
    dispatch(setSuggestions([]));
  };

  return (
    <InputContainer>
      <InputWrapper>
        <AttachIcon>
          <Attach />
        </AttachIcon>

        <Input
          type="text"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
        />

        <InputIcons>
          <Emoji />
          <Camera />
        </InputIcons>

        {filteredSuggestions.length > 0 && (
          <Suggestions>
            {filteredSuggestions.map((suggestion, index) => (
              <div key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                {suggestion}
              </div>
            ))}
          </Suggestions>
        )}
      </InputWrapper>

      <SendVoiceButton>
        <Microphone />
      </SendVoiceButton>
    </InputContainer>
  );
};

export default InputBox;
