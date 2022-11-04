import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';


const App = () => {
  // Khai báo biến
  let obj = {
    name: "Duy", 
    year: "2022",
  }

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* sử dụng biến */}
          {/* Không Lỗi */}
          hello {obj.name} in {obj.year}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
