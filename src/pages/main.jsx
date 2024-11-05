import React from 'react'
import ezgi from '../assets/ezgi.jpg'

const Main = () => {
  return (
    <div className='flex items-center justify-around h-[80vh] space-x-8'> 
      <div className='flex flex-col space-y-6'>
        <div className='flex items-center space-x-2'>
          <div className="w-20 h-px bg-purple-500"></div>
          <h6 className='text-purple-500'>Ezgi Karaca</h6>
        </div>
        <h1 className='text-4xl font-semibold'>Creative thinker, Minimalism lover</h1>
        <p className='text-lg max-w-lg'>Hi, I’m Ezgi. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
        <div className='flex space-x-4'>
          <button className='px-6 py-2 bg-white border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition'>Hire me</button>
          <button className='px-6 py-2 bg-white border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition'><span></span>Github</button>
          <button className='px-6 py-2 bg-white border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition'><span></span>LinkedIn</button>
        </div>
      </div>
      <img className="w-1/3 rounded-lg mt-10" src={ezgi}/>
    </div>
  )
}

export default Main;