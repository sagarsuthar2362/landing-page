import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 sticky top-0 left-0">
        <h1 className="text-2xl font-bold">TechStar</h1>

        <ul className="menu flex gap-14">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;