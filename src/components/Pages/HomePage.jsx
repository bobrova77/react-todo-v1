// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate(); // Получаем функцию для навигации

//   //   const handleGoToLogin = () => {
//   //     navigate("/login"); // Перенаправляем на страницу логина с помощью useNavigate
//   //   };

//   return (
//     <div className="App-content">
//       <h1 className="App-heading">To-Do List:</h1>
//       <button
//         className={`ToggleButton ${style.toggleButton}`}
//         onClick={toggleSortOrder}
//       >
//         Toggle Sort : &nbsp; &nbsp;
//         {sortAscending ? " Ascending ⬆️" : " Descending ⬇️ "}
//       </button>
//       {/* Первый вариант перенаправления — использование Link для навигации через маршрут */}
//       <Link to="/login">Go to Login</Link>

//       {/* Второй вариант перенаправления — использование кнопки с обработчиком события */}
//       {/* <button onClick={handleGoToLogin}>Go to Login</button> */}
//       {/* Кнопка с событием onClick, которая срабатывает
//        и вызывает функцию для программного перенаправления */}
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/imgHomePage.png";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <h1> To Do List</h1>
      <img src={img} alt="Todo list image" />

      <Link to="/todos">
        <button>Let's do this</button>
      </Link>
    </div>
  );
};

export default HomePage;
