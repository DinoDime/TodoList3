import React, {useState, useEffect} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
