import React from 'react';
import './App.scss';
import Home from './view/home';
import Destination from './view/destination';
import Crew from './view/crew';
import Technology from './view/technology';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const images = ['images', 'i', 'b', 'c']
class App extends React.Component {

  render() {
    return <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Destination />} path="/destination" />
          <Route element={<Crew />} path="/crew" />
          <Route element={<Technology />} path="/technology" />
        </Routes>
      </BrowserRouter>

    </>
      ;
  }
}

export default App;
