import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Games from "./pages/Games";
import Home from "./pages/Home";
import School from "./pages/School";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/school" element={<School />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
