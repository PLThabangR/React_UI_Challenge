import React from 'react'
import Text from '../Text/Text'
interface CardProps{
    name:string,
    image:string,
    description:string,
    price:number
}
const Card = ({name,image,description,price} :CardProps) => {
  return (
    <article>
        <img className="card__img" src={image} alt="" />
        <Text variant='h1' style={{color:'red'}}>{name}</Text>
        <Text variant='p'>{description}</Text>
        <Text variant='span'>{price}</Text>
    </article>
  )
}

export default Card