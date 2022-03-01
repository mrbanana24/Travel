import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import TrainingC from '../components/TrainingC'

const Training = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading='TRADING' text='Pre-Flight & In-Flight Training'/>
      <TrainingC/>
      <Footer/>
    </div>
  )
}

export default Training