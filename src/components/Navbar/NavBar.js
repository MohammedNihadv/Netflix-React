import React from 'react'
import "./NavBar.css";
function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-logo" />
        <div>
            <button className='login'>Sign In</button>
            <button className='signup'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar