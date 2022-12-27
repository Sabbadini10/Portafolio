import React from 'react'
import './Cursos.css'
import CardCursos from './CardCursos';
import titulo1 from '../../imagenes/titulos/Introducción-al-mundo-web.jpeg'
import titulo2 from '../../imagenes/titulos/Introducción-a-la-Programación.jpeg'
import titulo3 from '../../imagenes/titulos/1661337490222.jpg'
import titulo4 from '../../imagenes/titulos/1628632400757.jpg'
import titulo5 from '../../imagenes/titulos/1628632685254.jpg'
import titulo6 from '../../imagenes/titulos/Introducción-al-mundo-web.jpeg'


function Cursos() {
  return (
    <div className='Cursos'>
      <div className='contenedor-curso container-fluid d-flex flex-row justify-content-around align-items-center mt-3'>
      <div className='cardCursos-caja-1'>
    <CardCursos 
    src={titulo1}
    link='imagenes/titulos/Introducción-al-mundo-web.jpeg' />

<CardCursos 
    src={titulo2}
    link='imagenes/titulos/Introducción-a-la-Programación.jpeg' />
    </div>
   
<div className='cardCursos-caja-1'>
<CardCursos
src={titulo3}
link='imagenes/titulos/1661337490222.jpg' />
<CardCursos 
src={titulo4}
    link='imagenes/titulos/1628632400757.jpg' />
</div>
<div className='cardCursos-caja-1'>
<CardCursos
src={titulo5}
link='imagenes/titulos/1628632685254.jpg' />
<CardCursos 
src={titulo6}
    link='imagenes/titulos/Introducción-al-mundo-web.jpeg' />
    
</div>
      </div>
    
</div>
  )
}

export default Cursos;
