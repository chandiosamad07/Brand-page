import React from 'react'

function Nav() {
  return (
    <div>
      <nav>
        <div className='logo'>
        <img src='src/assets/brand_logo.png'></img>
        </div>

        <ul>
            <li href = "#">Menu</li>
            <li href = "#">Location</li>
            <li href = "#">About</li>
            <li href = "#">Contact</li>
        </ul>

        <button>
            Login
        </button>
      </nav>
    </div>
  )
}

export default Nav
