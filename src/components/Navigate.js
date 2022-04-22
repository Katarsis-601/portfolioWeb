import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" children="Home" />
        </li>
        <li>
          <Link to="/repositories" children="Repositories" />
        </li>
        <li>
          <Link to="/skills" children="Skills" />
        </li>
      </ul>
    </nav>
  );
}
