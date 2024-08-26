import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors[900]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    overflow: hidden; 
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.grayPalette[100]};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors[900]};
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh; 
  width: 100vw;  
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: 0; 

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
