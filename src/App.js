import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import {useState} from 'react'

const App = () => {

  let [name, setName] = useState('Duy')     // name is string
  let [address, setAddress] = useState('')  // address is string
  let [course, setCourse] = useState([      // course is a array of object
    {id: 1, name: "learn HTML"}, 
    {id: 2, name: "learn CSS"}, 
    {id: 3, name: "learn js and react"}
  ])
  const handleEventClick = (event) => {
    let newCourse = {id: 4, name: address}
    setCourse([...course, newCourse])
    setAddress('')
  }

  const handleEventTextInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {course.map(course=> {
             return <li key={course.id}>{course.name}</li>
          })}
        </ul>
        <p style={{ color: 'red' }}>
          This is react Project {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" value ={address} onChange={(event) => handleEventTextInput(event)}/>
        <button type="button" onClick={(event) => handleEventClick(event)}>click me to refresh</button>
      </header>
    </div>
  );
}



export default App;
