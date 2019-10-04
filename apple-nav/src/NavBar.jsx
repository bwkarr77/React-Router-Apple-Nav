import React, { useState } from "react";
import { Route, NavLink, Switch, Link } from "react-router-dom";

const NavBar = props => {
  console.log(props.content);
  const [navbaritems, setnavitems] = useState([]);
  return (
    // <div className="NavBar-banner">
    // <div className="NavBar">
    <div>
      <h1>NavBar</h1>
      {props.content.map(item => (
        // <div className="NavBar-banner">
        <div className="NavBar">
          <NavLink to={`/components/${item}`} key={item}>
            {item}
          </NavLink>
          {/*  */}
          <Switch>
            {/* {(item = "Home" ? <Route exact ={'/'} component={item} /> :<Route exact path={item} component={item} />)}  */}
            <Route path={item} component={item} />
          </Switch>
          <h3>{item}</h3>
        </div>
        // </div>
      ))}
      <p></p>
    </div>
  );
};

export default NavBar;
