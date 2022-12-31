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
      <h1 className='main-titulo d-flex justify-content-center '>Cursos</h1>
      <div className='contenedor-curso container-fluid mt-3'>
      <div className='cardCursos-caja-1'>
    <CardCursos 
    src={titulo1}
    link='https://www.linkedin.com/in/matias-sabbadini-desarrollador/overlay/1635508994823/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY' />

<CardCursos 
    src={titulo2}
    link='https://www.linkedin.com/in/matias-sabbadini-desarrollador/overlay/1635509000103/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY' />
    </div>
   
<div className='cardCursos-caja-1'>
<CardCursos
src={titulo3}
link='https://www.linkedin.com/in/matias-sabbadini-desarrollador/overlay/1635500325402/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY' />
<CardCursos 
src={titulo4}
    link='https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465750398/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY' />
</div>
<div className='cardCursos-caja-1'>
<CardCursos
src={titulo5}
link='https://www.linkedin.com/in/matias-sabbadini-desarrollador/details/featured/1635465748664/single-media-viewer/?profileId=ACoAADbYNhABEXaixHHh3U3pKLYQx2Ggu2vJltY' />
<CardCursos 
src={titulo6}
    link='imagenes/titulos/Introducción-al-mundo-web.jpeg' />
    
</div>
      </div>
    
</div>
  )
}

export default Cursos;
