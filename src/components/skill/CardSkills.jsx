import React from 'react';
import './Skill.css';

function CardSkill(props) {
  return (
  <div>
    <div class="card d-flex mb-3 rounded bg-dark">
  <div class="card-body d-flex  rounded align-items-center justify-content-center bg-danger">
  <img className="skill-imagen card-img-top d-flex" src={props.src} alt="Imagen Perfil" style={{width: '15rem', height: '10rem'}} />
  </div>
  <h5 class="card-title text-center">{props.name}</h5>
  </div>
</div>
  )
}

export default CardSkill;
