import React from 'react'
import Slider from './Slider/Slider'
import Card from './Cards/Card'
import Cards from './Cards/Cards'

const Home = () => {
  return (

    <div>
      
{/* Slider  component available  */}

      <Slider />


{/* Some  cards component available   */}

    <section id='cards'>
      <h1 className='text-center py-4 display-3'>Our Service </h1>
      <Cards />
    </section>
    
  </div>
  )
}

export default Home