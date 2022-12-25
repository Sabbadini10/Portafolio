import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='Navbar'>
      <nav className="navbar navbar-expand-lg bg-dark d-flex gap-10px">
    <div className="container-fluid"> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav d-flex gap-20px">
    <li className="nav-item ">
        <Link className="nav-link" to='/'>Home</Link>
        </li>
          <li className="nav-item" >
                <Link className="nav-link" to='/about'>Sobre mi</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to='/skill'>Skill</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to='/proyecto'>Proyectos</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to='/contacto'>Contacto</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Navbar;