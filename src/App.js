import React from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';
import Wrapper from './components/Wrapper';

const Wrapper2 = ({ initialWidth, initialHeight, cellSize }) => (
  <Wrapper>
    <Table
      initialWidth={initialWidth}
      initialHeight={initialHeight}
      cellSize={cellSize}
    />
  </Wrapper>
)

const App = () => <>
  <Wrapper2
    initialWidth={4}
    initialHeight={4}
    cellSize={50}
  />
</>

Wrapper2.propTypes = {
  initialWidth: PropTypes.number.isRequired, 
  initialHeight: PropTypes.number.isRequired, 
  cellSize: PropTypes.number.isRequired,
};

export default App;