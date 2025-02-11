import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

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
const TodoList = ({ todoList, onRemoveTodo, onUpdateTodoTitle }) => {
  return (
    <div className="TodoLlist">
      <ul>
        {todoList.map(function (todo) {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={onRemoveTodo}
              onUpdateTodoTitle={onUpdateTodoTitle}
            />
          );
        })}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodoTitle: PropTypes.func.isRequired,
};

export default TodoList;
