import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Container } from "./ChatBox.styles";
import Message from "../../Message/Message";

const ChatBox: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages); 
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });

  }, [messages]);

  return (
    <Container>
      <div className="chat-box-inner">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            timestamp={msg.timestamp}
            isUserMessage={msg.isUserMessage}
          />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
    </Container>
  );
};

export default ChatBox;
