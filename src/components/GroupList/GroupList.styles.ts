import styled from "styled-components";

export const GroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 0px 16px;
  border-radius: 25px;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%; 
  @media (max-width: 768px) {
    width: 100%; 
    padding: ${(props) => props.theme.spacing(1)};
  }

  @media (max-width: 425px) {
    width: 100%;
    min-width: 480px;

    padding: ${(props) => props.theme.spacing(1)};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 25px;
  background-color: white;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadows.default};


  p {
    margin-left: 8px;
    color: #888;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    p {
      font-size: 12px;
    }
  }
`;

export const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  background-color: white;
  padding: 13px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  h2 {
    color: black;
    font-size: 30px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    div {
      max-height: 110px; 
      overflow-y: auto;
    }
    h2 {
      color: black;
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 425px) {
    div {
      max-height: 200px; 
      overflow-y: auto;
    }
    h2 {
      color: black;
      font-size: 16px;
      margin-bottom: 8px;
    }
  }


  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
    }
  }
`;

export const PeopleContainer = styled.div`
  flex-grow: 1;
  border-radius: 25px;
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  div {
    max-height: 200px; 
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
    }
  }
`;

export const GroupRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 25px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const GroupImage = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export const GroupContent = styled.div`
  flex-grow: 1;
  margin-left: 12px;

  h3 {
    font-size: 14px;
    margin-bottom: 2px;
  }

  p {
    font-size: 12px;
    color: #888;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-size: 12px;
    color: #888;
  }

  .badge {
    background-color: #ff5a5f;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 12px;
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 10px;
    }

    .badge {
      font-size: 8px;
      padding: 2px 4px;
    }
  }
`;
