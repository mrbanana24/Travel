import React from 'react'
import './TrainingStyle.css'

import luna from '../assets/luna.jpg'
import satelite from '../assets/satelite.jpg'
import { Link } from 'react-router-dom'


const TrainingC = () => {
  return (
    <div className='traning'>
      <div className='left'>
        <h1> Training </h1>
        <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
        <Link to='./contact'> <button className='btn'> Contact </button> </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={luna} className='img' alt='' />
          </div>
          <div className='image-stack bottom'>
            <img src={satelite} className='img' alt='' />
          </div>
       </div>
      </div>
    </div>
  )
}

export default TrainingC