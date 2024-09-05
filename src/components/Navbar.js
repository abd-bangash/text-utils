import React from 'react'
import PropTypes from 'prop-types'
import Palette from './Palette'
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb } from "react-icons/hi";


function Navbar  (props) {
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}` }>
  <div className="container-fluid">
    <Link className="navbar-brand fs-4" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.about}</Link>
        </li>
      </ul>
        {/* <div className='form-check form-switch'>
          <input className="form-check-input text-light" type="checkbox" id="flexSwitchCheckDefault" onClick={props.handleMode} />
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}htmlFor="flexSwitchCheckDefault"></label>
        </div> */}
      <Palette mode={props.mode} handlePalette1={props.handlePalette1} handlePalette2={props.handlePalette2} handlePalette3={props.handlePalette3} handlePalette4={props.handlePalette4} />
        <button type="button" className={`btn text-${props.mode==='light'?'dark':'light'} h-25 `}onClick={props.handleMode} ><HiOutlineLightBulb /></button>
    </div>
  </div>
</nav>
   </>
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"Text Utils",
  about:"About Us"
}
export default Navbar;