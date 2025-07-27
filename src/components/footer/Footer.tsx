import React from 'react'
import './footer.css'
import Text from '../Text/Text'

const Footer = () => {
  return (
    <footer>
      <div>
       <Text variant='p'style={{color:'black'}}>Lorem  </Text>
     <Text variant='h1'style={{color:'black'}}>We to yotouch digriolics</Text>
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
        <button>Suspendisse</button>
      </div>
    </footer>
  )
}

export default Footer