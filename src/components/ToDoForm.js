import React, { useState } from "react";

export default function ToDoForm(props) {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddToDo(input);
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="toDo-form" onSubmit={submitHandler}>
        <div className="toDo-form__container">
          <input
            className="toDo-input"
            type="text"
            value={input}
            placeholder="Add"
            onChange={inputHandler}
          />
          <button className="toDo-button" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
