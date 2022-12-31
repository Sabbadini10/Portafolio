import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className='Navbar'>
      <nav className="navbar bg-dark ">
    <ul className="navbar-nav d-flex gap-2 flex-row">
    <li className="nav-item d-flex flex-row align-items-center">
      <span className='Navbar-span-icono'><i class="fa-solid fa-house"></i></span>
        <Link className="nav-link" to='/'>Home</Link>
        </li>
          <li className="nav-item d-flex flex-row align-items-center" >
            <span className='Navbar-span-icono'><i class="fa-solid fa-user"></i></span>
                <Link className="nav-link" to='/cursos'>Cursos</Link>
          </li>
          <li className="nav-item d-flex flex-row align-items-center" >
          <span className='Navbar-span-icono'><i class="fa-solid fa-brain"></i></span>
            <Link className="nav-link"  to='/skill'>Skill</Link>
          </li>
          <li className="nav-item d-flex flex-row align-items-center" >
            <span className='Navbar-span-icono'><i class="fa-sharp fa-solid fa-diagram-project"></i></span>
            <Link className="nav-link"  to='/proyecto'>Proyectos</Link>
          </li>
        </ul>
  </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Navbar;