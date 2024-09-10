'use client'

import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import stack from "../Assets/stack"

const Stacks = () => {
  return (
    <div className='flex flex-col items-center justify-center font-protest'>
      <div className='font-protest text-2xl flex items-start font-semibold justify-start'>Stack</div>
    <div className='w-full min-h-[10vh] flex items-center justify-center flex-wrap gap-4 mt-5 px-[20vw]'>
      {stack.map((stack) => {
        return (
          <div onClick={() => {window.open(`${stack.doc}`)}} key={stack.name} className='relative py-2 bg-white w-[11vw] rounded-full text-black flex items-center justify-center group cursor-pointer'>
            {/* Icon */}
            <span className='transition-opacity duration-300 group-hover:opacity-0'>{stack.icon}</span>
            
            
            {/* Text that replaces the icon on hover */}
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-protest'>
              {stack.name}
            </div>
          </div>
        )
      })}  
    </div>
    </div>
  )
}

export default Stacks
