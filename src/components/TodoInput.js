import React, { useState } from "react";

function TodoInput() {
  const [todo, setTodo] = useState();
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      console.log(todo);
      setLoading(false);
    }, 3000);
  }
  
  if (loading) {
    return (
      <div>
        <text>lagi kirim data</text>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label id='todo' />
        <input name='todo' onChange={inputHandler} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default TodoInput;
