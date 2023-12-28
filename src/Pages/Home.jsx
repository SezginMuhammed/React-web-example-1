import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-section">
      <p>Spariş Vermek İstiyorsan Tıkla</p>
      <Link to="/menu">
      <button className='home-btn'>Tıkla </button>
      </Link>
      </div>
    

    </div>
  )
}

export default Home