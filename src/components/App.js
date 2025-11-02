import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  // Add a new name-age pair
  const addMoreBtn = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { name: "", age: "" }]);
  };

  // Remove a field by index
  const remove = (index) => {
    setInputFields((prev) => prev.filter((_, i) => i !== index));
  };

  // Update name or age
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...inputFields];
    updatedFields[index][name] = value;
    setInputFields(updatedFields);
  };

  // On submit: log only the array (not with text)
  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <div>
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
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <br />
        <button type="button" onClick={addMoreBtn}>
          Add More..
        </button>
        <button type="submit">Submit</button>
        <p>After Clicking</p>
      </form>
    </div>
  );
};

export default App;
