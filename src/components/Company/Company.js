import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardgroup from 'react-bootstrap/Cardgroup';
import asiana from '../../assets/proj/asiana.png';
import ajatus from '../../assets/proj/ajatus.png';
import vyncx from '../../assets/proj/vyncx.png';
import './Company.css';

const Company = () => {
  return (
    <>
    
    <div className='company-group' >
        <Cardgroup>
  
        <Card className='company-group' style={{textAlign: 'center', border: 'none'}}>
      <Card.Body className='company-card'>
      <a href="https://asianatimes.com/" target='blank'>
      <img className='comp-img' src={asiana} alt="" style={{height: '250px'}} /></a>
        <Card.Title style={{color: '#f8f9fa'}}>Asiana Times</Card.Title>
        <p style={{color: '#f8f9fa'}}>July - Sept '23</p>
        <Card.Text style={{color: '#f8f9fa'}}>
        As a lectiophile and someone who keeps myself informed about world  events, I am grateful to have been a part of<span><a href="https://asianatimes.com/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Asiana Times</b></a></span>as a Web Story Intern, where I worked under<span><a href="https://www.linkedin.com/in/nirmiti-raj-6aa33924a/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Nirmiti Raj</b>.</a></span>Despite it being outside my professional career, this opportunity allowed me to indulge in my hobby of crafting the art of news writing  in form of stories. You can read the web stories<span><a href="https://asianatimes.com/web-stories" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>here.</a></span>
        </Card.Text>
      <br /> 
      </Card.Body>
      </Card>
      

      <Card className='company-group' style={{textAlign: 'center', border: 'none'}}>
      <Card.Body className='company-card'>
      <a href="https://www.ajatus.in/" target='blank'>
      <img className='comp-img' src={ajatus} alt="" style={{height: '250px'}} /></a>
        <Card.Title style={{color: '#f8f9fa'}}>Ajatus Software</Card.Title>
        <p style={{color: '#f8f9fa'}}>July - Sept '22</p>
        <Card.Text style={{color: '#f8f9fa'}}>
        I interned as a React JS developer, where I built the user dashboard for a prominent air purifier company's website and ensuring seamless functionality,being mentored by the incredible<span><a href="https://www.linkedin.com/in/girishprsahu/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Girish Sahu</b></a>.</span> Additionally, I contributed my skills to a cross-platform cloud kitchen food application, assisting in its UI development and functionality, where I worked under<span><a href="https://www.linkedin.com/in/satya-prakash-dash-5319831a1/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}><b>Satya Dash.</b></a></span>
        </Card.Text>
      <br /> 
      </Card.Body>
      </Card>

      <Card className='company-group' style={{textAlign: 'center', border: 'none'}}>
      <Card.Body className='company-card'>
      <a href="https://vyncx.in/" target='blank'>
      <img className='comp-img' src={vyncx} alt="" style={{height: '250px'}} />
      </a>
        <Card.Title style={{color: '#f8f9fa'}}>Vyncx Corporation</Card.Title>
        <p style={{color: '#f8f9fa'}}>June - Nov '21</p>
        <Card.Text style={{color: '#f8f9fa'}}>
        I worked on the internal product  designed to streamline the client review process during client onboarding.  I conducted extensive market research to gather insights  and identify  key pain points in the existing review process.
        </Card.Text>
       
      </Card.Body>




       
    </Card>
    <br />
    </Cardgroup>
    </div>
    </>
  )
}

export default Company