import React from "react";
import { Link, Outlet } from "react-router-dom";
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
          <Link to="/education" children="Education" />
        </li>
        <li>
          <Link to="/contact" children="Contact" />
        </li>
      </ul>
    </nav>
  );
}
