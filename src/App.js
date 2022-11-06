import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
import {useState} from 'react'

const App = () => {

  let [name, setName] = useState('Duy')     // name is string
  let [address, setAddress] = useState('')  // address is string
  let [todos, settodos] = useState([      // todo is a array of object
    {id: 1, title: "learn HTML", type: "number 1"}, 
    {id: 2, title: "learn CSS", type: "number 2"}, 
    {id: 3, title: "learn js and react", type: "number 3"}
  ])
  const handleEventClick = (event) => {
    if (!address){
      alert("No address")
      return
    }
    let newtodo = {
      id: Math.floor((Math.random()*1000) + 1), 
      title: address, 
      type: "number 4"
    }
    settodos([...todos, newtodo])
    setAddress('')
  }

  const handleOnchange = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos
    currentTodos = todos.filter(item => item.id !== id)
    settodos(currentTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: 'red' }}>This is react Project {name}</h1>
        <Todo
          todos = {todos}
          title = {"All title"}
          deleteDataTodo = {deleteDataTodo}
        />

        <Todo
          todos = {todos.filter(item => item.type === "number 1")}
          title = {"number 1's todos"}
          deleteDataTodo = {deleteDataTodo}

        />
        <input type="text" value ={address} onChange={(event) => handleOnchange(event)}/>
        <button type="button" onClick={(event) => handleEventClick(event)}>click me to refresh</button>
      </header>
    </div>
  );
}



export default App;
