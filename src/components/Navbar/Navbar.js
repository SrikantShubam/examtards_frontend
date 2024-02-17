import React from 'react';
import mainlogo from '../../assets/images/favicon.ico';
import { Link } from 'react-router-dom';

import "./navbar.css";
function Navbar(props) {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light">
<Link to="/" className="navbar-brand ">
<div className="nav-custom">
<img src={mainlogo} alt='logo of examtards'/>
<div className="title">Exam Tards</div>
</div>

 
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
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
    {props.links.map((link, index) => (
      <li className="nav-item" key={index}>
        <a className="nav-link" href={link.url}>
         
          {link.text}
        </a>
      </li>
    ))}
  </ul>
</div>
</nav>
  )
}

export default Navbar;