import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Project.css';
import one from '../../assets/proj/tinder.png'
import two from '../../assets/proj/js.png'
import three from '../../assets/proj/udemy.png'
import four from '../../assets/proj/whey.png'
import five from '../../assets/proj/sleeve.png'
import six from '../../assets/proj/blog.png'

const Project = () => {
  return (
   <>
   <div className='wholeproject'>
   <br /> <br />

   
      <CardGroup style={{textAlign: 'center'}}>
      <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://lucky-kangaroo-146fbd.netlify.app/" target='blank'>
        <img className='projimg' src={one} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}>Imaginary Clone</Card.Title>
          <Card.Text className='project-para'>
          I've created a UI that's just like Tinder, and added swipe-able cards with smooth swiping animations. And guess what? I've used the latest Firebase version V9, to power it up and make it even better. Just click on the image and dive right in.
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://64bc044d5797ba02c276c247--bespoke-alpaca-a4a27d.netlify.app/" target='blank'>
        <img className='projimg' src={two} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}> <h4>JS Tips & Tricks</h4></Card.Title>
          <Card.Text className='project-para'>
          I was preparing for my interviews and came across some very common, yet confusing concepts of JavaScript. Right then, I had this idea of creating a website where I can provide a lot of resources, notes, and some tricky concepts, all sprinkled with JavaScript and development-related memes. This is just a miniature version of what's coming up big soon! Do check it out here.
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://delicate-clafoutis-57560f.netlify.app/" target='blank'>
        <img className='projimg' src={three} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}>Udemy Clone</Card.Title>
          <Card.Text className='project-para'>
          From the bottom of my heart, I strongly believe Udemy should come up with a platform exclusively for developers, so that it doesn't recommend me their<span><a href="https://www.udemy.com/course/crash-course-on-dealing-with-a-break-up-or-divorce/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>crash course on dealing with a break up</a></span>, almost every other day. On another note, check out my little Udemy clone. It's like a mini me version of the real deal!
          </Card.Text>
        </Card.Body>
        </Card>
       
    </CardGroup>

    <CardGroup style={{textAlign: 'center'}}>
      <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://cheery-fenglisu-9d52b1.netlify.app/" target='blank'>
        <img className='projimg' src={four} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}>Protien Station</Card.Title>
          <Card.Text className='project-para'>
          This is a Whey protein supplement e-commerce UI, and what's even cooler is that I built this entire thing using only JavaScript ES6, no fancy frameworks or libraries involved. I'm pretty sure many wouldn't get that if I weren't this honest. Make sure to check it out twice, from two different perspectives. Enjoy the experience!
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://lovely-croquembouche-a5060a.netlify.app/" target='blank'>
        <img className='projimg' src={five} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}>Sleeve Fashion Store</Card.Title>
          <Card.Text className='project-para'>
          This is a street-wear fashion destination e-commerce website, I'm pretty much obsessed with sneakers personally so just had a thought of making my own dreamy collection store. I've used Redux toolkit to maintain and update data across multiple components here and user Authentication function for anyone who's a sneakerhead just like me.
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{border: 'none'}}>
        <Card.Body className='project-card-body'>
        <a href="https://ang-blog-ea5d2.web.app/" target='blank'>
        <img className='projimg' src={six} alt="" />
        </a>
          <Card.Title style={{color: '#f8f9fa'}}>.Blog</Card.Title>
          <Card.Text className='project-para'>
          This is one of those projects I made for a little creativity and some practice, and it ended up turning out so beautifully! Check it out. It's also one of my very initial Angular projects. You can also visit my<span><a href="https://github.com/maybeshekhar" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Github</a></span>for some more exciting projects like the<span><a href="https://imaginative-gingersnap-5377e4.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Sidhu Moosewala Tribute audio player</a></span>,<span><a href="https://unrivaled-axolotl-078403.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Online Coding platform</a></span>, and <span><a href="https://mellow-strudel-698ec6.netlify.app/" target='blank' style={{color: '#CC0088', textDecoration: 'none'}}>Note-taking App</a></span>with a toggle theme function and many more.
          </Card.Text>
        </Card.Body>
        </Card>
       
    </CardGroup>
    <br /> <br />
    </div>
   </>
  )
}

export default Project