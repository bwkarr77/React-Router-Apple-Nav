import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, Switch, Link } from "react-router-dom";

//Components
import NavBar from "./NavBar";

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

  return (
    <div className="App">
      <NavBar content={navItems} />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
