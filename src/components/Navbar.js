import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--header">GeekySid</div>
      <div className="navbar--link">
        <span className="navbar--link-text">
          <Link className="navbar--link-link" to="/login"> Login</Link>
            | Continue as
            <Link className="navbar--link-link" to='/'> Guest</Link>
          </span>
      </div>
      <div className="navbar--project-name">ToDo Application</div>
    </div>
  )
}

export default Navbar