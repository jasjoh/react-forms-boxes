import { v4 as uuid } from 'uuid';

/**
 * Renders the boxes app with a form to add new boxes.
 *
 * Props: None
 *
 * State:
 * - boxes: The list of boxes
 */

function BoxList() {
  function addBox() {

  }

  return (
    <NewBoxForm addBox={ addBox } />
    // for each box, return <Box key= { key } width={ width } height={ height }
    // bgColor = { bgColor } removeBox= { removeBox }
    )
}