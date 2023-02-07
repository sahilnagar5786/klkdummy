import React from 'react'
import Soal from "../Assets/Soal.avif"
import scr1 from "../Assets/scr1.jpg"
import a from "../Assets/a.gif"
import b from "../Assets/b.gif"
import c from "../Assets/c.gif"
import d from "../Assets/d.gif"
import e from "../Assets/e.gif"
import csr1 from "../Assets/csr1.avif"
import csr2 from "../Assets/csr2.jpg"
import csr3 from "../Assets/csr3.jpg"
import csr4 from "../Assets/csr4.jpg"
import csr5 from "../Assets/csr5.jpg"
import csr6 from "../Assets/csr6.jpg"
import csr7 from "../Assets/csr7.jpg"
import csr8 from "../Assets/csr8.jpg"
import csr9 from "../Assets/csr9.avif"


const Csr = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">CSR</li>
        </ol>
      </nav>
      <img src={Soal} alt="" className="soal" />
      <h1 className="corp">CORPORATE SOCIAL RESPONSIBILTY</h1>

      <div>
        <div className="apple container">
          <h3 className="build">BUILDING A BETTER PLANET</h3>
          <div className="jkl row flex-row-reverse justify-content-center">
            <div className="col-md-5 aos-init" data-aos="fade-up-left" data-aos-duration="3000" >
              <div className="video-row">
                <img src={scr1} alt='..' className="video-row rounded"/>
              </div>
            </div>
            <div className="col-md-5 ">

              <div className="csr-libox aos-init " data-aos="fade-up-right" data-aos-duration="3000" >
                <div className="sreenimg">
                  <img src={a} alt='..' className="gif" />
                  <div className="tex">Energy For Brighter Tomorrow ✨</div>
                </div>
                <div className="sreenimg">
                  <img src={b} alt='..' className="gif" />
                  <div className="tex">Soon all the oil will be gone, Think Solar 🌞</div>
                </div>
                <div className="sreenimg">
                  <img src={c} alt='..' className="gif" />
                  <div className="tex">Our goal is to have a safe and clean energy 🔋</div>
                </div>
                <div className="sreenimg">
                  <img src={d} alt='..' className="gif"/>
                  <div className="tex">Small steps can lead to a clean energy future 👣</div>
                </div>
                <div className="sreenimg">
                  <img src={e} alt='..' className="gif"/>
                  <div className="tex">Your one-stop-shop for solar Pannels 📱</div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="main aos-init " data-aos="fade-up" data-aos-duration="2000">
           <h1>Portfolio</h1>
           <h2>Check Our Portfolio</h2>
      </div>
      <div className="images aos-init " data-aos="fade-up" data-aos-duration="2000">
        <img src={csr1} alt="" />
        <img src={csr5} alt="" />
        <img src={csr6} alt="" />
        <img src={csr9} alt="" />
        <img src={csr7} alt="" />
        <img src={csr2} alt="" />
        <img src={csr3} alt="" />
        <img src={csr4} alt="" />
        <img src={csr8} alt="" />
      </div>
    </>
  )
}

export default Csr
