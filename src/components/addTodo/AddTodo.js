import React, { Component } from "react";
import addTodo from "../../redux/actions/addTodo";
import uuidv4 from "uuid";
import dbServices from "../../database/dbServices";
export class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.dispatch(addTodo(uuidv4(), this.state.title));
      //   dbServices.addToDB({
      //     id: uuidv4(),
      //     title: this.state.title,
      //     completed: false
      //   });
    }

    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={inputFormStyle}>
        <div className="form-row">
          <div className="col-9 pr-0">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Add Todo ..."
              value={this.state.title}
              onChange={this.onChange}
              style={textInputStyle}
            />
          </div>
          <div className="col-3 pl-0">
            <button
              type="submit"
              className="btn w-100"
              onClick={this.onSubmit}
              style={submitBtnStyle}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const textInputStyle = {
  borderRadius: "0.25rem 0 0 0.25rem"
};
const submitBtnStyle = {
  borderRadius: "0 0.25rem 0.25rem 0",
  backgroundColor: "#063d4c",
  borderColor: "#ced4da",
  color: "white"
};
const inputFormStyle = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  margin: "auto",
  padding: "0.5rem"
};
export default AddTodo;
