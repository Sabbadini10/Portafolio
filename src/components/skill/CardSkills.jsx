import React from 'react';
import './Skill.css';

function CardSkill(props) {
  return (
  <div className='contenedor-card-skill'>
    <div class="card-skill d-flex mb-3 card">
    <h5 class="card-title-skill text-center text-dark">{props.name}</h5>
  <div class="card-body d-flex  rounded align-items-center justify-content-center">
  <img className="skill-imagen card-img-top d-flex" src={props.src} alt="Imagen Perfil"  />
  </div>
  
  </div>
</div>
  )
}

export default CardSkill;
