import React from 'react';
import Card from 'react-bootstrap/Card';
import './Skill.css';
import Carousel from 'react-bootstrap/Carousel';
import one from '../../assets/img/1.png';
import two from '../../assets/img/2.png';
import three from '../../assets/img/3.png';
import four from '../../assets/img/4.png';
import five from '../../assets/img/5.png';
import SkillLogo from './SkillLogo';

const Skill = () => {
  return (
    <>

    <div style={{backgroundColor: '#16191d'}}> 
    <br />
        <Card  style={{border: 'none', textAlign: 'center', backgroundColor: '#16191d'}}>
        <br />
    <Card.Body>
      <Card.Text className='skill-text'>
      As a frontend development, I possess a range of skills <br /> that enable me to created visually appealing and <br /> responsive user interfaces for websites. Some of the <br /> projects I've mentioned in the section below this one.
      </Card.Text>

   
    </Card.Body>

  </Card>

  <SkillLogo />
  </div>
    </>
  )
}

export default Skill