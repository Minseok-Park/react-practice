import React, { useRef } from "react";

const HabitAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    inputRef && onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
};

export default HabitAddForm;
