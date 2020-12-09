import React, { useState, useEffect, useRef } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);
  const skipFirst = useRef(true);

  const addCounter = () => {
    setCounter((prevState) => prevState + 1);
  };
  const subCounter = () => {
    setCounter((prevState) => prevState - 1);
  };

  useEffect(() => {

    // jalan pertama kali ketika komponent di mount
    setTodoList(["apple", "banana"]);
    console.log("from effect set todo list");
  }, []);

  useEffect(() => {
    console.log("counter change");
    
    // skip render pertama
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }

    // jalan setiap 'counter' berubah nilainya
    setClick((prevClick) => prevClick + 1);
  }, [counter]);

  useEffect(() => {

    // jalan ketika komponen unmount
    return () => {
      console.log('from effect unmount')
    }
  }, [])



  console.log("from component");
  return (
    <div>
      <p>Steps: {click}</p>
      <p>Counter : {counter}</p>
      <button onClick={addCounter}>add</button>
      <button onClick={subCounter}>sub</button>

      <hr />
      {todoList.map((todo) => {
        return <p key={todo}>{todo}</p>;
      })}
    </div>
  );
}

export default TodoList;
