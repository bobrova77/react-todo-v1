import React from "react";

function TodoListItem({ todo }) {
  return (
    //Move list item JSX from TodoList.jsx to TodoListItem.jsx
    <li>{todo.title}</li>
  );
}
export default TodoListItem;
