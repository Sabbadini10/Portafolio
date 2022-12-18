import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg bg-light d-flex gap-10px">
    <div className="container-fluid"> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="navbar-brand" to='/home'>Home</Link>
        </li>
          <li className="nav-item">
                <Link className="nav-link" to='/about'>Sobre mi</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/skill'>Skill</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/proyecto'>Proyectos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contacto'>Contacto</Link>
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
    
  )
}

export default Navbar;
