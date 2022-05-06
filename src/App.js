import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDosList, setToDosList] = useState([]);

  const addToDoHandler = (toDoText) => {
    setToDosList((prevToDosList) => {
      return [
        ...prevToDosList,
        { text: toDoText, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="app">
      <h1>My TO DO App</h1>
      <ToDoForm onAddToDo={addToDoHandler} />
      <ToDoList toDos={toDosList} />
    </div>
  );
}

export default App;
