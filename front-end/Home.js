import React from 'react'
import dp from './dp.jpg';

const Home = () => {
  return (
    <div>
        
        <div className='hdiv'>
            <div>
            <h1 className='hheading'>Find Your Dream job</h1>
            <p className='hpara'>We will help you to find a <br></br>good job</p>
            </div>
            <img src={dp} className='himg'></img>
        </div>
      
    </div>
  )
}

export default Home
