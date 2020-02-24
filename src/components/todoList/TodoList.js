import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Todo from "../todo/Todo";

export class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <Tabs
          defaultActiveKey="allTasks"
          className="nav-justified mt-3 mb-2"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="allTasks" title="All Tasks">
            <div className="funkyradio">
              {this.props.state.map(item => (
                <Todo
                  key={item.id}
                  item={item}
                  dispatch={this.props.dispatch}
                  isChecked={item.completed}
                ></Todo>
              ))}
            </div>
          </Tab>
          <Tab eventKey="progress" title="In Progress">
            <div className="funkyradio">
              {this.props.state.map(item =>
                item.completed ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <Todo
                    key={item.id}
                    item={item}
                    dispatch={this.props.dispatch}
                    isChecked={item.completed}
                  ></Todo>
                )
              )}
            </div>
          </Tab>
          <Tab eventKey="completed" title="Completed">
            <div className="funkyradio">
              {this.props.state.map(item =>
                !item.completed ? (
                  <React.Fragment></React.Fragment>
                ) : (
                  <Todo
                    key={item.id}
                    item={item}
                    dispatch={this.props.dispatch}
                    isChecked={item.completed}
                  ></Todo>
                )
              )}
            </div>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default TodoList;
