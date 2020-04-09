import styled from 'styled-components';
import {
  buttonSize, 
  buttonSizePX,
  backgroundColorInAddButton,
  spaceBetweenTableAndButtons,
} from './styleVars';

const AddRowButtonWrapper = styled.div`
  width: ${buttonSizePX};
  height: ${buttonSizePX};
  position: absolute;
  bottom: ${spaceBetweenTableAndButtons};
  left: ${buttonSize + 1}px;
  border: none;
  color: white;
  transition: opacity 1s, transform 0.5s;
  background-color: ${backgroundColorInAddButton};

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export default AddRowButtonWrapper;
