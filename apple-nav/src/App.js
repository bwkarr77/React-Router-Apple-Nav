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
      <div className="NavBar-banner">
        <div className="NavBar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Mac">Mac</NavLink>
          <NavLink to="/iPad">iPad</NavLink>
          <NavLink to="/iPhone">iPhone</NavLink>
          <NavLink to="/Watch">Watch</NavLink>
          <NavLink to="/TV">TV</NavLink>
          <NavLink to="/Music">Music</NavLink>
          <NavLink to="/Support">Support</NavLink>
          <NavLink to="/Search">Search</NavLink>
          {/* <NavLink to="/Shopping">Shopping</NavLink> */}
        </div>
      </div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"Mac"} component={Mac} />
        <Route exact path={"/iPad"} component={iPad} />
        <Route exact path={"/iPhone"} component={iPhone} />
        <Route exact path={"/Watch"} component={Watch} />
        <Route exact path={"/TV"} component={TV} />
        <Route exact path={"/Music"} component={Music} />
        <Route exact path={"/Support"} component={Support} />
        <Route exact path={"/Search"} component={Search} />
        {/* <Route exact path={"/Shopping"} component={Shopping} /> */}
      </Switch>
      <br />
      <br />
      {/* <div className="NavBar">
        <h3>morestuff</h3>
        {navItems.map(item => (
          <CreateNavBar 
))}
      </div> */}
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
