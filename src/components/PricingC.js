import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyle.css'

function PricingC() {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3> -- Basic --</h3>
          <span className='bar'></span>
          <p className='btc'> 1 BTC </p>
          <p> -- 3 Days --</p>
          <p> -- View --</p>
          <p> -- Featured --</p>
          <p> -- Private Quarters --</p>
          <Link to={'/contact'} className='btn'> Book</Link>
        </div>
        <div className='card'>
          <h3> -- Suite --</h3>
          <span className='bar'></span>
          <p className='btc'> 1 BTC </p>
          <p> -- 7 Days --</p>
          <p> -- View --</p>
          <p> -- Featured --</p>
          <p> -- Private Quarters --</p>
          <Link to={'/contact'} className='btn'> Book</Link>
        </div>
        <div className='card'>
          <h3> -- VIP --</h3>
          <span className='bar'></span>
          <p className='btc'> 1 BTC </p>
          <p> -- 10 Days --</p>
          <p> -- View --</p>
          <p> -- Featured --</p>
          <p> -- Private Quarters --</p>
          <Link to={'/contact'} className='btn'> Book</Link>
        </div>
      </div>
    </div>
  )
}

export default PricingC