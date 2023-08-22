/**
 * Renders a box and a button to remove it.
 *
 * Props:
 * - height: The height of the box
 * - width: The width of the box
 * - bgColor: The background color of the box
 * - removeBox: A callback function to call when the button to remove the
 *  box is clicked
 *
 * State: None
 */

function Box({ height, width, bgColor, removeBox }) {
  const style = {
    height: height,
    width: width,
    backgroundColor: bgColor
  }
  return (
    <div className="Box">
      <div className="Box-box" style={ style }></div>
      <div className="Box-button">
        <button onClick={ removeBox }>Remove The Box!</button>
      </div>
    </div>
  )
}