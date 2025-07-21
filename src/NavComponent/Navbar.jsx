import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.svg.svg'
import a from '../assets/a.png'

const Navbar = () => {
  const nav = {
    t1: [
      {
        iconClass: "bi bi-grid",
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        iconClass: "bi bi-card-checklist",
        title: "Test",
        path: "/",
      },
      {
        iconClass: "bi bi-book-half",
        title: "Class",
        path: "/class",
      },
      {
        iconClass: "bi bi-people-fill",
        title: "People",
        path: "/people",
      },
      {
        iconClass: "bi bi-person-fill",
        title: "Teacher",
        path: "/teacher",
      },
    ],
  };

  return (
    <div className="navbar-container">
      <div className="arrow-container">&gt;</div>

      <div className="image-nav">
        <img src={logo} className='logo' />
      </div>

      <div className="main-nav">
        {nav.t1.map((item, index) => (
          <span key={index}>
            <Link to={item.path}>
              <p>
                <i className={item.iconClass}></i> {item.title}
              </p>
            </Link>
          </span>
        ))}
      </div>

      <div className="nav-admin">
        <img src={a} alt="admin" className='logo-admin' />
        <div><p>Admin</p></div>
      </div>
      
    </div>
  );
};

export default Navbar;
