import React, { useState } from "react";

// // Lesson 3
// function AddTodoForm(props) {
//   const handleAddTodo = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     const todoTitle = event.target.title.value; // Get value of the "title" input
//     //props.onAddTodo(todoTitle); // Pass the title to the parent component
//     console.log(todoTitle);
//     event.target.reset(); // Clear the form input
//   };

//   return (
//     <form onSubmit={handleAddTodo}>
//       <label htmlFor="todoTitle">Title</label>
//       <input type="text" id="todoTitle" name="title" />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default AddTodoForm;

// Lesson 4
export default function AddTodoForm({ onAddTodo }) {
  // State for controlled input
  const [todoTitle, setTodoTitle] = useState("");

  // Function to handle input changes
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value; // сначала извлеките входное значение из eventобъекта и сохраните его в переменной с именемnewTodoTitle
    setTodoTitle(newTodoTitle); // Затем вызовите установщик состояния setTodoTitleи передайтеnewTodoTitle
  };

  // Function to handle form submission
  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevent default from submit behavior
    // onAddTodo(todoTitle); // Pass the current title state to the present component
    // setTodoTitle(""); // Clear the input after submission

    // Create a new todo object
    const newTodo = {
      title: todoTitle,
      id: Date.now(), // Unique ID
    };

    onAddTodo(newTodo); // Pass the new todo object to parent
    setTodoTitle(""); // Clear the input field
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        placeholder="Enter Todo"
        value={todoTitle} // Controlled input
        onChange={handleTitleChange} // Update state on change
      />
      <button type="submit">Add</button>
    </form>
  );
}
