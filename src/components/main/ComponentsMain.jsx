import React from 'react';
import ImagenPerfil from '../imagen/ImagenPerfil';
import './Main.css';
import perfilImagen from '../../imagenes/fotoPerfil2.jpg'




function Main(){
  return (
    <div className='Main'>
      <h1 className='main-titulo display-1 d-flex justify-content-center'>Bienvenidos a mi Porfolio</h1>
      <div className='d-flex flex-row justify-content-around align-items-center mt-3'>
      <div>
      <h2 className='main-titulo-subtitulo d-flex justify-content-center'>Matias Sabbadini</h2>
      <h5 className='main-titulo-subtitulo d-flex justify-content-center'>Full Stack Web</h5>
      <p className='main-titulo-parrafo d-flex justify-content-center'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
        Qui quasi eveniet officia porro commodi id molestias beatae eaque <br/>
        ipsum rerum laudantium ab fuga, maiores ex voluptates minima libero veniam. <br/>
        Voluptate! Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
        Repellat excepturi aut quam est facilis amet, <br/>
        similique dolor soluta harum veniam recusandae, <br/>
        quia nulla esse ipsum fuga pariatur neque atque officia!<br/>
      </p>
      </div>
<div>
  <ImagenPerfil src={perfilImagen} />
</div>
      </div>
      
<hr className="border border-primary border-3 opacity-75"></hr>
<div className='main-contenedor-redes d-flex justify-content-center'>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Linkedin</h6>
  <a href='https://www.linkedin.com/in/matias-sabbadini-desarrollador/'><i className="fa-brands fa-linkedin main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Git-Hub</h6>
  <a href='https://github.com/Sabbadini10'><i className="fa-brands fa-github main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Facebook</h6>
  <a  href='https://www.facebook.com/buon.aseo/'><i className="fa-brands fa-facebook main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Instagram</h6>
  <a  href={'https://www.instagram.com/matias_sabbadini/'}><i className="fa-brands fa-instagram main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Curriculum</h6>
  <a  href={'https://drive.google.com/file/d/1qzA4Nslyn9v5z41uP_RqxyNu30UIgbrj/view?usp=share_link'}><i className="fa-solid fa-download main-icono"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Email</h6>
  <a  href={'mailto:matiassabbadini24@gmail.com?Subject=Interesado%20en%20contactarme'}><i className="fa-solid fa-envelope main-icono"></i></a>
  </div>
</div>

      </div>
     
  )
}



export default Main