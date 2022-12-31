import React from 'react';
import ImagenPerfil from '../imagen/ImagenPerfil';
import './Main.css';
import perfilImagen from '../../imagenes/fotoPerfil2.jpg'




function Main(){
  return (
    <div className='Main'>
      <h1 className='main-titulo d-flex justify-content-center '>Bienvenidos a mi Portfolio</h1>
      <div className='justify-content-around align-items-center mt-3 '>
      <div className= 'main-titulo-contenedor'>
      <h2 className='main-titulo-subtitulo'>Matias Sabbadini</h2>
      <h5 className='main-titulo-subtitulo'>Full Stack Web</h5>
      </div>
      <div className='main-titulo-parrafo-contenedor'>
      <p className='main-titulo-parrafo d-flex justify-content-center'> 
      A lo largo de estos años, he tenido el privilegio de formar parte <br/> 
      en la creación de webs como geekletics.es y peternappi.es, <br/> 
      las cuales han cultivado un gran éxito, tanto en tráfico como en conversiones. <br/> 
      Busco formar parte de Gesico Sistemas para mi capacidad creativa al siguiente nivel, <br/> 
      aportando mis amplio conocimientos en CSS y Prestashop.
      </p>
      </div>
      
<div className='main-contenedor-imagen'>
  <ImagenPerfil src={perfilImagen} />
</div>
      </div>
      
<hr className="border border-primary border-3 opacity-75"></hr>
<div className='main-contenedor-redes d-flex justify-content-center align-items-center'>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Linkedin</h6>
  <a href='https://www.linkedin.com/in/matias-sabbadini-desarrollador/'><i className="fa-brands fa-linkedin main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Git-Hub</h6>
  <a href='https://github.com/Sabbadini10'><i className="fa-brands fa-github main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Facebook</h6>
  <a  href='https://www.facebook.com/buon.aseo/'><i className="fa-brands fa-facebook main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Instagram</h6>
  <a  href={'https://www.instagram.com/matias_sabbadini/'}><i className="fa-brands fa-instagram main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Curriculum</h6>
  <a  href={'https://drive.google.com/file/d/1qzA4Nslyn9v5z41uP_RqxyNu30UIgbrj/view?usp=share_link'}><i className="fa-solid fa-download main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-center justify-content-center'>
  <h6 className='main-redes-titulo'>Email</h6>
  <a  href={'mailto:matiassabbadini24@gmail.com?Subject=Interesado%20en%20contactarme'}><i className="fa-solid fa-envelope main-icono"></i></a>
  </div>
</div>

      </div>
     
  )
}



export default Main