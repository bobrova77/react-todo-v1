import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../Pages/HomePage";
// import LoginPage from "../Pages/LoginPage";
import NotFoundPage from "../Pages/NotFoundPage";
import TodoContainer from "../TodoContainer/TodoContainer";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoContainer />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
