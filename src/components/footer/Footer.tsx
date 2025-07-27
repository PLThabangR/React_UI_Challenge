import React from 'react'
import './footer.css'
import Text from '../Text/Text'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
  <div>
       <Text variant='p'style={{color:'black'}}>Lorem  </Text>
     <Text variant='h1'style={{color:'#1A2A37'}}>We to yotouch digriolics</Text>
      </div>
      <div>
        <Text variant='p'style={{color:'black'}}>Lorem  </Text>
        <Text variant='p'style={{color:'black'}}>consectetur</Text>
        <Text variant='p'style={{color:'black'}}>adipiscing </Text>
        <Text variant='p'style={{color:'black'}}>eiusmod </Text>
        <Text variant='p'style={{color:'black'}}>tempor </Text>
      </div>

      
        <Text variant='p'style={{color:'black'}}> Curabitur felis ,id fringilla eu, maximus mollis lectus. Suspendisse ornare commodo volutpat. Sed vitae quam sit amet diam tempor pulvinar </Text>
      

      <div>
        <Text variant='p'style={{color:'black'}}>Lorem  </Text>
        <Text variant='p'style={{color:'black'}}>consectetur viverra id fringilla. Suspendisse ornare commodo volutpat. Sed vitae quam sit amet diam tempor pulvinar</Text>
        <button>Suspendise</button>
      </div>
      </div>
      
       <div className="lower-container">
         <Text variant='h1' style={{color:'#1A2A37',fontStyle:"italic",fontSize:"20px"}}>B Ldsafsaf</Text> 
          <Text variant='span' style={{color:"#000000",fontStyle:"normal",fontSize:"10px",marginRight:"6rem"}}>Suspendisse ornare commodo volutpat. Sed vitae</Text> 
    
      <div>
        <Text variant='span' style={{color:'#000000',fontStyle:"normal",fontSize:"10px",marginRight:"10px"}}>Suspendisse ornare commodo volutpat. Sed vitae</Text> 
 <span className='twitter'><Text variant='span' style={{color:'#1A2A37'}}><FaTwitter /></Text> </span>
  <span className='twitter'><Text variant='span' style={{color:'#1A2A37'}}><FaFacebookF /></Text></span>
  <span className='twitter'> <Text variant='span' style={{color:'#1A2A37'}}><FaInstagram /></Text> </span>
   <span className='twitter'><Text variant='span' style={{color:'#1A2A37'}}><FaLinkedinIn /></Text> </span> 

      </div>
      
    </div> 
    </footer>
  )
}

export default Footer