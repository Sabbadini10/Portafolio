import React from 'react';
import ImagenPerfil from '../imagen/ImagenPerfil';
import './Main.css';
import perfilImagen from '../../imagenes/fotoPerfil2.jpg'




function Main(){
  return (
    <div className='Main'>
      <h1 className='main-titulo d-flex justify-content-center '>Bienvenidos a mi Portfolio</h1>
      <div className= 'main-titulo-contenedor'>
      <h2 className='main-titulo-subtitulo'>Matias Sabbadini</h2>
      <h5 className='main-titulo-subtitulo'>Full Stack Web</h5>
      </div>
      <div className='main-contenedor-parrafo-imagen mt-3 '>
      <div className='main-titulo-parrafo-contenedor'>
      <p className='main-titulo-parrafo d-flex justify-content-center'> 
      Hola me llamo de Matias Sabbadini, tengo 31 años y soy de Neuquen, Argentina. 
      Soy un estudiante de programación autodidacta con iniciativa y ganas de superarse. 
      Cuento con la capacidad de trabajar en equipo y resolución de problemas. 
      Busco mi primer trabajo IT para poder adquirir nuevas experiencias en lo profesional y en lo personal.
      He estudiado el curso de 'Programación web full stack' en Digital House gracias a una beca 
      otorgada por la Fundación Formar en conjunto con Pampa Energia y Banco Santander. En este curso aprendí a programar 
      en JavaScript, HTML, CSS, React JS, Node JS, Express JS, Mysql, GIT, Bootstrap, entre otras tecnologías.
      </p>
      </div>
      
<div className='main-contenedor-imagen'>
  <ImagenPerfil src={perfilImagen} />
</div>
      </div>
      <h5 className='text-center mt-5 text-light'>Redes</h5>
      <hr className="border border-primary border-3 opacity-50"></hr>
<div className='main-contenedor-redes '>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Linkedin</h6>
  <a href='https://www.linkedin.com/in/matias-sabbadini-desarrollador/'><i className="main-redes-iconos fa-brands fa-linkedin"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Git-Hub</h6>
  <a href='https://github.com/Sabbadini10'><i className="main-redes-iconos fa-brands fa-github"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Email</h6>
  <a  href={'mailto:matiassabbadini24@gmail.com?Subject=Interesado%20en%20contactarme'}><i className="main-redes-iconos fa-solid fa-envelope"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Instagram</h6>
  <a  href={'https://www.instagram.com/matias_sabbadini/'}><i className="main-redes-iconos fa-brands fa-instagram"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center'>
  <h6 className='main-redes-titulo'>Curriculum</h6>
  <a  href={'https://drive.google.com/file/d/1qzA4Nslyn9v5z41uP_RqxyNu30UIgbrj/view?usp=share_link'}><i className="main-redes-iconos fa-solid fa-download"></i></a>
  </div>
  </div>
<hr className="border border-primary border-3 opacity-50"></hr>
      

      </div>
     
  )
}



export default Main