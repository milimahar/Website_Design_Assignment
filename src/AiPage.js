import React from 'react'
import ai from './images/ai.png';
import styleai from './styleai.css';
import RP from './images/rp.jpeg'
import { Link } from 'react-router-dom';

 const AiPage = () => {
  return (
    <div>
        <div className='main-div'>
            
            <div className='pic' style={{backgroundImage:`url(${ai})`}}> </div>
                   

            <div className='words-div'>
                 <h2>Process</h2>
                 <h1>|</h1>
                <h2>Automation</h2>
                <h1>|</h1>
                <h2>Monetization</h2>
            </div>
            <div className='about-div'>
                   <p> Our team of professionals help you deliver measurable business outcomes by strategizing, 
                      designing and executing results driven AI + RPA automation. With Ekisu - our flagship AI automation
                     product, we help you with end-to end automation for your workflows. Each automation helps you save time, 
                    reduce cost of human capital, and improve efficiency! Now that’s successful Digital Transformation!
                 </p>
            </div>
            <Link to='/contact'>
            <button>Get in touch</button>
            </Link>

       </div>

       <div>
       <h2>Capabilities</h2>
       <div className='rp-div' style={{backgroundImage:`url(${RP})`}}>
       <h3> Bot Automation Simplified<br/>  Build,Deploy and Scale bots</h3> </div> 
    
       </div>
        
        
    </div>
  )
}

export default AiPage;
