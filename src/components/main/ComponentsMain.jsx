import React from 'react';
import './Main.css';


function Main(){
  return (
    <div className='Main'>
      <h1 className='main-titulo display-4 d-flex justify-content-center'>Bienvenidos a mi Porfolio</h1>
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
<hr class="border border-primary border-3 opacity-75"></hr>
<div className='d-flex justify-content-center mb-5 gap-5'>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Linkedin</h6>
  <a  href='https://www.linkedin.com/in/matias-sabbadini-desarrollador/' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Git-Hub</h6>
  <a href='https://github.com/Sabbadini10' target='_blank'><i class="fa-brands fa-github"></i></a>
  </div>
  <div className='d-flex flex-column align-items-sm-center'>
  <h6>Facebook</h6>
  <a  href='https://www.facebook.com/buon.aseo/' target='_blank'><i class="fa-brands fa-facebook"></i></a>
  </div>
</div>

      </div>
     
  )
}



export default Main