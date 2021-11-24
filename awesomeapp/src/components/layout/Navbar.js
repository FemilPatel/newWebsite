import React from 'react';
import {Link, NavLink} from 'react-router-dom';
//import {Label} from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
//import IconButton from '@material-ui/core/IconButton';
//import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">
          <AddCircleIcon>
            Add User
          </AddCircleIcon>
        </Link>
        &nbsp;
        <Link className="btn btn-success" to="/users/search">
          <SearchIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
