// import React, { useState, useEffect } from "react"; // Import useState from React
// import React from "react";
import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm"; // Import the new component
import TodoList from "./TodoList"; // Import the new component

// // 6.8 Custom Hook
// function useSemiPersistentState(key, initialState) {
//   // 6.9 Read initial state from localStorage
//   const [state, setState] = React.useState(() => {
//     const savedValue = localStorage.getItem(key);
//     return savedValue ? JSON.parse(savedValue) : initialState;
//   });

//   // 6.10 Persist state in localStorage whenever it changes
//   React.useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// }

// // import TodoList from "./TodoList";

// // Step 5: Create an empty array with todo items
// // const todoList = [
// //   { id: 1, title: "Complete assignment" },
// //   { id: 2, title: "Do the dishes" },
// //   { id: 3, title: "Take out the trash" },
// // ];

// export default function App() {
//   // 6.11 Use the custom hook for todoList state
//   const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);
//   // const [newTodo, setNewTodo] = useState("");

//   // State for Todo List
//   // 6.2
//   // 6.12 Delete
//   // const [todoList, setTodoList] = useState(() => {
//   //   const savedTodos = localStorage.getItem("savedTodoList");
//   // // 6.4 Default State with Fallback:
//   // try {
//   //   return savedTodos ? JSON.parse(savedTodos) : [];
//   // } catch (error) {
//   //   console.error("Error parsing saved todo list from localStorage:", error);
//   //   return [];
//   // }
//   // 6.6 Parse the JSON string back to an array
//   // 6.15 Delete
//   // return savedTodos ? JSON.parse(savedTodos) : [];

//   // 6.14 Function to add a new todo
//   const addTodo = (newTodo) => {
//     setTodoList((prevTodos) => [...prevTodos, newTodo]);
//   };

//   // Step 6.1: Add useEffect
//   // Save the todoList to localStorage whenever it changes
//   // 6.15 DElete
//   // useEffect(() => {
//   // Save the todoList to localStorage
//   // 6.3 Convert the todoList into a string before saving
//   // 6.5 The useEffect hook ensures the state is saved to localStorage whenever todoList changes
//   // localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   // }, [todoList]); // Step 6.2: Add todoList as a dependency

//   // Function to add a new todo
//   // 6.13 Cut
//   // const addTodo = (newTodo) => {
//   //   // setTodoList((prevTodos) => [newTodo, ...prevTodos]); // Add new todo to list furst
//   //   // 6.7 Add the new todo
//   //   setTodoList((prevTodos) => [...prevTodos, newTodo]);

//   return (
//     <>
//       {/* Step 3: Create a level-one heading */}
//       <h1>Todo List</h1>
//       {/*<TodoList />*/}
//       <AddTodoForm onAddTodo={addTodo} /> {/* Pass addTodo as prop */}
//       <TodoList todoList={todoList} />
//       {/* <p>{newTodo}</p> */}
//       {/* Step 4: Create an unordered list and map over the todoList array */}
//       {/* <ul>
//           {TodoList.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul> */}
//     </>
//   );
// }

// 7.21 Add a removeTodo handler function and pass it as a prop to TodoList.

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("savedTodoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;
