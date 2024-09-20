import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState} from "react";

function App() {
  const [url, setUrl] = useState("");
  const handle =() => {
    axios.get("http://localhost:5000/home")
      .then((res) => {
        setUrl(res.data.url); 
        console.log(res.data);// Assuming the response contains a field `url`
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href={url}>Dev</a> 
        <button onClick={handle}>SET</button>
      </header>
      <main>
      </main>
    </div>
  );
}
export default App;




