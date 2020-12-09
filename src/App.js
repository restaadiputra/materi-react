import {useState, useEffect} from 'react'
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoListClass from "./components/TodoListClass";

function App() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 2000);
  }, [])
  

  return (
    <>
      <TodoInput />
      {/* <TodoList /> */}
      {visible && <TodoListClass />}
    </>
  );
}

export default App;
