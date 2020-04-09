import styled from 'styled-components';
import {
  buttonSize, 
  buttonSizePX, 
  backgroundColorInAddButton,
  spaceBetweenTableAndButtons 
} from './styleVars';

const AddColumnButtonWrapper = styled.div`
  width: ${buttonSizePX};
  height: ${buttonSizePX};
  position: absolute;
  border: none;
  color: white;
  transition: opacity 1s, transform 0.5s;
  background-color: ${backgroundColorInAddButton};
  top: ${buttonSize + 1}px;
  right: ${spaceBetweenTableAndButtons};

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export default AddColumnButtonWrapper;