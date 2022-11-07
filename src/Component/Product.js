import React from 'react'

function Product(prop) {
  return (
   <div>
   <div className='title'>{prop.title}</div>
    <img className='images' src={prop.image}/>
    <div>{prop.price}</div>
   </div>
  )
}

export default Product