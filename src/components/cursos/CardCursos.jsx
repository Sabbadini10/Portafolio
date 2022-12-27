import React from 'react'
import { Link } from 'react-router-dom';
import './Cursos.css';


function CardCursos(props) {
  return (
    <div>
    <div class="card d-flex mb-2" style={{width: '17rem'}}>
    <div class="card">
    <img className="main-imagen-perfil card-img-top d-flex aling-items-end" src={props.src} alt="Imagen Perfil" />
    <Link to={props.link} class="btn btn-primary mt-1">Ir</Link>
  </div>
  </div>
</div>
  )
}

export default CardCursos;