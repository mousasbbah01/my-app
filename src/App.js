import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {
    return <>
    <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
    </div>

    <Router>
        <Routes>
          <Route path="/about" element = {<p>s</p>}>
          </Route>
          <Route path="/users" element = {<p>a</p>}>
          </Route>
          <Route path="/" element = {<p>a</p>}>
          </Route>
        </Routes>
    </Router>
    </>
    ;
  }
}

export default App;
