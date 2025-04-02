import React, { useState } from "react";

const GenderSelection = () => {
  const [selectedGenders, setSelectedGenders] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedGenders((prevSelected) => {
      if (checked) {
        // Add gender to the array if checked
        return [...prevSelected, name];
      } else {
        // Remove gender from the array if unchecked
        return prevSelected.filter((gender) => gender !== name);
      }
    });
  };

  return (
    <div>
      <h3>Select Gender:</h3>
      <label>
        <input
          type="checkbox"
          name="Mongoose"
          checked={selectedGenders.includes("Male")}
          onChange={handleCheckboxChange}
        />
        Male
      </label>

      <label>
        <input
          type="checkbox"
          name="Nodejs"
          checked={selectedGenders.includes("Female")}
          onChange={handleCheckboxChange}
        />
        Female
      </label>

      <label>
        <input
          type="checkbox"
          name="React"
          checked={selectedGenders.includes("Others")}
          onChange={handleCheckboxChange}
        />
        Others
      </label>

      <h4>Selected Genders: {selectedGenders.join(", ") || "None"}</h4>
    </div>
  );
};

export default GenderSelection;
