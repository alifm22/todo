import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { AddTodo } from "./components/addTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/todoList/TodoList";
import About from "./components/about/About";

function App() {
  const dispatch = useDispatch();
  const store = useSelector(state => state.todoList);
  return (
    <Router>
      <div className="container p-0">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <TodoList dispatch={dispatch} state={store} />
              <AddTodo dispatch={dispatch} />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    </Router>

    // <React.Fragment>
    //   <div className="container p-0">
    //     <Header />

    //   </div>
    //   <script src="jquery/dist/jquery.min.js"></script>
    //   <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    // </React.Fragment>
  );
}

export default App;
