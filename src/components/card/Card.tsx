import React from 'react'
import Text from '../Text/Text'

import './card.css'
// Interface for card
interface CardProps{
    title:string,
    image:string,
    description:string,
    style?:React.CSSProperties
    
}
// Card component props
const Card = ({title,image,description,style} :CardProps) => {
  return (
    <article>
       
     
          {/* Card section styling  */}
        <section className='card_section' style={style}>
            {/* Creating a card using text, button and image */}
<div className='card_content' >
        <Text variant='h1' style={{color:'#1A2A37'}}>{title}</Text>
        <Text variant='p'>{description}</Text>
        <button>Read more</button>
       
      </div>
      {/* Image */}
 <img className="card_img" src={image} alt="" />

          
      
     

        </section>

    </article>
  )
}

export default Card