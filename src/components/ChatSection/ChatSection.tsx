import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addMessage } from "../../store/chatSlice";
import ComboBox from "../ComboBox/ComboBox";
import { ChatSectionContainer } from "./ChatSection.styles";
import ChatBox from "./ChatBox/ChatBox";
import InputBox from "./InputBox/InputBox";
import UserBox from "./UserBox/UserBox";

const ChatSection: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();
  const [showComboBox, setShowComboBox] = React.useState(false);

  const handleSendMessage = (message: string, isUserMessage: boolean) => {
    if (message === "/select") {
      setShowComboBox(true);
      return;
    }

    dispatch(
      addMessage({
        text: message,
        timestamp: Date.now(),
        isUserMessage,
      })
    );

    if (isUserMessage) {
      setTimeout(() => {
        dispatch(
          addMessage({
            text: `Auto-reply: ${message}`,
            timestamp: Date.now(),
            isUserMessage: false,
          })
        );
      }, 1000);
    }
  };

  const handleComboBoxSelect = (selection: string) => {
    dispatch(
      addMessage({
        text: `Selected: ${selection}`,
        timestamp: Date.now(),
        isUserMessage: true,
      })
    );
    setShowComboBox(false);
  };

  return (
    <ChatSectionContainer>
      <UserBox />
      <ChatBox />
      {showComboBox && <ComboBox onSelect={handleComboBoxSelect} />}
      <InputBox onSend={handleSendMessage} />
    </ChatSectionContainer>
  );
};

export default ChatSection;
