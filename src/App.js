// import logo from './logo.svg';
import './App.css';
import React  from 'react';

import List from './List';
import Details from './Details';

import {BrowserRouter as Router,
  Route,
  Routes,}
    from "react-router-dom";

function App() {
 return(
  <Router>
  <Routes>
    <Route path="/"element={<List/>}/>
      <Route path="/details/:handle" element={<Details/>}/>
</Routes>
</Router>
 );
}

export default App;
