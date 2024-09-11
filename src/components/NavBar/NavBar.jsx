import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <i className="fas fa-solid fa-magnifying-glass"></i>
        <p>Children</p>
        <i className="fas fa-regular fa-bell"></i>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
    </div>
  )
}

export default NavBar
