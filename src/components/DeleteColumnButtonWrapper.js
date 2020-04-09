import styled from 'styled-components';
import Wrapper from './Wrapper';
import {
  buttonSizePX,
  backgroundColorMinusButton,
} from './styleVars';

const DeleteColumnButtonWrapper = styled.div`
  display: ${ ({ theme }) => theme.isDeleteColumnButtonHidden ? 'none' : 'block' };

  background-color: transparent;
  top: -2px;
  border: none;
  position: absolute;
  width: ${buttonSizePX};
  height: ${buttonSizePX};
  color: white;
  transition: opacity 1s, transform 0.5s;
  font-size: 28px;

  transform: translateX(${ ({ theme }) => (theme.colIndex * theme.cellSize) + 2}px);

  ${Wrapper}:hover & {
    background-color: ${backgroundColorMinusButton};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
export default DeleteColumnButtonWrapper;
