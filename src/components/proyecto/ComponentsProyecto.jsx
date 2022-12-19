import React from 'react'
import './Proyecto.css'
import CardProyecto from '../cardProyectos/CardProyectos';

function Proyecto() {
  return (
    <div className='Proyecto'> 
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
   
<div className='cardProyecto-caja-2'>
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
  )
}

export default Proyecto;
