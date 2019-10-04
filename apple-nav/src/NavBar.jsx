import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch, Link } from "react-router-dom";

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

const NavBar = props => {
  console.log(props.content);
  const [navbaritems, setnavitems] = useState([]);

  const funkyFunc = props => {
    // useEffect(() => {
    console.log(props);
    setnavitems(props);
    return 5;
    // });
  };

  return (
    <div>
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
      <div>
        <h1>NavBar</h1>

        {props.content.map(item => (
          // <div className="NavBar-banner">

          <div className="NavBar">
            {funkyFunc(item)};
            <NavLink to={`/components/${item}`} key={item}>
              {item}
            </NavLink>
            {/*  */}
            <Switch>
              {/* {(item = "Home" ? <Route exact ={'/'} component={item} /> :<Route exact path={item} component={item} />)}  */}
              <Route path={item} component={item} />
            </Switch>
            <h3>{navbaritems}</h3>
          </div>
          // </div>
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default NavBar;
