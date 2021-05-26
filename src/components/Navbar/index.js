import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar has-background-danger has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ">
        <Link to="/">
          <h1 className="navbar-item has-text-white">Almodovar Movie List</h1>
        </Link>
      </div>
    </nav>
  );
}
