import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_URL } from './api/index.js';

function App() {
  const [hello, setHello] = useState('');

  useEffect(async () => {
      console.log('dkm');
        try {
          const result = await API_URL.get('/helloworld');
          console.log("🚀 ~ file: result", result);
          if (result.status === 200) {
            setHello(result.data.sayHi);
          }
        } catch (err) {
          console.log('err', err);
        }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{hello}</h1>
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
