import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <nav className="flex  justify-between items-center p-4 sticky top-0 left-0">
        <h1 className="text-2xl font-bold">TechStar</h1>

        <ul className="menu flex gap-14">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
