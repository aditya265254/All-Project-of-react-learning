import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquess from './components/Marquess'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-800 font-["satoshi"] text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquess/>
    </div>
  )
}

export default App