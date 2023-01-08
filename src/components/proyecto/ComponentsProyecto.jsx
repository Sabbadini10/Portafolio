import React from 'react'
import './Proyecto.css';
import CardProyecto from './CardProyecto';

function Proyecto() {
  return (
    <div className='Proyecto'> 
    <h1 className='main-titulo d-flex flex-column align-items-center justify-content-center'>Proyectos</h1>
    <div className='contenedor-proyectos row row-lg-3 row-md-2 row-sm-1 mt-3 mb-3 '>
    
    <CardProyecto 
    name="Buon Aseo"
    lenguajes="HTML5, Ejs, CSS3, Node.js, Javascript, Express.js, MySQL, React.js, Bootstrap"
    descripcion="Proyecto Integrador"
    deploy="-"
    github="https://github.com/dbarrera8912/grupo_2_BuonAseo" />
    

<CardProyecto 
    name="Calculadora Con React"
    lenguajes="HTML5, Ejs, CSS3, React.js, Bootstrap"
    descripcion="Proyecto Solitario"
    deploy="https://calculadora-react-boostrap.vercel.app/"
    github="https://github.com/Sabbadini10/Calculadora-react-boostrap"/>
    

<CardProyecto 
name="Contador de click"
lenguajes="HTML5, CSS3, Javascript, React.js, Bootstrap"
descripcion="Proyecto Solitario"
deploy="https://contador-click-puce.vercel.app/"
github="https://github.com/Sabbadini10/contador-click-con-react" />


<CardProyecto 
name="Pagina Maestro Mayor de obras"
lenguajes="HTML5, CSS3, Javascript, Bootstrap, NodeJS, ExpressJS, React, Mysql"
descripcion="Proyecto Solitario"
deploy="https://rf-m-m-o.netlify.app/"
github="https://github.com/Sabbadini10/pagina-web-maestro-mayor-de-obras" />
</div>
</div>
  )
}

export default Proyecto;
