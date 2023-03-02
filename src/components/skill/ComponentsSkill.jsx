import React from 'react'
import './Skill.css'
import skill1 from '../../imagenes/skills/EXPRESSJS.png'
import skill2 from '../../imagenes/skills/CSS3.png'
import skill3 from '../../imagenes/skills/BOOTSTRAP.png'
import skill4 from '../../imagenes/skills/html5.png'
import skill5 from '../../imagenes/skills/javascript.png'
import skill6 from '../../imagenes/skills/MYSQL.png'
import skill7 from '../../imagenes/skills/NODEJS.png'
import skill8 from '../../imagenes/skills/REACTJS.png'
import skill9 from '../../imagenes/skills/SEQUELIZE.png'
import skill10 from '../../imagenes/skills/GIT.png'
import skill11 from '../../imagenes/skills/slack.jpg'
import skill12 from '../../imagenes/skills/trello.jpg'
import CardSkill from './CardSkills';


function Skill() {
  return (
    <div className='Skill'>
      <h1 className='main-titulo d-flex justify-content-center '>Skills</h1>
      <div className='contenedor-skill mt-3 '>
     <div className='cardSkill-caja'>
     <CardSkill 
    src={skill1}
    name="Express.js"
   />
   
  
<CardSkill 
    src={skill2}
    name="CSS3"
   />
     </div>
   
     <div className='cardSkill-caja'>
     <CardSkill
src={skill3}
name="Boostrap" />


<CardSkill 
src={skill4}
name="HTML5"
   />

     </div>
   
  
     <div className='cardSkill-caja'>
     <CardSkill
src={skill5}
name="Javascript" />


<CardSkill 
src={skill6}
name="MySQL"
   />
     </div>
     <div className='cardSkill-caja'>
     <CardSkill
src={skill7}
name="Node.js" />


<CardSkill 
src={skill8}
name="React.js" />
     </div>

     <div className='cardSkill-caja'>
     <CardSkill
src={skill9}
name="Sequelize" />


<CardSkill 
src={skill10}
name="Git" />

     </div>


     <div className='cardSkill-caja'>
     <CardSkill 
src={skill11}
name="Slack" />


<CardSkill 
src={skill12}
name="Trello" />

</div>
<div className='cardSkill-caja-1200'>
     <CardSkill 
    src={skill1}
    name="Express.js"
   />
   
  
<CardSkill 
    src={skill2}
    name="CSS3"
   />

<CardSkill
src={skill3}
name="Boostrap" />
     </div>
     <div className='cardSkill-caja-1200'>

<CardSkill 
src={skill4}
name="HTML5"
   />

     <CardSkill
src={skill5}
name="Javascript" />


<CardSkill 
src={skill6}
name="MySQL"
   />
     </div>
     <div className='cardSkill-caja-1200'>
     <CardSkill
src={skill7}
name="Node.js" />


<CardSkill 
src={skill8}
name="React.js" />

<CardSkill
src={skill9}
name="Sequelize" />


</div>
     <div className='cardSkill-caja-1200'>
   

<CardSkill 
src={skill10}
name="Git" />

<CardSkill 
src={skill11}
name="Slack" />

<CardSkill 
src={skill12}
name="Trello" />

     </div>
</div>
      </div>
    

  )
}

export default Skill;

