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
    editTodo: {},
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

  handleDeleteTodo = (todo) => {
    let currentListTodo = this.state.listTodo;
    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentListTodo,
    });
    toast.success("Delete todo success");
  };

  handleEditTodo = (todo) => {
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let currentListTodo = this.state.listTodo;
      currentListTodo = currentListTodo.map((item) => {
        if (item.id === todo.id) {
          item.title = editTodo.title;
        }
        return item;
      });
      this.setState({
        listTodo: currentListTodo,
        editTodo: {},
      });
      toast.success("Edit todo success");
      return;
    }

    // edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    // let listTodo = this.state.listTodo;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Todo App By Nguyễn Đình Trưng </p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              onChange={(e) => this.handleOnChangeEdit(e)}
                              value={editTodo.title}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
