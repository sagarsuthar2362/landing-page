import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-4 sticky top-0 left-0">
        <h1 className="text-2xl font-bold">TechStar</h1>

        <ul className="menu md:flex hidden gap-14">
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

        {/* responsive design */}
        <IoIosMenu
          className="text-3xl cursor-pointer md:hidden block"
          onClick={() => setOpen(!open)}
        />


        {
          open && (
            <div className="md:hidden block absolute top-0 left-0 bg-blue-600 z-30">
              <ul className="flex flex-col gap-4">
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
            </div>
          )
        }
      </nav>
    </div>
  );
};

export default Header;
