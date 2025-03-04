import { useEffect, useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import FilterList from "../Filter/Filter";
import Search from "../Search/Search";
import Sorting from "../Sorting/Sorting";
import Spinner from "../Spinner/Spinner";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoContainer.module.css";
import React from "react";

console.log("API TOKEN:", import.meta.env.VITE_AIRTABLE_API_TOKEN);
console.log("BASE ID:", import.meta.env.VITE_AIRTABLE_BASE_ID);
console.log("TABLE NAME:", import.meta.env.VITE_TABLE_NAME);

const request = async (method, url, body = null) => {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  };
  console.log("Authorization Header:", options.headers.Authorization);

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error occurred: ${response.status} - ${errorData.error.message}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Request failed:", error.message);
    return null;
  }
};

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const _apiBase = `https://api.airtable.com/v0/${
    import.meta.env.VITE_AIRTABLE_BASE_ID
  }/${import.meta.env.VITE_TABLE_NAME}`;

  // const _apiBase =
  //   "/airtable/" +
  //   import.meta.env.VITE_AIRTABLE_BASE_ID +
  //   "/" +
  //   import.meta.env.VITE_TABLE_NAME;

  console.log("API URL:", _apiBase);

  useEffect(() => {
    getTodos();
  }, [_apiBase]);

  const getTodos = async () => {
    setIsLoading(true);
    const data = await request("GET", _apiBase);
    console.log("API Response:", data);

    if (data && data.records) {
      const todos = data.records
        .map((todo) => ({
          id: todo.id,
          title: todo.fields.title,
          completed: todo.fields.completed || false,
          date: todo.createdTime,
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
      setTodoList(todos);
    }
    setIsLoading(false);
  };

  const addTodo = async (todoTitle) => {
    const addedTodo = { fields: { title: todoTitle, completed: false } };
    const data = await request("POST", _apiBase, addedTodo);
    if (data) {
      const newTodo = {
        id: data.id,
        title: data.fields.title,
        completed: false,
        date: new Date(data.createdTime).toISOString(),
      };
      setTodoList((prev) =>
        [...prev, newTodo].sort((a, b) => a.title.localeCompare(b.title))
      );
    }
  };

  const removeTodo = async (id) => {
    const data = await request("DELETE", `${_apiBase}/${id}`);
    if (data) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = async (id, newTitle) => {
    const editedTodo = { fields: { title: newTitle } };
    const data = await request("PATCH", `${_apiBase}/${id}`, editedTodo);
    if (data && data.fields) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, title: data.fields.title } : todo
        )
      );
    }
  };

  const changeTodoStatus = async (id, value) => {
    const todoStatus = { fields: { completed: value } };
    const data = await request("PATCH", `${_apiBase}/${id}`, todoStatus);
    if (data && data.fields) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, completed: data.fields.completed } : todo
        )
      );
    }
  };

  const sortTodos = (value) => {
    setTodoList((prevTodoList) =>
      [...prevTodoList].sort((a, b) => {
        switch (value) {
          case "titleDesc":
            return b.title.localeCompare(a.title);
          case "dateAsc":
            return new Date(a.date) - new Date(b.date);
          case "dateDesc":
            return new Date(b.date) - new Date(a.date);
          default:
            return a.title.localeCompare(b.title);
        }
      })
    );
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const searchedTodos = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const completedTodos = todoList.filter((todo) => todo.completed);

  return (
    <div className={styles.todoWrapper}>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <AddTodoForm onAddTodo={addTodo} />
      <div className={styles.sortFilterWrapper}>
        <Sorting onSort={sortTodos} />
        <FilterList setFilter={setFilter} filter={filter} />
      </div>
      {isLoading ? (
        <Spinner />
      ) : searchedTodos.length > 0 ? (
        <TodoList
          todoList={searchedTodos}
          onRemoveTodo={removeTodo}
          onEditTodo={editTodo}
          onChangeStatus={changeTodoStatus}
          filter={filter}
        />
      ) : (
        <h3>No available tasks. Start by adding one!</h3>
      )}
    </div>
  );
};

export default TodoContainer;
