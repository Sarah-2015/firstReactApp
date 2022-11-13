import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-3 fixed-top">
    <div className="container">
      <h4 className="navbar-brand" >START REACT</h4>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
          <li className="nav-item">
            <Link className="nav-link text-white  py-3 px-0 px-lg-3 rounded js-scroll-trigger" aria-current="page" to={"portfolio"} >PORTFOLIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger" aria-current="page" to={"about"} >ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger" aria-current="page" to={"contact"} >CONTACT</Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}




