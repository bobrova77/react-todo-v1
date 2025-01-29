// 7.18 Add "Remove" Button to List Items - Add a button element, type "button", inside the list item with text "Remove"

import React from "react";
import style from "./TodoListItem.module.css"; // Import the CSS module

// 7.19 Remove function TodoListItem({ todo }) {
// function TodoListItem({ todo }) {
// 7.20 Add a button element, type "button", inside the list item with text "Remove"
const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    //Move list item JSX from TodoList.jsx to TodoListItem.jsx
    <li className={style.ListItem}>
      {todo.title}
      <button
        className={style.RemoveButton}
        onClick={() => onRemoveTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};
export default TodoListItem;
