import React from "react";
import TodoListItem from "./TodoListItem";

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
        {todoList.map((todo) => (
          //<TodoListItem todo={todo} key={todo.id} />
          //The key prop is assigned to todo.id to ensure unique identification of each list item for React
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
