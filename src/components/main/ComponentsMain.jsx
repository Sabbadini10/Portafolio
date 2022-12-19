import React from 'react';
import Proyecto from '../proyecto/ComponentsProyecto';
import Skill from '../skill/ComponentsSkill';
import './Main.css';

function Main(){
  return (
    <div className='Main'>
      <h1 className='main-titulo display-1 d-flex text-center'>Bienvenidos a mi Porfolio</h1>
      <h5 className='display-4 tex-center'>Skills</h5>
      <Skill />
      <h5 className='display-4 tex-center'>Proyecto</h5>
      <Proyecto />
      </div>
     
  )
}


export default Main