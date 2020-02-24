import React, { Component } from "react";
import toggleComplete from "../../redux/actions/toggleComplete";
import delTodo from "../../redux/actions/delTodo";
export class Todo extends Component {
  getMarkCompletedStyle = () => {
    return {
      textDecoration: this.props.item.completed ? "line-through" : "none"
    };
  };

  markComplete = id => {
    this.props.dispatch(toggleComplete(id));
  };

  deleteHandler = id => {
    this.props.dispatch(delTodo(id));
  };

  render() {
    return (
      <div className="funkyradio-success mr-2 ml-2 row">
        <input
          type="checkbox"
          name="checkbox"
          id={this.props.item.id}
          onClick={this.markComplete.bind(this, this.props.item.id)}
          defaultChecked={this.props.item.completed}
        />
        <label
          style={this.getMarkCompletedStyle()}
          className="mt-1 mb-1 col-11"
          htmlFor={this.props.item.id}
        >
          {this.props.item.text}
        </label>
        {/* <button className="m-auto float-right editBtn col-1"><svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z" clipRule="evenodd"></path>
                                                        <path fillRule="evenodd" d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z" clipRule="evenodd"></path>
                                                        </svg></button> */}
        <button
          className="m-auto float-right trashBtn col-1"
          onClick={this.deleteHandler.bind(this, this.props.item.id)}
        >
          <svg
            className="bi bi-trash"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"></path>
            <path
              fillRule="evenodd"
              d="M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}

export default Todo;
