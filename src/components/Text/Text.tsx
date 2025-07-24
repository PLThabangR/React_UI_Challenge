import React from 'react'
import './Text.css'

interface Props{
    variant?:string,
    children?:React.ReactNode
    style?:React.CSSProperties
}
const Text = ({variant,children,style}:Props) => {
  if(variant === 'h1'){
    return <h1 style={style}>{children}</h1>
  }
    if(variant === 'h2'){
    return <h2 style={style} >{children}</h2>
  }
    if(variant === 'p'){
    return <p style={style}>{children}</p>
  }
    if(variant === 'span'){
    return <span style={style}>{children}</span>
  }

  
    return (
    <div>



    </div>
  )
}

export default Text