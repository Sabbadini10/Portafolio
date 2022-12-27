import React from 'react'
import './Skill.css'
import skill1 from '../../imagenes/skills/1_fASRfi5Gh3iNaJ5ejpxRmg.png'
import skill2 from '../../imagenes/skills/450_1000-removebg-preview.png'
import skill3 from '../../imagenes/skills/bootstrap-logo.png'
import skill4 from '../../imagenes/skills/html5.png'
import skill5 from '../../imagenes/skills/javascript.png'
import skill6 from '../../imagenes/skills/mysql-logo-1-820x450.png'
import skill7 from '../../imagenes/skills/node-js-logo.png'
import skill8 from '../../imagenes/skills/REACT-JS-KOCHI.png'
import CardSkill from './CardSkills';


function Skill() {
  return (
    <div className='Skill'>
      <div className='contenedor-skill container-fluid d-flex flex-row justify-content-around align-items-center mt-3'>
      <div className='cardSkill-caja-1'>
    <CardSkill 
    src={skill1}
    name="Express.js"
    link='' />

<CardSkill 
    src={skill2}
    name="CSS3"
    link='' />
    </div>
   
<div className='cardSkill-caja-1'>
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
    
</div>
<div className='cardSkill-caja-1'>
<CardSkill
src={skill7}
name="Node.js"
link='' />
<CardSkill 
src={skill8}
name="React.js"
    link='' />
    
</div>
      </div>
    
</div>
  )
}

export default Skill;

