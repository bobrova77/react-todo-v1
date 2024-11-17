import React from "react";

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Do the dishes" },
  { id: 3, title: "Take out the trash" },
];

// Declare a function named TodoList
function TodoList() {
  return (
    <div>
      {/* <ul>
        <li>Complete assignment</li>
        <li>Do the dishes</li>
        <li>Take out the trash</li>
      </ul> */}
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
