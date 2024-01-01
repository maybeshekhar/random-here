import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import user from '../../assets/img/user.png';
import './MiniAbout.css';
import { HiSpeakerWave } from "react-icons/hi2";
import sound from '../../assets/audio/obb.mp3'

const MiniAbout = () => {

    function play() {
        new Audio(sound).play()
    }


  return (

    <>
      <div className='mini-whole' id='statusquo'>
      <Card className='mini-whole' style={{border: 'none', textAlign: 'center'}}>
    <Card.Body className='mini-whole'>
    <img src={user} alt="" style={{height: '120px', width: '120px'}} />
      <br />
      <Card.Text className='miniabout-text'>
      I am a frontend developer with a strange obessession for developing <br /> and customizing websites, while simultaneously indulging in a <br /> coffee binge. I love the challenge of working in a competitive <br /> environment, constantly striving to  learn new things and deliver <br /> quality work  that benefits both sides of the table. <br /> <br /> I graduated with a Bachelor's in<span><a href="https://xkcd.com/138/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}> Computer Science</a></span>from <br /> <span><a href="https://tat.ac.in/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Trident Academy of Technology</a></span>after completing my high school <br /> education in<span><a href="https://en.wikipedia.org/wiki/Jamshedpur" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Jamshedpur</a></span>. During my time at<span><a href="" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Trident</a></span><br /> I was  a part of the<span><a href="https://tact.ac.in/index.php/activities/co-curricullar/#1464922719875-7a522c57-e066" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Literature and Debate Club,</a></span>under <br /> Professor<span><a href="https://www.linkedin.com/in/sidharth-mohapatra-59027630/?originalSubdomain=in" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Sidharth S. Mohapatra</b></a></span>as our mentor.
      </Card.Text>
      
    </Card.Body>
  </Card>
  <br /> <br />
      </div>
  

    </>
  )
}

export default MiniAbout