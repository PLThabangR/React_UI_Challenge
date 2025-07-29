
import './Text.css'

// Interface for text
interface Props{
    variant?:string,
    children?:React.ReactNode
    style?:React.CSSProperties
}
// Text component

const Text = ({variant,children,style}:Props) => {
  // Use if statement to check the variant
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