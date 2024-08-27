import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  max-height: 90vh;
  background-color: #fff;
  overflow: hidden;
  margin: 10px 1%; 
  padding: 10px; 

  @media (max-width: 1024px) {
    margin: 10px 3%; 
    max-height: 80vh; 
  }

  @media (max-width: 768px) {
    margin: 10px 2%; 
    max-height: 50vh;
  }

  .chat-box-inner {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    height: 100%; 
    max-height: 100%; 
    box-sizing: border-box; 
    
    @media (max-width: 1024px) {
      min-height: 300px; 
    }

    @media (max-width: 768px) {
      min-height: 200px; 
    }
  }

  .chat-box-inner::-webkit-scrollbar {
    width: 8px;
  }

  .chat-box-inner::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors[900]};
    border-radius: 4px;
  }

  .chat-box-inner::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.grayPalette[100]};
  }
`;
