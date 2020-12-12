import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const TodoInput = ({ onSubmitTodo }) => {
  const [todo, setTodo] = useState('');

  const inputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (todo.trim() !== '' && typeof onSubmitTodo === 'function') {
      onSubmitTodo(todo);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          name='todo'
          onChange={inputChangeHandler}
          value={todo}
          placeholder='Your todo'
          className={styles.input}
        />
        <button className={styles.button} type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

TodoInput.propType = {
  onSubmitTodo: PropTypes.func.isRequired,
};

export default TodoInput;
