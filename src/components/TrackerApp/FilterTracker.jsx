import React from "react";

export default function FilterTracker({ handleTextChange }) {
  const handleChange = (e) => {
    handleTextChange(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="rechercher" onChange={handleChange} />
    </div>
  );
}
