import React from "react";

export default function ToDoList(props) {
  return (
    <div className="toDo-list">
      <h2>TO DO</h2>
      <ul>
        {props.toDos?.map((toDo) => (
          <li className="toDo" key={toDo.id}>
            {toDo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
