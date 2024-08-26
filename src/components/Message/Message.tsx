import React from "react";
import { MessageWrapper, Balloon, TimeStamp } from "./Message.styles";

interface MessageProps {
  text: string;
  timestamp: number;
  isUserMessage: boolean;
}

const Message: React.FC<MessageProps> = ({ text, timestamp, isUserMessage }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const renderContent = () => {
    if (text.startsWith("/image")) {
      const imageNumber = text.split(" ")[1];
      return (
        <img
          src={`https://picsum.photos/200?random=${imageNumber}`}
          alt="Random"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      );
    }
    return <span>{text}</span>;
  };

  return (
    <MessageWrapper isUserMessage={isUserMessage}>
      <Balloon isUserMessage={isUserMessage}>
        {renderContent()}
        <TimeStamp isUserMessage={isUserMessage}>{formattedTime}</TimeStamp>
      </Balloon>
    </MessageWrapper>
  );
};

export default Message;
