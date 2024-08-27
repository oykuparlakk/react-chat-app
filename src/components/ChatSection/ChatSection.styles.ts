import styled from 'styled-components';

export const ChatSectionContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  overflow-y: auto; 
  background-color: #ffffff; 

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 320px;
  }

  @media (max-width: 768px) {
    min-width: 0; 
    padding: 8px;
    height: calc(100vh - 60px); 
  }

  @media (max-width: 425px) {
    padding: 6px;
    height: calc(100vh - 40px);
  }
`;
