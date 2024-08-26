import styled from 'styled-components';

export const ComboBoxContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.default};
  cursor: pointer;
  appearance: none; 
  
  &:hover {
    background-color: #f9f9f9;
  }

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const Option = styled.option`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
