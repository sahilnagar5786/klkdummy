import React, {useState} from 'react'
import header1 from "../Assets/header1.png"
import header2 from "../Assets/header2.png"
import header3 from "../Assets/header3.png"
import Particlesconfi from './Particlesconfi'
import { GiSolarPower } from "react-icons/gi"
import { BsFillLightbulbFill } from "react-icons/bs"
import { AiOutlineSetting } from "react-icons/ai"
import { FaHandHoldingWater } from "react-icons/fa"
import { VscAccount } from "react-icons/vsc"
import { SlEnergy } from "react-icons/sl"
import { RiBattery2ChargeLine } from "react-icons/ri"
import chooseus from "../Assets/chooseus.jpg"
import spower from "../Assets/spower.png"
import spower1 from "../Assets/spower1.jpeg"
import spower2 from "../Assets/spower2.jpg"
import Choose from "../Components/Choose.jsx"
import CountUp  from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-router-dom'


const Home = () => {

  const [counterOn, setcounterOn] = useState(false);


  return (<>
    <Particlesconfi />
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
      <div className="carousel-item">
          <img src={header2} className=" imgs d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="heads2">KLK VENTURES PRIVATE LIMITED</h1>
            <p className="paras2">Solar energy, the smartest way to power your house.</p>
          </div>
        </div>
        <div className="carousel-item active">
          <img src={header1} className="imgs  d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={header3} className=" imgs d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="head3">KLK VENTURES PRIVATE LIMITED</h1>
            <p className="para3">A New Perspective of shine For the generations to come.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container-xxl py-5 aos-init " data-aos="fade-up" data-aos-duration="500">
      <div className="containera">
        <div className="text-center mx-auto mb-5 ">
          <h1 className="mb-4 my-2">Our Milestones</h1>
        </div>
        <ScrollTrigger onEnter={()=> setcounterOn(true)} onExit={()=>setcounterOn(false)}>
        <div className="row g-5 my-2">
          <div className="col-md-6 col-lg-3" >
            <div className="d-flex align-items-center mb-4">
              <h1 className="gi_1 mb-0"><GiSolarPower className="gi1" />+{counterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}</h1>
            </div>
            <h5 className="mb-2 mx-5">SOLAR ROOFTOP SYSTEMS (kW)</h5>
          </div>
          <div className="col-md-6 col-lg-3" >
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0"><BsFillLightbulbFill className="gi" />+{counterOn && <CountUp start={0} end={60000} duration={2} delay={0}/>}</h1>
            </div>
            <h5 className="mb-2">SOLAR STREET LIGHTS (nos.)</h5>
          </div>
          <div className="col-md-6 col-lg-3 " >
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0"><FaHandHoldingWater className="gi" />+{counterOn && <CountUp start={0} end={400} duration={2} delay={0}/>}</h1>
            </div>
            <h5 className="mb-2">SOLAR WATER SUPPLY SYSTEMS (nos.)</h5>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0"><VscAccount className="gi" />+{counterOn && <CountUp start={0} end={200} duration={2} delay={0}/>}</h1>
            </div>
            <h5 className="mb-2">SATISFIED CLIENTS (nos.)</h5>
          </div>
        </div>
        </ScrollTrigger>
      </div>
    </div>

    
    <div className="us">
      <h1 className="head">About Us</h1>
    </div>
    <img className="img1 rounded aos-init " data-aos="fade-left" data-aos-duration="1000" src={chooseus} alt="img.." />
    <div className="whole aos-init " >
      <div className="about">
        <h2 className="head2">30+ Years Experience In<br />Different Industry.</h2>
        <div className="paras">
          <AiOutlineSetting className="bs" /><h3 className="para1">Gear Energy</h3>
          <RiBattery2ChargeLine className="bs" /> <h3 className="para2">Battery manufacturing</h3>
          <SlEnergy className="bs" /> <h3 className="para3">Renewable Energy</h3>
        </div>
      </div>
      <div className="cards">
        <div className="card-body">
          <p className="card-text">Formely known as "K.L. Khanna Gears Industries Pvt. Ltd." was
            incorporated with state of art plant to build Industrial Gear. We started our operations
            with a well-built and a sturdy manufacturing unit, equipped with advanced machines to
            manufacture heavy Industrial Gears used in Automobile, Sugar, Cement and Sponge-Iron Industry..</p>
        </div>
        <button type="button" className="btn btn-sm btn-outline-dark">Explore More</button>
      </div>
    </div>

    <div className="cont">
      <div className="containersx">
        <div className="energy">
          <h4 className="divi">ENERGY DIVISION</h4>
          <h1 className="clean">Clean Energy For A Bright Future</h1>
        </div>
      </div>

      <div className="container">
        <div className="qw gy-3 row">
          <div className="card1 col-md-4 h-110 aos-init " data-aos="fade-up-left" data-aos-duration="1000">
            <img src={spower} className="card-img-top rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title">SOLAR POWER SYSTEMS</h5>
              <p className="card-text" >Solar Photovoltaic (PV) cells or modules generate electricity
                from sunlight, which can be fed into the mains electricity supply of a home or industry
                or building or sold to the public...</p>
              <Link className="btn btn-sm btn-outline-dark" to="/solar">READ MORE</Link>
            </div>
          </div>
          <div className="card2 col-md-4 h-110 aos-init " data-aos="fade-down" data-aos-duration="1000">
            <img src={spower1} className="card-img-top rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LIGHTING DIVISION</h5>
              <p className="card-text">We have different kinds of lights for various uses like light for
                street, home etc… we do have the various kind of configuration in this like 12 watt 15 watt,
                18 watt...</p>
              <Link  className="btn btn-sm btn-outline-dark" to="/light">READ MORE</Link>
            </div>
          </div>
          <div className="card3 col-md-4 h-100 aos-init " data-aos="fade-up-right" data-aos-duration="1000">
            <img src={spower2} className="card-img-top rounded" alt="..." />
            <div className="card-body">
              <h5 className="card-title">SOLAR WATER SYSTEMS</h5>
              <p className="card-text">Solar water pumping systems are practical and affordable solution used
                to provide reliable and cost effective water supplies where there is no grid power or where power
                supply is unreliable...</p>
              <Link className="btn btn-sm btn-outline-dark my-3" to="/waterpump">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Choose />


  </>
  )
}

export default Home
