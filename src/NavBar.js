import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import TestPage0 from './TestPage0';
import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';
import TestPage3 from './TestPage3';
import TestPage4 from './TestPage4';
import TestPage5 from './TestPage5';
import './NavBar.css'

export default function NavBarComp() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/TestPage0">My Kitchen</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage1">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage2">My Cookbook</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage3">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage4">Achievements</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage5"><i class="fa-solid fa-circle-user fa-2xl"></i></NavLink>
        </li>
      </ul>
    </div>
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/TestPage0" element={<TestPage0 />}/>
          <Route path="/TestPage1" element={<TestPage1 />}/>
          <Route path="/TestPage2" element={<TestPage2 />}/>
          <Route path="/TestPage3" element={<TestPage3 />}/>
          <Route path="/TestPage4" element={<TestPage4 />}/>
          <Route path="/TestPage5" element={<TestPage5 />}/>
        </Routes>
    </div>
    </Router>
  )
}
