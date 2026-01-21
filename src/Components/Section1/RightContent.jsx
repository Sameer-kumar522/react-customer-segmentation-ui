import React from 'react'
import RightCard from './RightCard.jsx'
const RightContent = (props) => {
  
  return (
    <div   className='h-full  rounded-4xl overflow-x-auto   flex flex-nowrap gap-10 w-2/3  p-6 '>
      {props.users.map((elem,idx)=>{
        return <RightCard img={elem.img} tag={elem.tag} color={elem.color} intro={elem.intro} key={idx} id={idx}/>
      })}
            
    </div>
  )
}

export default RightContent
