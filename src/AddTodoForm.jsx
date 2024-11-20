import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const todoTitle = event.target.title.value; // Get value of the "title" input
    props.onAddTodo(todoTitle); // Pass the title to the parent component
    event.target.reset(); // Clear the form input
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
