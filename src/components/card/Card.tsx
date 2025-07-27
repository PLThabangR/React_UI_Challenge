import React from 'react'
import Text from '../Text/Text'

import './card.css'
interface CardProps{
    title:string,
    image:string,
    description:string,
    style?:React.CSSProperties
    
}
const Card = ({title,image,description,style} :CardProps) => {
  return (
    <article>
       
     

        <section className='card_section' style={style}>
         
<div className='card_content' >
        <Text variant='h1' style={{color:'#1A2A37'}}>{title}</Text>
        <Text variant='p'>{description}</Text>
        <button>Read more</button>
       
      </div>
      
 <img className="card_img" src={image} alt="" />

          
      
     

        </section>

    </article>
  )
}

export default Card