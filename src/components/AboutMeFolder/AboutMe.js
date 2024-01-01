import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AboutMe.css';
import coffee from '../../assets/aboutlogo/coffee.png';
import study from '../../assets/aboutlogo/study.png';
import goal from '../../assets/aboutlogo/goal.png';


const AboutMe = () => {
  return (
    <>
    <div className='wholeabout'>

         <br />
        <CardGroup className='group' style={{textAlign: 'center'}}>
      <Card className='about-card' style={{border: 'none'}}>
        <Card.Body className='about-card-body'>
        <img className='aboutlog' src={study} alt="" />
          <br /> <br />
          <Card.Text className='about-text'>
          I enjoy critically reasoning and debating controversial topics. Topics that particularly interest me are Mental health & fitness, Politics, Technology, Cars and Economics. I will soon compile a cool list of my top picks for books, videos, articles, and internet news sources, and I'm gonna call it<span><a style={{color: '#CC0088', textDecoration: 'none'}}><b>Something's cooking</b>.</a></span>
          </Card.Text>
        </Card.Body>
      </Card>
      

      <Card className='about-card' style={{border: 'none'}}>
        <Card.Body className='about-card-body'>
        <img className='aboutlog' src={goal} alt="" />
        <br /> <br />
          <Card.Text className='about-text'>
          My<span><a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Myers-Briggs Type Indicator(MBTI)</a></span>is<span><a href="https://www.16personalities.com/infj-personality" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>INFJ</a></span>[Introverted, Intuitive, Feeling, Judging]. The favorite people I supposedly share my personality type with are<span><a href="https://en.wikipedia.org/wiki/Kobe_Bryant" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Kobe Bryant</b></a></span>,<span><a href="https://en.wikipedia.org/wiki/Plato" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Plato</b></a></span>,<span><a href="https://en.wikipedia.org/wiki/Al_Pacino" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Al Pacino</b></a></span>and <span><a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Vincent van Gogh</b></a></span> (also<span><a href="https://en.wikipedia.org/wiki/Adolf_Hitler" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Adolf Hitler</b></a></span>). You too should take the test<span><a href="https://www.16personalities.com/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>here</a></span>.
          </Card.Text>
        </Card.Body>
      </Card>
      

      <Card className='about-card' style={{border: 'none'}}>
        <Card.Body className='about-card-body'>
        <img className='aboutlog' src={coffee} alt="" />
        <br /> <br />
          <Card.Text className='about-text'>
          I once lived off<span><a href="https://en.wikipedia.org/wiki/Dahibara_Aludam" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Dahi Bara Aloo Dum</a></span>,<span><a href="https://en.wikipedia.org/wiki/Masala_chai" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Chai</a></span>and<span><a href="https://en.wikipedia.org/wiki/Biryani" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Biryani</a></span>, often in that order. Now it's mostly <span><a href="https://en.wikipedia.org/wiki/Doppio" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Coffee</a></span>, <span><a href="https://en.wikipedia.org/wiki/Peanut_butter" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Peanut Butter</a></span> and <span><a href="https://en.wikipedia.org/wiki/Kati_roll" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Kati Kabab Roll.</a></span>I am a staunch believer in<span><a href="https://en.wikipedia.org/wiki/Intermittent_fasting" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>intermittent fasting</a></span>and have been religiously following it for the past five years.
          </Card.Text>
        </Card.Body>
      </Card>

     
      
    </CardGroup>
    <br />
    </div>
    </>
  )
}

export default AboutMe