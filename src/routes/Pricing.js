import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingC from '../components/PricingC'
import Heroimage from '../components/Heroimage'


const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading='PRICING' text='Choose your trip'/>
      <PricingC/>
      <Footer/>
    </div>
  )
}

export default Pricing