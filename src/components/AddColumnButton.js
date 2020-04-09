import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizePX } from './styleVars';

const AddColumnButton = ({ addColumn }) => (
  <div onClick={addColumn} 
    style={ 
      {
        "height": `${buttonSizePX}`,
        "textAlign": "center", 
        "lineHeight": `${buttonSizePX}`
      } 
    }
  >
    +
  </div>
)

AddColumnButton.propTypes = {
  addColumn: PropTypes.func.isRequired,
};

export default AddColumnButton;
