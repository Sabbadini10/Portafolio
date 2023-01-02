import React from 'react'
import './Proyecto.css';
import CardProyecto from './CardProyecto';

function Proyecto() {
  return (
    <div className='Proyecto'> 
    <h1 className='main-titulo d-flex justify-content-center '>Proyectos</h1>
    <div className='contenedor-proyecto  row row-lg-3 row-md-2 row-sm-1'>
    <div className='cardProyecto-caja-1'>
    <CardProyecto 
    name="Buon Aseo"
    lenguajes="HTML5, Ejs, CSS3, Node.js, Javascript, Express.js, MySQL, React.js, Bootstrap"
    descripcion="Proyecto Integrador"
    deploy="-"
    github="https://github.com/dbarrera8912/grupo_2_BuonAseo" />
    </div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
    name="Calculadora Con React"
    lenguajes="HTML5, Ejs, CSS3, React.js, Bootstrap"
    descripcion="Proyecto Solitario"
    deploy="https://calculadora-react-boostrap.vercel.app/"
    github="https://github.com/Sabbadini10/Calculadora-react-boostrap"/>
    </div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
    name="Maquetacion con react"
    lenguajes="HTML5, CSS3, React.js, Bootstrap"
    descripcion="Proyecto Solitario"
    deploy="https://clone-de-comentarios.vercel.app/"
    github="https://github.com/Sabbadini10/Clone-de-comentarios-con-React" />
    </div>
    <div className='cardProyecto-caja-1'>
<CardProyecto
name="Consumiendo Api"
lenguajes="Node.js, Javascript"
descripcion="Proyecto Solitario"
deploy="-"
github="https://github.com/Sabbadini10/consumiendo-apis-terceros" />
</div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
name="Crud De Apis"
lenguajes="HTML5, Ejs, CSS3, Node.js, Javascript, Express.js"
descripcion="Proyecto Solitario"
deploy="-"
github="https://github.com/Sabbadini10/movies_db_apis" />
</div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
name="Contador de click"
lenguajes="HTML5, CSS3, Javascript, React.js, Bootstrap"
descripcion="Proyecto Solitario"
deploy="https://contador-click-puce.vercel.app/"
github="https://github.com/Sabbadini10/contador-click-con-react" />
</div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
name="Validaciones de Formulario"
lenguajes="HTML5, Ejs, CSS3, Node.js, Javascript, Bootstrap"
descripcion="Proyecto Solitario"
deploy="-"
github="https://github.com/Sabbadini10/tp-validando-form-C40" />
</div>
<div className='cardProyecto-caja-1'>
<CardProyecto 
name="Estilos con Javascript"
lenguajes="Javascript"
descripcion="Proyecto Solitario"
deploy="-"
github="https://github.com/Sabbadini10/tp_clase-38/blob/master/public/js/moviesList.js" />
</div>
</div>
</div>
  )
}

export default Proyecto;
