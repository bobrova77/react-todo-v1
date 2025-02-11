// import React, { useState, useEffect } from "react"; // Import useState from React
// import React from "react";
import React, { useState, useEffect } from "react";
// 10.1 Setup Router
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./global.css"; // Import global styles
import AddTodoForm from "./components/AddTodoForm"; // Import the new component
import TodoList from "./components/TodoList"; // Import the new component

// // 6.8 Custom Hook
// function useSemiPersistentState(key, initialState) {
//   // 6.9 Read initial state from localStorage
//   const [state, setState] = React.useState(() => {
//     const savedValue = localStorage.getItem(key);
//     return savedValue ? JSON.parse(savedValue) : initialState;
//   });

//   // 6.10 Persist state in localStorage whenever it changes
//   React.useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// }

// // import TodoList from "./TodoList";

// // Step 5: Create an empty array with todo items
// // const todoList = [
// //   { id: 1, title: "Complete assignment" },
// //   { id: 2, title: "Do the dishes" },
// //   { id: 3, title: "Take out the trash" },
// // ];

// export default function App() {
//   // 6.11 Use the custom hook for todoList state
//   const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);
//   // const [newTodo, setNewTodo] = useState("");

//   // State for Todo List
//   // 6.2
//   // 6.12 Delete
//   // const [todoList, setTodoList] = useState(() => {
//   //   const savedTodos = localStorage.getItem("savedTodoList");
//   // // 6.4 Default State with Fallback:
//   // try {
//   //   return savedTodos ? JSON.parse(savedTodos) : [];
//   // } catch (error) {
//   //   console.error("Error parsing saved todo list from localStorage:", error);
//   //   return [];
//   // }
//   // 6.6 Parse the JSON string back to an array
//   // 6.15 Delete
//   // return savedTodos ? JSON.parse(savedTodos) : [];

//   // 6.14 Function to add a new todo
//   const addTodo = (newTodo) => {
//     setTodoList((prevTodos) => [...prevTodos, newTodo]);
//   };

//   // Step 6.1: Add useEffect
//   // Save the todoList to localStorage whenever it changes
//   // 6.15 DElete
//   // useEffect(() => {
//   // Save the todoList to localStorage
//   // 6.3 Convert the todoList into a string before saving
//   // 6.5 The useEffect hook ensures the state is saved to localStorage whenever todoList changes
//   // localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   // }, [todoList]); // Step 6.2: Add todoList as a dependency

//   // Function to add a new todo
//   // 6.13 Cut
//   // const addTodo = (newTodo) => {
//   //   // setTodoList((prevTodos) => [newTodo, ...prevTodos]); // Add new todo to list furst
//   //   // 6.7 Add the new todo
//   //   setTodoList((prevTodos) => [...prevTodos, newTodo]);

//   return (
//     <>
//       {/* Step 3: Create a level-one heading */}
//       <h1>Todo List</h1>
//       {/*<TodoList />*/}
//       <AddTodoForm onAddTodo={addTodo} /> {/* Pass addTodo as prop */}
//       <TodoList todoList={todoList} />
//       {/* <p>{newTodo}</p> */}
//       {/* Step 4: Create an unordered list and map over the todoList array */}
//       {/* <ul>
//           {TodoList.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul> */}
//     </>
//   );
// }

// 7.21 Add a removeTodo handler function and pass it as a prop to TodoList.

// const App = () => {
//   const [todoList, setTodoList] = useState(() => {
//     const savedTodos = localStorage.getItem("savedTodoList");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   const addTodo = (newTodo) => {
//     setTodoList((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const removeTodo = (id) => {
//     const updatedList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(updatedList);
//   };

//   return (
//     <>
//       <h1>Todo List</h1>
//       <AddTodoForm onAddTodo={addTodo} />
//       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//     </>
//   );
// };

// export default App;

// 8.1 Remove Custom Hook

