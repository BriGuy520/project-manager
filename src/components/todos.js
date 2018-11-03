import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="App">
        <h1>Todo List</h1>
        {todoItems}
      </div>
    );
  }
}



export default Todos;
