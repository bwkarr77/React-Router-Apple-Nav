import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch, Link } from "react-router-dom";

import Mac from "./components/Mac";
import iPad from "./components/iPad";
import iPhone from "./components/iPhone";
import Shopping from "./components/Shopping";
import Search from "./components/Search";
import TV from "./components/TV";
import Music from "./components/Music";
import Support from "./components/Support";
import Home from "./components/Home";
import Watch from "./components/Watch";

const NavBar = props => {
  console.log(props.content);
  const [navbaritems, setnavitems] = useState([]);

  return (
    <div>
      {/* Hard Coding the NavBar. AKA not DRY */}
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
          <NavLink to="/Shopping">Shopping</NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Mac"} component={Mac} />
        <Route exact path={"/iPad"} component={iPad} />
        <Route exact path={"/iPhone"} component={iPhone} />
        <Route exact path={"/Watch"} component={Watch} />
        <Route exact path={"/TV"} component={TV} />
        <Route exact path={"/Music"} component={Music} />
        <Route exact path={"/Support"} component={Support} />
        <Route exact path={"/Search"} component={Search} />
        <Route exact path={"/Shopping"} component={Shopping} />
      </Switch>

      {/* Working on DRY setup */}
      <div className="NavBar-banner-dry">
        {props.content.map(item => (
          <div className="NavBar-Items">
            <NavLink to={`/${item}`} key={item}>
              {item}
            </NavLink>
            {/*  */}
            <Switch>
              {
                (item = "Home" ? (
                  <Route exact path={"/"} component={item} />
                ) : (
                  <Route exact path={`/${item}`} component={item} />
                ))
              }
              {/* <Route path={item} component={item} /> */}
            </Switch>
            <h3>{navbaritems}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
