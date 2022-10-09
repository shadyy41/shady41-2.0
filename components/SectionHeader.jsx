import React from 'react'

const SectionHeader = ({text}) => {
  return (
    <header className="w-full flex items-center justify-center mb-12 lg:mb-24">
      <h1 className="text-3xl md:text-4xl text-blue-100 font-medium w-fit after:content-[''] after:bg-blue-600/75 after:w-full after:h-3 after:absolute after:bottom-0 after:left-0 px-1 after:-z-10 hover:after:h-full after:transition-all relative focus:outline-none focus:after:h-3 focus:text-blue-100 hover:text-blue-100">
        {text}
      </h1>
    </header>
  )
}

export default SectionHeader