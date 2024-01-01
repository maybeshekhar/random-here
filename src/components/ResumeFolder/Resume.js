import React, { useState } from 'react';
import './Resume.css';
import resume from '../../assets/cv/Chandrashekhar.pdf';
import { GrMail } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';


const AwesomeButton = () => {
    const [buttonState, setButtonState] = useState({
      status: false,
      text: 'Download',
      className: '',
    });
  
    const handleClick = () => {
      setButtonState((prevState) => ({
        status: !prevState.status,
        text: !prevState.status ? String.fromCharCode('10003') : 'Download',
        className: !prevState.status ? 'checked' : '',
      }));
    };
  
    return (
      <button
        className={`awesome-btn ${buttonState.className}`}
        onClick={handleClick}
        href={resume}
        download="Thanks for grabbing my resume! 😊"
      >
       <a href={resume}
        download="Thanks for grabbing my resume! 😊" style={{textDecoration: 'none', color: '#f8f9fa'}}>{buttonState.text}</a> 
      </button>
    );
  };

const Resume = () => {
  return (
    <div className='resume-body'>
    <br /> <br /> <br />
    <br /> <br /> <br />
    <div className="container-fluid" style={{ marginTop: '1em' }}>
      <div className="row">
        <div className="col-12 text-center">
          <AwesomeButton />
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 text-center"
          style={{ marginTop: '.5em' }}
        >
          <p className="name"></p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />

    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a className='social-icon' href="https://www.linkedin.com/in/chandrashekhar-j-1915891a7/" target="_blank" rel="noopener noreferrer">
          <GrLinkedinOption />
          </a>
          <a  className='social-icon' href="mailto:shekharmaybe.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          <GrMail />
          </a>
        </div>
        <br />
        <p> Copyright &copy; Chandrashekhar Jenamoni 2023</p>
      </div>
    </footer>
    <br />
    <br />
    <br />
    
    </div>
  )
}



export default Resume