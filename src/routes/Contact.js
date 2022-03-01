import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading='CONTACT' text='Contact GLX Travel'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact