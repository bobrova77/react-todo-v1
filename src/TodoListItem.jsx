// 7.18 Add "Remove" Button to List Items - Add a button element, type "button", inside the list item with text "Remove"

import React from "react";

// 7.19 Remove function TodoListItem({ todo }) {
// function TodoListItem({ todo }) {
// 7.20 Add a button element, type "button", inside the list item with text "Remove"
const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    //Move list item JSX from TodoList.jsx to TodoListItem.jsx
    <li>
      {todo.title}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
};
export default TodoListItem;
