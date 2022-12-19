import React from 'react';
import './Skill.css';
import { Link } from 'react-router-dom';

function Skill(props) {
  return (<div>
    <div class="card d-flex mb-3" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.descripcion}</p>
    <Link href={props.link} class="btn btn-primary">Ir</Link>
  </div>
  </div>
</div>
  )
}

export default Skill;
