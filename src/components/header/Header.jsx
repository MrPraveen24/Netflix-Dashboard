import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'
import {GrSearch} from "react-icons/gr";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recently">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <GrSearch />
    </nav>
  )
}

export default Header;