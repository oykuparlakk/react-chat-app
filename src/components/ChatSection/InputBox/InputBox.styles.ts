import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;


  @media (max-width: 375px) {
    flex-direction: column;
    gap:10px;
    justify-content: center
    align-items: center;

  }
`;


export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px 20px; 
  background-color: ${(props) => props.theme.colors[100]}; 
  border-radius: 25px;
  box-sizing: border-box; 
  position: relative;

  @media (max-width: 1024px) {
    padding: 8px 15px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    border-radius: 20px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px; 
  font-size: 15px; 
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors[100]}; 
  color: ${(props) => props.theme.grayPalette[500]};
  border-radius: 20px; 

  &::placeholder {
    font-size: 14px; 
    color: ${(props) => props.theme.grayPalette[400]};
  }

  @media (max-width: 1024px) {
    font-size: 13px; 
    padding: 6px 10px; 
  }

  @media (max-width: 768px) {
    font-size: 12px; 
    padding: 4px 8px; 
    border-radius: 15px;

    &::placeholder {
      font-size: 12px; 
    }
  }
`;

export const SendVoiceButton = styled.button`
  padding: 10px; 
  font-size: 14px; 
  border: none;
  border-radius: 20px; 
  background-color: #6e00ff; 
  color: white;
  cursor: pointer;
  margin-left: 10px; 
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #5500cc;
  }

  @media (max-width: 1024px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 10px;
    border-radius: 15px;
  }
`;

export const AttachIcon = styled.div`
  cursor: pointer;
  font-size: 16px; 

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const InputIcons = styled.div`
  display: flex;
  gap: 15px; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer;

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const SuggestionsInline = styled.div`
  position: absolute;
  bottom: 100%; 
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors[100]};
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: flex; 
  flex-wrap: wrap;
  gap: 8px; 
  box-sizing: border-box;
  padding: 8px;
  max-height: 150px; 
  overflow-y: auto;
  z-index: 10; 
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 25px;
    font-size: 14px;
    transition: background-color 0.3s ease; 
    color: ${(props) => props.theme.grayPalette[700]};

    &:hover {
      background-color: ${(props) => props.theme.colors[200]};
    }
  }
`;
