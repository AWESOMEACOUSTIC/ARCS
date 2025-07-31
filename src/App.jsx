import React from 'react'
import LandingPage from './pages/LandingPage'
import About from './sections/About'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import HackBattle from './sections/HackBattle'
import Cicada from './sections/Cicada'
import HeroMaskedText from './sections/HeroMaskedText'

function App() {
  return (
    <div className=''>
      <LandingPage/>
      <About />
      <HeroMaskedText/>
      <FAQ />
      <Contact />
      <HackBattle />
      <Cicada />
    </div>
  )
}

export default App