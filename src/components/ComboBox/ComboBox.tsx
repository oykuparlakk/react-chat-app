import React from 'react';
import styled from 'styled-components';
import {
  ComboBoxContainer,
  StyledSelect
} from "./ComboBox.styles";
interface ComboBoxProps {
  onSelect: (selection: string) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({ onSelect }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value); 
  };

  return (
    <ComboBoxContainer>
      <StyledSelect onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
      </StyledSelect>
    </ComboBoxContainer>
  );
};

export default ComboBox;
