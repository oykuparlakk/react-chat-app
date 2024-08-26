import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  max-height: 90vh;
  background-color: #fff;
  overflow: hidden;
  margin: 10px 30px 20px 30px;

  @media (max-width: 1024px) {
    margin: 10px 20px 20px 20px; 
  }

  @media (max-width: 768px) {
    margin: 10px 10px 20px 10px; 
  }
  
  .chat-box-inner {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    height: calc(100vh - 100px); 
    min-height: 500px; 
    max-height: 90vh; 
  }

  @media (max-width: 1024px) {
    .chat-box-inner {
      min-height: 300px;
      height: 500px; 
    }
  }

  @media (max-width: 768px) {
    .chat-box-inner {
      min-height: 200px; 
      height: 300px; 
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
