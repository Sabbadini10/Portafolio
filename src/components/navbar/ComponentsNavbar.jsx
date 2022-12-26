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
          <li className="nav-item d-flex flex-row align-items-center" >
            <span className='Navbar-span-icono'><i class="fa-solid fa-phone"></i></span>
            <Link className="nav-link"  to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Navbar;