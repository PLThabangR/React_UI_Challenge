import React from 'react'
import './button.css'
//Interface for button
 interface ButtonProps{
  //button children
        children:React.ReactNode
        
    }
  // Button props
const Button = ({children}:ButtonProps) => {
  //The button component
  return (
    <Button>
{children}
    </Button>
  )
}

export default Button