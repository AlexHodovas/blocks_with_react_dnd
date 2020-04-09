import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizePX } from './styleVars';

const AddRowButton = ({ addRow }) => (
  <div
    onClick={addRow}
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

AddRowButton.propTypes = {
  addRow: PropTypes.func.isRequired,
};

export default AddRowButton;