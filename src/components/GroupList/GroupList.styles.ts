import styled from "styled-components";

export const GroupListContainer = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: 25px;
  box-sizing: border-box;
  height: calc(100vh - 40px); 
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing(1)};
    height: auto; 
  }

  @media (max-width: 425px) {
    padding: ${(props) => props.theme.spacing(1)};
    height: auto;
    min-width: 0;
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
    padding: 6px;
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    padding: 4px;
    p {
      font-size: 10px;
    }
  }
`;

export const Container = styled.div`
  margin-bottom: 8px;
  background-color: white;
  padding: 13px;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};

  h2 {
    color: black;
    font-size: 30px;
    margin-bottom: 8px;
    padding-:5px;
  }

  div {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    padding: 8px;

    h2 {
      font-size: 20px;
      padding-:5px;
    }

    div {
      max-height: 120px; 
    }
  }

  @media (max-width: 425px) {
    padding: 6px;

    h2 {
      padding:5px;
      font-size: 16px;
    }

    div {
      max-height: 180px; 
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

  @media (max-width: 425px) {
    padding: 4px;
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

  @media (max-width: 425px) {
    img {
      width: 28px;
      height: 28px;
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

  @media (max-width: 425px) {
    h3 {
      font-size: 11px;
    }

    p {
      font-size: 9px;
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

  @media (max-width: 425px) {
    p {
      font-size: 9px;
    }

    .badge {
      font-size: 7px;
      padding: 1px 3px;
    }
  }
`;

