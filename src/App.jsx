import React from 'react'
import Hero from './pages/Hero'
import About from './sections/About'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import HackBattle from './sections/HackBattle'
import Cicada from './sections/Cicada'

function App() {
  return (
    <div className=''>
      <Hero />
      <About />
      <FAQ />
      <Contact />
      <HackBattle />
      <Cicada />
    </div>
  )
}

export default App