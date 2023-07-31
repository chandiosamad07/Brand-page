import React from 'react'

function Hero() {
  return (
    <main className='hero'>
        <div className='hero-content'>
            <h1>
                YOUR FEET  DESERVE THE BEST
            </h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            Shop Now Category Also Available On
            </p>
            <div className ='herobtn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
            </div>
            <div className='shoping'>
                <p> 
                    Also Available on
                </p>
            <div className='brand-icon'>
                <img src='src/assets/amazon.png'></img>
                <img src='src/assets/flipkart.png'></img>
            </div>
            </div>
            </div>
        <div className='hero-image'>

        <img src='src/assets/shoe_image.png'></img>
        </div>
    </main>
  )
}

export default Hero
