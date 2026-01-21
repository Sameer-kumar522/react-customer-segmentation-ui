
import React from 'react'
import Section1 from './Components/Section1/Section1.jsx'

const App = () => {
  const users=[
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Confident and content, enjoying stability, comfort, and long-term peace of mind.',
      color:'black',
      tag:'Satisfied'},

    {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
     intro:'Working hard every day but still lacking the resources, access, and support needed to grow.',
     color:'black',
     tag:'Underserved'},

    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
     intro:'Managing daily life while having limited access to reliable and formal financial services.',
      color:'black',
     tag:'Underbanked'},

     {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
     intro:'Striving forward despite limited comfort, essential needs, and available resources.',
      color:'black',
     tag:'Underweared'},
    
     {img:'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx3b3JraW5nfGVufDB8fDB8fHww',
     intro:'Living a balanced life with steady progress, predictable routines, and manageable responsibilities.',
      color:'black',
     tag:'Average'}

     
  ]
  return (
    <div >
    <Section1 users={users} />

    </div>
  )
}

export default App


