import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  //setCurrentTime'ı json data isteği ile time nesnesi ile(data.time) güncelleyerek, res.json ile payload'ı JavaScript objesine dönüştürme
  //Converting payload to JavaScript object with res.json by updating setCurrentTime with json data request with time object(data.time)
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

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
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
