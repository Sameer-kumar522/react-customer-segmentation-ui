import React from 'react'
import LeftContent from './leftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 h-[90vh] px-18 flex  gap-10 items-center'>
      < LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
