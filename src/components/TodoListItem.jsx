// // 7.18 Add "Remove" Button to List Items - Add a button element, type "button", inside the list item with text "Remove"

// import React from "react";
// import PropTypes from "prop-types";
// import style from "./TodoListItem.module.css"; // Import the CSS module
// import InputWithLabel from "./InputWithLabel";

// // 7.19 Remove function TodoListItem({ todo }) {
// // function TodoListItem({ todo }) {
// // 7.20 Add a button element, type "button", inside the list item with text "Remove"
// const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodoTitle }) => {
//   return (
//     //Move list item JSX from TodoList.jsx to TodoListItem.jsx
//     <li className={style.ListItem}>
//       {todo.title}
//       <button
//         className={style.RemoveButton}
//         onClick={() => onRemoveTodo(todo.id)}
//       >
//         Remove
//       </button>
//     </li>
//   );
// };

// TodoListItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
//   onRemoveTodo: PropTypes.func.isRequired,
// };

// export default TodoListItem;

import React, { useState } from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

function TodoListItem({ todo, onRemoveTodo, onUpdateTodoTitle }) {
  const [isDone, setIsDone] = useState(() => {
    const storedIsDone = localStorage.getItem(`todo-${todo.id}`);
    return storedIsDone ? JSON.parse(storedIsDone) : false;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(() => {
    const storedEditedTitle = localStorage.getItem(`edited-title-${todo.id}`);
    return storedEditedTitle ? JSON.parse(storedEditedTitle) : todo.title;
  });

  const handleCheckboxChange = () => {
    const newIsDone = !isDone;
    setIsDone(newIsDone);
    localStorage.setItem(`todo-${todo.id}`, JSON.stringify(newIsDone));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    setIsEditing(false);

    try {
      await editTodo();

      setEditedTitle(editedTitle);
      localStorage.setItem(
        `edited-title-${todo.id}`,
        JSON.stringify(editedTitle)
      );
    } catch (error) {
      console.error("Error saving edited todo:", error);
    }
  };

  const editTodo = async () => {
    try {
      await onUpdateTodoTitle(todo.id, editedTitle);

      console.log("Todo item title updated successfully!");
    } catch (error) {
      console.error("Error updating todo item title:", error);
    }
  };

  return (
    <div className={`${style.todoItem} ${isDone ? style.doneItem : ""}`}>
      <p className={style.todoTitle}>
        <label idName="Checkbox" className={isDone ? style.done : ""}>
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleCheckboxChange}
          />
          <span className={style.checkboxText}>{isDone ? " Done " : " "}</span>
          {isEditing ? (
            <InputWithLabel
              label="Title"
              id="todoTitleInput"
              value={editedTitle}
              type="text"
              onChange={(e) => setEditedTitle(e.target.value)}
              name="title"
            />
          ) : (
            editedTitle
          )}
        </label>
      </p>
      <div className={style.buttons}>
        <button
          className={`removeButton ${style.removeButton}`}
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </button>
        {isEditing ? (
          <button className={style.saveButton} onClick={handleSaveEdit}>
            Save
          </button>
        ) : (
          <button className={style.editButton} onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodoTitle: PropTypes.func.isRequired,
};

export default TodoListItem;
