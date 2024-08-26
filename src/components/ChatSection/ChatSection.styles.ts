import styled from 'styled-components';

export const ChatSectionContainer = styled.div`
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  height: 100%; 
  padding: 10px;
  background-color: ${(props) => props.theme.colors[0]};
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 320px;
  }

  @media (max-width: 768px) {
    min-width: 470px;
  }
`;
