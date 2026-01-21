import React from 'react'
import RightCardContent from './RightCardContent.jsx'

const RightCard = (props) => {
  return (
    <div className='h-full  shrink-0 moverflow-hidden relative w-80 '>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img}/>
      <RightCardContent  tag={props.tag}  id={props.id} color={props.color} intro={props.intro}/>
   </div>
  )
}

export default RightCard
