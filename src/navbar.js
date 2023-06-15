import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/regulations_and_guidelines">Proj Anal</Link>
        </li>
        <li>
          <Link to="/connect">connect</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;