import React, { Component } from "react";

class TodoListClass extends Component {
  state = {
    todoList: [],
    counter: 0,
    click: 0,
  };

  componentDidMount() {
    console.log("from componentDidMount");

    this.setState({ todoList: ["apple", "banana"] });
  }

  componentDidUpdate() {
    console.log("from componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("from componentWillUnmount");
  }

  addCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1, click: prevState.click + 1 };
    });
  };

  subCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter - 1, click: prevState.click + 1 };
    });
  };

  render() {
    console.log("from render");

    const { counter, click, todoList } = this.state;

    return (
      <div>
        <p>Steps: {click}</p>
        <p>Counter : {counter}</p>
        <button onClick={this.addCounter}>add</button>
        <button onClick={this.subCounter}>sub</button>

        <hr />
        {todoList.map((todo) => {
          return <p key={todo}>{todo}</p>;
        })}
      </div>
    );
  }
}

export default TodoListClass;
