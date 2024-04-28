import { useState } from 'react'

import Hero from '../src/components/hero/Hero'
import Places from './components/places/Places'
import HomePage from './pages/homepage/HomePage'
import DiscoverPlaces from './pages/discoverPlaces/DiscoverPlaces'
import Experience from './components/experience/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HomePage />
      {/* <DiscoverPlaces/> */}
      <Experience />
      
         
      </div>
    
     
    </>
  )
}

export default App
