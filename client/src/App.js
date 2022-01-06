import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { API_URL } from './api/index.js';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { HomesPages } from './pages/homes';
// import { MapsPages } from './pages/maps';
import { UploadFilesPages } from './pages/uploadFile';
import { AboutPages } from './pages/about';
import { TimeTablePages } from './pages/timeTable';
import { RegisterAdmin } from './pages/registerAdmin';

const Navbar = ({ username }) => {
 
  return (
    <div className="box-navbar">
      <div className="logo">
        <NavLink className="underline" to='/'>Logo</NavLink>
      </div>
      <div className="box-navbar-right">
        <ul className="ul_top_hypers">
          <li>
            <NavLink className="underline menu-top" to='/timetable'>Time Table</NavLink>
          </li>
          {/* <li>
            <NavLink className="underline menu-top" to='/maps'>Maps</NavLink>
          </li> */}
          <li>
            <NavLink className="underline menu-top" to={`/uploads`}>Upload</NavLink>
          </li>
          <li>
            <NavLink className="underline menu-top" to={`/registerAdmin`}>Đ.ký Admin</NavLink>
          </li>
          <li>
            <NavLink className="underline menu-top" to={`/about`}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="col-12 box-copyright">
      <p className="copyright">© Copyright | Thuộc sở hưu của nhóm Lạc Thủy B Confessions</p>
    </div>
  );
}

function App() {
  const [hello, setHello] = useState('');

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const result = await API_URL.get('/hello-world');
  //     console.log('result', result);
  //     if (result.status === 200) {
  //       setHello(result.data.sayHi);
  //     }
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // }

  return (
    <Router>
      <div className="box-container">
        <div className="container">
          <Navbar username={hello}/>
          <Switch>
              <Route exact path='/' component={HomesPages} />
              <Route exact path='/timetable' component={TimeTablePages} />
              {/* <Route path='/maps' component={MapsPages} /> */}
              <Route path='/uploads' component={UploadFilesPages} />
              <Route path='/registerAdmin' component={RegisterAdmin} />
              <Route path='/about' component={AboutPages} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
