import React from 'react'
import './Cursos.css'
import CardCursos from './CardCursos';

function Cursos() {
  return (
    <div className='Cursos'>
      <div className='container-fluid d-flex justify-content-between mt-3'>
      <div className='cardCursos-caja-1'>
    <CardCursos 
    name="Buon Aseo"
    descripcion="Cursos integrador"
    link="/Cursos/:id" />

<CardCursos 
    name="Calculadora con React"
    descripcion="Cursos solitario"
    link="/Cursos/:id" />
    </div>
   
<div className='cardCursos-caja-2'>
<CardCursos
name="Consumiendo Api"
descripcion="Cursos solitario"
link="/Cursos/:id" />
<CardCursos 
    name="Api de peliculas"
    descripcion="Cursos solitario"
    link="/Cursos/:id" />
</div>
      </div>
    
</div>
  )
}

export default Cursos;
