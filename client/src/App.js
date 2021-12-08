import React, { useEffect, useState } from 'react';
import './App.css';
import { API_URL } from './api/index.js';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { HomesPages } from './pages/homes';
import { MapsPages } from './pages/maps';
import { UploadFilesPages } from './pages/uploadFile';
import { AboutPages } from './pages/about';

const Navbar = ({ username }) => (
  <div className="box-navbar">
    <div className="logo">
      <NavLink to='/'>Logo</NavLink>
    </div>
    <div className="box-navbar-right">
      <ul className="ul_top_hypers">
        {/* <li>
          <NavLink to='/'>Home</NavLink>
        </li> */}
        <li>
          <NavLink to='/maps'>Maps</NavLink>
        </li>
        <li>
          <NavLink to={`/uploads`}>Upload</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
      </ul>
    </div>
  </div>
)

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await API_URL.get('/hello-world');
      console.log('result', result);
      if (result.status === 200) {
        setHello(result.data.sayHi);
      }
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <Router>
      <div className="container">
        <Navbar username={hello}/>
        <Switch>
            <Route exact path='/' component={HomesPages} />
            <Route path='/maps' component={MapsPages} />
            <Route path='/uploads' component={UploadFilesPages} />
            <Route path='/about' component={AboutPages} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
