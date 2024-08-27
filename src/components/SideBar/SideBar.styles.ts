import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 80px; 
  background-color: ${(props) => props.theme.colors[900]};
  color: ${(props) => props.theme.colors[50]};
  padding: ${(props) => props.theme.spacing(3)};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  overflow: hidden;

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: ${(props) => props.theme.spacing(4)};
    overflow: hidden;
  }

  .exit-icon {
    margin-top: auto;
  }

  @media (max-width: 1440px) {
    width: 70px;
    .icon-container {
      gap: ${(props) => props.theme.spacing(3)};
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    .icon-container {
      gap: ${(props) => props.theme.spacing(2)};
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-around;
    padding: ${(props) => props.theme.spacing(2)};

    .icon-container {
      flex-direction: row;
      gap: ${(props) => props.theme.spacing(2)};
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: ${(props) => props.theme.spacing(2)};

    .icon-container {
      gap: ${(props) => props.theme.spacing(1)};
    }
  }
`;
