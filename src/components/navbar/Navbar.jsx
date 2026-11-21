import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [user, setuser] = useState(true)

  return (
    <nav>
      <div className="left">
        <a href="/" className='logo'>
          <img src="/logo.png" alt="Logo" />
          <span>RealPromo</span>
        </a>
        <a href="/" className='link'>Home</a>
        <a href="/" className='link'>About</a>
        <a href="/" className='link'>Contact</a>
        <a href="/" className='link'>Agent</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img height={100} src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <Link className='profile' to="/profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a className='login' href="/">SignIn</a>
            <a className='register' href="/">SignUP</a>
          </>
        )}

        <button
          type="button"
          className="menuIcon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src="/menu.png" alt="" />
        </button>
      </div>
      <div className={open ? "menu active" : "menu"} onClick={() => setOpen(false)}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
        <a href="/">SignIn</a>
        <a href="/">SignUP</a>
      </div>
    </nav>
  )
}

export default Navbar
