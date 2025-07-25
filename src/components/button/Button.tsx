import React from 'react'
import './button.css'
 interface ButtonProps{
        children:React.ReactNode
        
    }
const Button = ({children}:ButtonProps) => {
   
  return (
    <Button>
{children}
    </Button>
  )
}

export default Button