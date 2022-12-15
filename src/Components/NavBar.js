import React from 'react';
import './Navi.css';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];
  return (
    <>
      <nav className="navigation">
        <div className="nav-items">
          <h2>BookStore CMS</h2>
          <ul className="navUL">
            {links.map((link) => (
              <li
                key={link.id}
                className="nav-item"
                aria-hidden="true"
              >
                <NavLink to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="icon-btn">
          <BsFillPersonFill />
        </button>
      </nav>
    </>
  );
};
export default Navbar;
