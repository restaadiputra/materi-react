import { useState, useEffect } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoListClass from "./components/TodoListClass";
import PokemonList from './components/PokemonList'

import Wrapper from "./components/Wrapper";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      {/* <TodoInput /> */}
      {/* {visible && <TodoList />} */}
      {/* {visible && <TodoListClass />} */}
      <PokemonList />
    </Wrapper>
  );
}

export default App;
