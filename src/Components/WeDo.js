

import React from 'react';
import AiRpa from '../images/airpa.jpeg';
import BoldChoice from '../images/choice.png';
import Speed from '../images/speed.jpeg';
import cloud from '../images/cloud.jpeg';
import '../Styles/Wedo.css';
import { Link } from 'react-router-dom';
import { Contact } from '../Contact';

const WeDo = () => {
  return (
    <div className='home-page'> 

    
          <h4 className='main-heading'>Let's Collaborate </h4>

       <div className='Ai-page'>
           <div className='main-heading'>

              <div className='text-heading'> 
              <h2>AI + RPA is what we do   </h2>  
            </div>

            

           <div className='image' style={{backgroundImage:`url(${AiRpa})`}}> </div>
        </div>
        <br/>

        <div className='text-subheading'> 
              <h3>Future-Proof your business. Drive efficiency, <br/>
                profitability and deliver on customer experience </h3>
         </div>
         <br/>
      

         <Link to="/aipage">
        <div className='next-page'>
       
          <div className='text-div'> 
          <h4>AI+ RPAAutomation</h4>
          </div>
                  <div className='img-div'>  
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-arrow-right"
            viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
           4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
          </div>
       
         </div>
        
</Link>
     </div>






     <div className='build-page'>
           <div className='main-heading'>

              <div className='text-heading'> 
              <h2>Make Bolder Choices  </h2>  
            </div>

           <div className='image' style={{backgroundImage:`url(${BoldChoice})`}}> </div>
        </div>
        <br/>

        <div className='text-subheading'> 
              <h3>Digital focused strategies to realize market-changing ideas </h3>
         </div>
         <br/>
        
        <div className='next-page'>
          <div className='text-div'> 
          <h4>Build Better Apps</h4>
          </div>
        
        <div className='img-div'>  
           <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-arrow-right"
            viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
           4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
      </div>
        
     </div>
     </div>






     <div className='speed-page'>
           <div className='main-heading'>

              <div className='text-heading'> 
              <h2> Innovate with Speed </h2>  
            </div>

           <div className='image' style={{backgroundImage:`url(${Speed})`}}> </div>
        </div>
        <br/>

        <div className='text-subheading'> 
              <h3>Create higher quality software, deliver on customer expectations and business goals </h3>
         </div>
        <br/>
        

        <div className='next-page'>
          <div className='text-div'> 
          <h4>DevOPs</h4>
          </div>
        
        <div className='img-div'>  
           <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-arrow-right"
            viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
           4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
      </div>
        
     </div>
     </div>





     <div className='cloud-page'>
           <div className='main-heading'>

              <div className='text-heading'> 
              <h2> Embrace Cloud </h2>  
            </div>

           <div className='image' style={{backgroundImage:`url(${cloud})`}}> </div>
        </div>
        <br/>

        <div className='text-subheading'> 
              <h3>With Cloud-First accelerate innovation and optimize performance </h3>
         </div>
         <br/>
        

        <div className='next-page'>
          <div className='text-div'> 
          <h4>Cloud Services</h4>
          </div>
        
        <div className='img-div'>  
           <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-arrow-right"
            viewBox="0 0 16 16">
           <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
           4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
      </div>
        
     </div>
     </div>


     
     <Link to="/contact">     
        <div className='last-btn'>
        <button >Get in touch</button>
        </div>
      </Link>

    
     
     

 


    </div>
  )
}

export  default WeDo;