export default function App() {
  // 8.2 Remove
  // // Use useState directly for managing todoList
  // const [todoList, setTodoList] = useState(() => {
  //   // Retrieve and parse the saved todo list from localStorage
  //   const savedTodoList = localStorage.getItem("savedTodoList");
  //   return savedTodoList ? JSON.parse(savedTodoList) : [];
  // });
  // 8.3 Set initial todoList state to an empty Array
  const [todoList, setTodoList] = useState([]);
  // 8.15 Added isLoading State
  // // 8.6 State for Todo List and Loading
  // const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // 8.4 Remove
  // // Use useEffect to save the todoList to localStorage on changes
  // useEffect(() => {
  //   localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  // }, [todoList]);

  // Fetch Data from Airtable

  // console.log("Base ID:", import.meta.env.VITE_AIRTABLE_BASE_ID);
  // console.log("Table Name:", import.meta.env.VITE_TABLE_NAME);
  // console.log("API Token:", import.meta.env.VITE_AIRTABLE_API_TOKEN);
  // console.log(import.meta.env);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      };

      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${encodeURIComponent(import.meta.env.VITE_TABLE_NAME)}`;

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        const todos = data.records.map((record) => ({
          title: record.fields.title,
          id: record.id,
        }));

        // console.log('Mapped Todos:', todos);

        setTodoList(todos);
        // setIsLoading(false);
      } catch (error) {
        console.error(`Fetch error: ${error.message}`);
        // console.error("Loading error:", error);
        // setError(error.message);
        // console.error("Loading error:", err);
        // } finally {
        setIsLoading(false);
      }
    };

    // useEffect(() => {
    fetchData();
  }, []);

  // // 8.5 Simulate async data fetching
  // useEffect(() => {
  //   // 8.7 change without reject
  //   // const fetchData = new Promise((resolve, reject) => {
  //   const fetchData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       // Simulate initial todo list data
  //       resolve({
  //         data: {
  //           todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [], // Getting todoList from localStorage or an empty array
  //         },
  //       });
  //     }, 2000); // 2-second delay to mimic async fetch
  //   });

  //   // 8.12 change response to result
  //   // fetchData.then((response) => {
  //   fetchData.then((result) => {
  //     // Set fetched todo list data
  //     // setTodoList(response.data.todoList);
  //     setTodoList(result.data.todoList); // Set fetched todoList data
  //     // setLoading(false); // 8.8 Set loading to false
  //     setIsLoading(false); // 8.16 Turn off loading state
  //   });
  // }, []);

  // // 8.9 Save to localStorage when todoList updates, but only if not loading
  // useEffect(() => {
  //   // 8.14 Added isLoading State
  //   // if (!loading) {
  //   if (!isLoading) {
  //     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  //   }
  //   // }, [todoList, loading]);
  // }, [todoList, isLoading]);

  // // Function to add a new todo
  // const addTodo = (newTodo) => {
  //   setTodoList((prevTodos) => [...prevTodos, newTodo]);
  // };

  // // Function to remove a todo
  // const removeTodo = (id) => {
  //   setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  // };

  // // 8.10 Change to 8.11
  // // return (
  // //   <>
  // //     <h1>Todo List</h1>
  // //     <AddTodoForm onAddTodo={addTodo} />
  // //     <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
  // //   </>
  // // );
  // // 8.11 New version
  // // 8.13 Change {/* {loading ? ( */} to isLoading */}. Added isLoading State
  //   return (
  //   <>
  //       <h1>Todo List</h1>
  //       {isLoading ? (
  //         <p>Loading...</p>
  //       ) : (
  //         <>
  //         <AddTodoForm onAddTodo={addTodo} />
  //           <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
  //         </>
  //       )}
  //     </>
  //   );
  // }

  // return (
  //   <div>
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       <ul>
  //         {todoList.map((todo) => (
  //           <li key={todo.id}>{todo.title}</li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );

  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // 10.2 Setup Router
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">New Todo</Link>
      </nav>
      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={
            <div>
              <h1>Todo List</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {/* <AddTodoForm
                    onAddTodo={(newTodo) => setTodoList([...todoList, newTodo])} */}
                  <AddTodoForm onAddTodo={handleAddTodo} />
                  {/* <TodoList todoList={todoList} /> */}
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={handleRemoveTodo}
                  />
                </>
              )}
            </div>
          }
        />
        {/* New Route */}
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
