import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'

const styles = {
  width: 1200,
  height: 700,
  border: '1px solid black',
  position: 'relative',
  margin: '0 auto'
}

const Container = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 80 },
  })

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(left, top)
      return undefined
    },
  })
  
  const moveBox = (left, top) => {
    setBoxes(
      update(boxes, {
        a: {
          $merge: { left, top },
        },
      }),
    )
  }

  return (
    <div ref={drop} style={styles}>
      {
        Object.keys(boxes).map(key => {
          const { left, top } = boxes[key]
          return (
            <Box
              key={key}
              left={left}
              top={top}
            >
            </Box>
          )
        })
      }
    </div>
  )
}
export default Container