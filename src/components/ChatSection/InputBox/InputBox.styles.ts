import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px 20px; 
  background-color: ${(props) => props.theme.colors[100]}; 
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};

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
  padding: 10px 15px; 
  font-size: 14px; 
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors[100]}; 
  color: ${(props) => props.theme.grayPalette[500]};
  border-radius: 20px; 

  &::placeholder {
    font-size: 16px;
    color: ${(props) => props.theme.grayPalette[400]};
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 8px;
    border-radius: 15px;
  }
`;

export const SendVoiceButton = styled.button`
  padding: 14px; 
  font-size: 14px; 
  border: none;
  border-radius: 20px; 
  background-color: #6e00ff; 
  color: white;
  cursor: pointer;
  margin-left: 10px; 
  box-shadow: ${({ theme }) => theme.shadows.default};
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

export const Suggestions = styled.div`
  position: absolute;
  top: -150px;
  left: 0;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.default};

  div {
    padding: 8px; 
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }

  @media (max-width: 1024px) {
    max-height: 120px;
    top: -120px; 
  }

  @media (max-width: 768px) {
    max-height: 100px;
    top: -100px; 
  }
`;


export const AttachIcon = styled.div`
  cursor: pointer;

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
    gap: 5px;
  }

  @media (max-width: 768px) {
    gap: 2px;
  }
`;
