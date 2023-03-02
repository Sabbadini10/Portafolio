import React from 'react'
import './Proyecto.css';
import CardProyecto from './CardProyecto';
 import noDeploy from '../../imagenes/proyectos/No-Deploy.png'
import calculadora from '../../imagenes/proyectos/Deploy-calculadora-react.png'
import contador from '../../imagenes/proyectos/Deploy-contador-angular.png'
import clonTrello from '../../imagenes/proyectos/Deploy-clon-trello.png'
/* import cronometro from '../../imagenes/proyectos/' */
import maestroMayorObras from '../../imagenes/proyectos/Deploy-maestro-mayor-obras.png'

function Proyecto() {
  return (
    <div className='Proyecto'> 
    <h1 className='main-titulo d-flex flex-column align-items-center justify-content-center'>Proyectos</h1>
    <div className='contenedor-proyectos row row-lg-3 row-md-2 row-sm-1 mt-3 mb-3 '>
    
    <CardProyecto 
    name="Buon Aseo"
    src={noDeploy}
    alt="Buon Aseo"
    deploy="-"
    github="https://github.com/dbarrera8912/grupo_2_BuonAseo" />
    

<CardProyecto 
    name="Calculadora Con React"
    src={calculadora}
    alt="Calculadora"
    deploy="https://calculadora-react-boostrap.vercel.app/"
    github="https://github.com/Sabbadini10/Calculadora-react-boostrap"/>
    

<CardProyecto 
name="Contador de click"
src={contador}
alt="Contado Angular"
deploy="https://contador-click-angular.vercel.app/"
github="https://github.com/Sabbadini10/contador-click-angular" />


<CardProyecto 
name="Maestro Mayor de obras"
src={maestroMayorObras}
alt="Maestro Mayor Obras"
deploy="https://rf-m-m-o.netlify.app/"
github="https://github.com/Sabbadini10/pagina-web-maestro-mayor-de-obras" />

<CardProyecto 
name="Clon Trello"
src={clonTrello}
alt="Clon Trello"
deploy="https://clon-trello-app.vercel.app/"
github="https://github.com/Sabbadini10/clon-trello-app" />
</div>
</div>
  )
}

export default Proyecto;
