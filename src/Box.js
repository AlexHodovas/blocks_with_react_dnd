import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import ItemTypes from './ItemTypes';
import App from './App';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

const Box = ({ left, top }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { left, top, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  if (isDragging) {
    return <div ref={drag} />
  }

  return (
    <div ref={drag} style={{ ...style, left, top }}>
      <App />
    </div>
  )
}

Box.propTypes = {
  left: PropTypes.number.isRequired,  
  op: PropTypes.number.isRequired,
};


export default Box;