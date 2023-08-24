import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/**
 * Renders the boxes app with a form to add new boxes.
 *
 * Props: None
 *
 * State:
 * - boxes: The list of boxes []
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ id, height, width, bgColor }) => (
        <Box
          key={id}
          height={height}
          width={width}
          bgColor={bgColor}
          removeBox={()=>{removeBox(id)}}
        />
      ))}
    </div>
  );
}

export default BoxList;
