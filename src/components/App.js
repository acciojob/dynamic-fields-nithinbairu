import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // state holds array of objects (each with name and age)
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  // Add new field
  function addMoreBtn(e) {
    e.preventDefault();
    setInputFields((prev) => [...prev, { name: "", age: "" }]);
  }

  // Remove specific field
  function removeField(index) {
    setInputFields((prev) => prev.filter((_, i) => i !== index));
  }

  // Handle input change for each field
  function handleChange(index, event) {
    const { name, value } = event.target;
    const updatedFields = [...inputFields];
    updatedFields[index][name] = value;
    setInputFields(updatedFields);
  }

  // Submit form
  function submit(e) {
    e.preventDefault();
    console.log("Submitted fields:", inputFields);
  }

  return (
    <div id="main">
      <form onSubmit={submit}>
        <ul>
          {inputFields.map((field, index) => (
            <li key={index}>
              <input
                name="name"
                placeholder="Name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
              />
              <input
                name="age"
                placeholder="Age"
                value={field.age}
                onChange={(e) => handleChange(index, e)}
              />
              <button type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={addMoreBtn}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
