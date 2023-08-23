import { useState } from 'react'


const heading= "Javascript";
const date ="20/08/2023"
  function Card(){
   return( 
   <div className='div'>
    <h1 className='todo'>Todo App</h1>
   <h3 className='head'>{heading}</h3>
   <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti officia </p>
   <p className='date'>{date}</p>

   </div>

   )

  }

  export default Card;