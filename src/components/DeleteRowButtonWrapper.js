import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import {
  buttonSizePX,
  backgroundColorMinusButton,
  spaceBetweenTableAndButtons,
} from './styleVars';

const DeleteRowButtonWrapper = styled.div`
  display: ${ ({ theme }) => theme.isDeleteRowButtonHidden ? 'none' : 'block' };

  background-color: transparent;
  width: ${buttonSizePX};
  height: ${buttonSizePX};
  position: absolute;
  top: -2px;
  left: ${spaceBetweenTableAndButtons};
  border: none;
  color: white;
  transition: opacity 1s, transform 0.5s;
  font-size: 28px;

  transform: translateY(${ ({ theme }) => 2 + ((theme.rowIndex + 1) * theme.cellSize)}px);

  ${Wrapper}:hover & {
    background-color: ${backgroundColorMinusButton};
  }
  
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
export default DeleteRowButtonWrapper;