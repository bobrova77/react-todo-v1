import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

// const todoList = [
//   { id: 1, title: "Complete assignment" },
//   { id: 2, title: "Do the dishes" },
//   { id: 3, title: "Take out the trash" },
// ];

// // Declare a function named TodoList
// function TodoList() {
//   return (
//     <div>
//       {/* <ul>
//         <li>Complete assignment</li>
//         <li>Do the dishes</li>
//         <li>Take out the trash</li>
//       </ul> */}
//       <ul>
//         {todoList.map((todo) => (
//           //<TodoListItem todo={todo} key={todo.id} />
//           //The key prop is assigned to todo.id to ensure unique identification of each list item for React
//           <TodoListItem key={todo.id} todo={todo} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoList;

// 7.22 Remove
// onst TodoList = ({ todoList }) => {
// 7.23 Pass onRemoveTodo to the TodoListItem component
const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {/* <TodoListItem key={todo.id} todo={todo} /> */}
      {/* 7.24 */}
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
