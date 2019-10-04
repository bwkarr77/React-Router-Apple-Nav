import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, Switch, Link } from "react-router-dom";

//Components
import NavBar from "./NavBar";
import Mac from "./components/Mac";
import iPad from "./components/iPad";
import iPhone from "./components/iPhone";
// import Shopping from "./components/Shopping";
import Search from "./components/Search";
import TV from "./components/TV";
import Music from "./components/Music";
import Support from "./components/Support";
import Home from "./components/Home";
import Watch from "./components/Watch";

function App() {
  const [items, setItems] = useState([]);
  const navItems = [
    "Home",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Music",
    "Support",
    "Search",
    "Shopping"
  ];

  // function CreateNavBar() {
  //   return(
  //     <div>
  //       {navItems.map(item => (

  //       ))}
  //     </div>

  //     <Link to={`/components/${iPad}`} />
  //   );
  // };

  return (
    <div className="App">
      <NavBar content={navItems} />

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
      </header>
    </div>
  );
}

export default App;
