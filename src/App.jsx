import "./App.css";


import React from 'react'; 6.9k (gzipped: 2.7k)


function App() {
  const element = <h1>My List</h1>;
  const elem = React.createElement("h2", null, "List");
  const el = (
    <div>
      <h3>App to Do</h3>
      <input type='text'/>
    </div>
  )
  const list = [
    {id: 1, title: 'do homework'},
    {id: 2, title: 'cook a cake'},
  ]


  return (
    <div>
      <ul>
        {list.map((id, title) => (<li key={id}>{title}</li>))}
      </ul>
    </div>
  )
}


export default App;

