import React, { useState } from 'react';

/** Form for adding a box
 *
 * Renders a form which allows for specifying properties of a box to create.
 *
 * Props:
 * - addBox: a callback function for the form submission to add the box
 *
 * State:
 * - formData: the values in the inputs of the form
 *    { height, width, bgColor }
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    bgColor: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({ height: "", width: "", bgColor: "" });
  }

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />

          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />

          <label htmlFor="bgColor">Background Color</label>
          <input
            id="bgColor"
            name="bgColor"
            value={formData.bgColor}
            onChange={handleChange}
          />
        </div>
        <button className="NewBoxForm-btn">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;