import React from 'react'
import klklogo from '../Assets/klklogo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div>
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="logok" href="/"><img src={klklogo} alt="logo.." /></a>
    <ul className="navbar-nav ms-auto mb-lg-0">
      <div className="navbar-nav">
        <Link className="nav-link" to="/" >HOME</Link>
        <Link className="nav-link" to="/whysolar">WHY SOLAR</Link>
        <Link className="nav-link" to="/about">ABOUT</Link>
        <Link className="nav-link" to="/success">SUCCESS STORY</Link>
        <Link className="nav-link" to="/csr">CSR</Link>
        <Link className="nav-link" to="/energy">ENERGY</Link>
        <Link className="nav-link" to="contact">CONTACT</Link>
      </div>
      </ul>
    </div>
</nav>
</div> 

 {/* <a className="navbar" href="/"><img src={klklogo} alt="logo.." /></a>
<ul>
   <li><a href="/">Home</a></li>
   <li><a href="/">About</a></li>
   <li><a href="/">Services</a></li>
   <li><a href="/">Portfolio</a></li>
   <li><a href="/">Team</a></li>
   <li><a href="/">Contact</a></li>
</ul> */}
</>
)
}

export default Header