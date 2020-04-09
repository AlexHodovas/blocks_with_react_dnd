import React from 'react';
import { buttonSizePX } from './styleVars';

const DeleteRowButton = () => (
  <div 
    style={ 
      {
        "height": `${buttonSizePX}`,
        "textAlign": "center", 
        "lineHeight": `${buttonSizePX}`
      } 
    }
  >
    -
  </div>
)

export default DeleteRowButton;