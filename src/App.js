import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import CountDown from "./views/Countdown";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  PrivateRoute,
} from "react-router-dom";

const App = () => {
  let [address, setAddress] = useState(""); // address is string
  let [todos, settodos] = useState([
    // todo is a array of object
    { id: 1, title: "learn HTML", type: "number 1" },
    { id: 2, title: "learn CSS", type: "number 2" },
    { id: 3, title: "learn js and react", type: "number 3" },
  ]);
  const handleEventClick = (event) => {
    if (!address) {
      alert("No address");
      return;
    }
    let newtodo = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: address,
      type: "number 4",
    };

    settodos([...todos, newtodo]);
    setAddress("");
  };

  const handleOnchange = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    settodos(currentTodos);
  };
  const onTimesUp = () => {
    alert("Time Up");
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Router path="/" exact>
            <Covid />
          </Router>
          <Router path="/timer">
            <CountDown onTimesUp={onTimesUp} />
          </Router>
          <Router path="/todo">
            <Todo
              todos={todos}
              title={"All title"}
              deleteDataTodo={deleteDataTodo}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleOnchange(event)}
            />
            <button type="button" onClick={(event) => handleEventClick(event)}>
              click me to refresh
            </button>
          </Router>
          <Router path="/blog" exact>
            <Blog />
          </Router>
          <Router path="/blog/:id" exact>
            <DetailBlog />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
