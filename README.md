# Chat Interface Project

## Overview

This project is a responsive chat interface that allows users to send and receive messages with additional features like image display, combo box selection, and auto-complete. The project was inspired by a free Figma design, but several features and the mobile version were customized and adapted to fit specific needs.

## Core Functionality

- **Message Sending & Receiving**: Users can type messages in a text input box and send them. The messages appear in a scrollable chat area, with the most recent messages at the bottom.
- **Auto-scroll**: The chat area automatically scrolls to the latest message when new messages are received.

## Special Features

### 1. Image Display
- **Keyword**: `/image`
- When a user types `/image` followed by a number (e.g., `/image 3`), a placeholder image is displayed.
- Images are fetched from the `https://picsum.photos/` service.

### 2. Combo Box Selection
- **Keyword**: `/select`
- Typing `/select` displays a combo box with five options.
- The selected option is sent as a message in the chat.

### 3. Auto-complete
- An auto-complete feature provides suggestions as users type.
- The auto-complete list contains at least 20 common chat phrases (e.g., "Thanks," "Please call me").
- The suggestions appear above the input box for easy selection.

### 4. Responsive Layout
- The layout adapts between mobile and desktop views using **CSS Grid** and **Flexbox**.
- On mobile, the layout is adjusted to fit smaller screens, ensuring usability.

## State Management

The project uses **Redux Toolkit** to manage chat state, including messages, input text, and auto-complete suggestions. Here's a breakdown of the key slices:

```typescript
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


### Key Redux Actions:

- **updateInputText**: Updates the current input text in the chat.
- **setSuggestions**: Sets the list of auto-complete suggestions based on user input.
- **clearInputText**: Clears the input text after a message is sent.
- **addMessage**: Adds a new message to the chat, with properties for the message text, timestamp, and whether it's a user message.

### Custom Styling

The project uses **styled-components** for component-specific styling. A theme with a custom color palette, including primary and gray shades, is used to maintain consistency across the interface.

**Example of the styled `Suggestions` component**:

```javascript
export const Suggestions = styled.div`
  position: absolute;
  top: -120%; // Display above the input
  left: 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  width: 100%;
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
  
  div {
    padding: 8px; 
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;
