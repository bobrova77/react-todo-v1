import React from "react";

// Step 5: Create an empty array with todo items
const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Do the dishes" },
  { id: 3, title: "Take out the trash" },
];

function App() {
  return (
    <div>
      {/* Step 3: Create a level-one heading */}
      <h1>Todo List</h1>

      {/* Step 4: Create an unordered list and map over the todoList array */}
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
