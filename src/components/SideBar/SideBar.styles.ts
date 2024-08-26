import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 5%;
  height: 100%;
  background-color: ${(props) => props.theme.colors[900]};
  color: ${(props) => props.theme.colors[50]};
  padding: ${(props) => props.theme.spacing(5)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  position: relative;

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex: 1;
    gap: ${(props) => props.theme.spacing(10)};
  }

  @media (max-width: 2560px) {
    width: 5%;
  }

  @media (max-width: 1440px) {
    width: 7%; 
    .icon-container {
      gap: ${(props) => props.theme.spacing(6)}; 
    }
  }

  @media (max-width: 1024px) {
    width: 8%;
    .icon-container {
      gap: ${(props) => props.theme.spacing(5)};
    }
  }

  @media (max-width: 768px) {
    flex-direction: row; 
    width: 100%; 
    height: auto;
    justify-content: space-evenly;
    padding: ${(props) => props.theme.spacing(2)};

    .icon-container {
      flex-direction: row;
      gap: ${(props) => props.theme.spacing(8)};
    }
  }

  @media (max-width: 425px) {
    flex-direction: row; 
    justify-content: space-evenly;
    min-width:470px;
    padding: ${(props) => props.theme.spacing(3)};

    .icon-container {
      flex-direction: row;
      gap: ${(props) => props.theme.spacing(2)}; 
    }
  }
`;
