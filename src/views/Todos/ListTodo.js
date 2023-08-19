import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Making video",
      },
      {
        id: "todo3",
        title: "Playing game",
      },
    ],
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodo;
    // currentListTodo.push(todo);
    this.setState({
      listTodo: [...this.state.listTodo, todo],
      //   listTodo: currentListTodo,
    });

    toast.success("Add todo success");
  };

  render() {
    let { listTodo } = this.state;
    // let listTodo = this.state.listTodo;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
