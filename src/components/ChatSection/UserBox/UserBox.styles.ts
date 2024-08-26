import styled from 'styled-components';

export const UserBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.grayPalette[200]};
  box-sizing: border-box; 
  margin: 10px 30px 20px 30px;
  padding: 10px 0px 20px 0px;
  margin-bottom: 20px; 

  @media (max-width: 1024px) {
    margin: 10px 20px 15px 20px;
    padding: 8px 0px 15px 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px 15px;
    padding: 8px 0;
    align-items: center; 
  }
`;

export const UserImage = styled.div`
  flex-basis: 10%;
  display: flex;
  justify-content: center; 
  align-items: center; 

  img {
    width: 70%;
    height: auto;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    flex-basis: 15%;
    img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-basis: 20%;
    img {
      width: 80%;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  text-align: start; 
  padding-left: 10px;

  h3 {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.grayPalette[900]};
  }

  p {
    margin: 5px 0 0;
    font-size: 18px;
    color: ${(props) => props.theme.grayPalette[500]};
  }

  @media (max-width: 1024px) {
    flex-basis: 60%;

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    padding-left: 0;
    text-align: center; 

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const UserIcons = styled.div`
  flex-basis: 30%; 
  display: flex;
  justify-content: flex-end;
  gap: 40px;

  svg {
    width: 42px;
    height: 42px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors[700]};
    }
  }

  @media (max-width: 1024px) {
    flex-basis: 40%;
    gap: 30px;

    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    justify-content: space-around;
    gap: 20px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
