import React from 'react'
import './Proyecto.css'
import CardProyecto from './CardProyecto';

function Proyecto() {
  return (
    <div className='Proyecto'> 
      <h1 className='main-titulo d-flex justify-content-center '>Proyectos</h1>

    <div className='contenedor-proyecto'>
    <div className='cardProyecto-caja-1'>
    <CardProyecto 
    name="Buon Aseo"
    descripcion="proyecto integrador"
    link="/proyectos/:id" />

<CardProyecto 
    name="Calculadora con React"
    descripcion="proyecto solitario"
    link="/proyectos/:id" />

<CardProyecto 
    name="Api de peliculas"
    descripcion="proyecto solitario"
    link="/proyectos/:id" />
    </div>
   
<div className='cardProyecto-caja-1'>
<CardProyecto
name="Consumiendo Api"
descripcion="proyecto solitario"
link="/proyectos/:id" />

<CardProyecto 
name="Crud de apis"
descripcion="proyecto solitario"
link="/proyectos/:id" />

<CardProyecto 
name="Bases de datos"
descripcion="proyecto solitario"
link="/proyectos/:id" />
</div>
</div>
</div>
  )
}

export default Proyecto;
