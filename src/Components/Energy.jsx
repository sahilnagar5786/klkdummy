import React from 'react'
import roofsolar3 from "../Assets/roofsolar3.mp4"
import energylogo1 from "../Assets/energylogo1.webp"
import energylogo3 from "../Assets/energylogo3.webp"
import energylogo4 from "../Assets/energylogo4.webp"
import energylogo5 from "../Assets/energylogo5.webp"
import energylogo8 from "../Assets/energylogo8.webp"
import energylogo9 from "../Assets/energylogo9.webp"
import energylogo11 from "../Assets/energylogo11.webp"
import spower from "../Assets/spower.png"
import spower1 from "../Assets/spower1.jpeg"
import spower2 from "../Assets/spower2.jpg"
import { Link } from 'react-router-dom'


const Energy = () => {
    return (
        <>
            <div className="mains">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Energy Division</li>
                    </ol>
                </nav>
                <h1>ENERGY DIVISION</h1>
                <video src={roofsolar3} className="enee" autoPlay="true" loop="true" />
            </div>

            


            <div className="contr">
                <div className="containersx">
                    <div className="energy">
                        <h4 className="divi">ENERGY DIVISION</h4>
                        <h1 className="clean">Clean Energy For A Bright Future</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="qw row hy-3">
                        <div className="card1 col-md-4 h-110 aos-init " data-aos="fade-up-left" data-aos-duration="1000">
                            <img src={spower} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">SOLAR POWER SYSTEMS</h5>
                                <p className="card-text">Solar Photovoltaic (PV) cells or modules generate electricity
                                    from sunlight, which can be fed into the mains electricity supply of a home or industry
                                    or building or sold to the public...</p>
                                <Link className="btn btn-outline-dark" to="/solar">READ MORE</Link>
                            </div>
                        </div>
                        <div className="card2 col-md-4 h-110 aos-init " data-aos="fade-down" data-aos-duration="1000">
                            <img src={spower1} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">LIGHTING DIVISION</h5>
                                <p className="card-text">We have different kinds of lights for various uses like light for
                                    street, home etc… we do have the various kind of configuration in this like 12 watt 15 watt,
                                    18 watt...</p>
                                <Link className="btn btn-outline-dark" to="/light">READ MORE</Link>
                            </div>
                        </div>
                        <div className="card3 col-md-4 h-100 aos-init " data-aos="fade-up-right" data-aos-duration="1000">
                            <img src={spower2} className="card-img-top rounded" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">SOLAR WATER SYSTEMS</h5>
                                <p className="card-text">Solar water pumping systems are practical and affordable solution used
                                    to provide reliable and cost effective water supplies where there is no grid power or where power
                                    supply is unreliable...</p>
                                <Link className="btn btn-outline-dark my-3" to="/waterpump">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="headi">
                <h2>OUR ENERGY PARTNERS</h2>
            </div>
            <div className="all">
                <div className="lefter">
                    <div className="texts"><img src={energylogo1} alt=".." className="logo1" /></div>
                </div>
                <div className="lefter">
                    <div className="texts"><img src={energylogo3} alt=".." className="logo3" /></div>
                </div>
                <div className="left">
                    <div className="texts"><img src={energylogo4} alt=".." className="logo4" /></div>
                </div>
                <div className="center">
                    <div className="texts"><img src={energylogo11} alt=".." className="logo11" /></div>
                    <div className="explainer">Hover Me</div>
                    <div className="textst">Our Energy Partners</div>
                </div>
                <div className="right">
                    <div className="texts"><img src={energylogo5} alt=".." className="logo5" /></div>
                </div>
                <div className="righter">
                    <div className="texts"><img src={energylogo8} alt=".." className="logo8" /></div>
                </div>
                <div className="righter">
                    <div className="texts"><img src={energylogo9} alt=".." className="logo9" /></div>
                </div>
            </div>


        </>
    )
}

export default Energy