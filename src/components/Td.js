import styled from 'styled-components';
import {
  cellSizePX, 
  mainColor, 
} from './styleVars';

const Td = styled.td`
  width: ${cellSizePX};
  height: ${cellSizePX};
  background-color: ${mainColor};
  border: 1px solid white;
  padding: 0;
`

export default Td;