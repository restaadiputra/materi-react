import { useState, useEffect } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoListClass from "./components/TodoListClass";
import PokemonList from "./components/PokemonList";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <>
      <PokemonList />
      {/* <TodoInput /> */}
      {/* {visible && <TodoList />} */}
      {/* {visible && <TodoListClass />} */}
    </>
  );
}

export default App;
