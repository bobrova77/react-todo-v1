import React, { useState } from "react"; // Import useState from React
import AddTodoForm from "./AddTodoForm"; // Import the new component
import TodoList from "./TodoList"; // Import the new component

// import TodoList from "./TodoList";

// Step 5: Create an empty array with todo items
// const todoList = [
//   { id: 1, title: "Complete assignment" },
//   { id: 2, title: "Do the dishes" },
//   { id: 3, title: "Take out the trash" },
// ];

export default function App() {
  // const [newTodo, setNewTodo] = useState("");

  // State for Todo List
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodoList((prevTodos) => [...prevTodos, newTodo]); // Add new todo to list
  };

  return (
    <div>
      {/* Step 3: Create a level-one heading */}
      <h1>Todo List</h1>
      {/*<TodoList />*/}
      <AddTodoForm onAddTodo={addTodo} /> {/* Pass addTodo as prop */}
      <TodoList todoList={todoList} />
      {/* <p>{newTodo}</p> */}
      {/* Step 4: Create an unordered list and map over the todoList array */}
      {/* <ul>
        {TodoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
