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
import CardSkill from './CardSkills';


function Skill() {
  return (
    <div className='Skill'>
      <div className='contenedor-skill container-fluid d-flex flex-column justify-content-center align-items-center mt-3'>
      <div className='cardSkill-caja-1'>
    <CardSkill 
    src={skill1}
    name="Express.js"
    link='' />

<CardSkill 
    src={skill2}
    name="CSS3"
    link='' />
    
    <CardSkill
src={skill3}
name="Boostrap"
link='' />
<CardSkill 
src={skill4}
name="HTML5"
    link='' />
</div>
<div className='cardSkill-caja-1'>
<CardSkill
src={skill5}
name="Javascript"
link='' />
<CardSkill 
src={skill6}
name="MySQL"
    link='' />
    <CardSkill
src={skill7}
name="Node.js"
link='' />
<CardSkill 
src={skill8}
name="React.js"
    link='' />
</div>
<div className='cardSkill-caja-1'>
<CardSkill
src={skill9}
name="Sequelize"
link='' />
<CardSkill 
src={skill10}
name="Git"
    link='' />
</div>
      </div>
    
</div>
  )
}

export default Skill;

