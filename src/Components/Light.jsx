import React from 'react'
import light2 from "../Assets/light2.jpg"
import WATT15 from "../Assets/WATT15.png"
import WATT12 from "../Assets/WATT12.png"
import WATT_12 from "../Assets/WATT_12.png"
import WATT9 from "../Assets/WATT9.png"
import WATT25 from "../Assets/WATT25.png"
import WATT18 from "../Assets/WATT18.png"
import WATT7 from "../Assets/WATT7.png"


const Light = () => {
  return (
    <>
      <div className="mains">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">LIGHTING DIVISION</li>
          </ol>
        </nav>
        <h1>LIGHTING DIVISION</h1>
        <img src={light2} alt="" className="lig" />
      </div>

      <div className="div aos-init" data-aos="fade-up" data-aos-duration="2000">
        <h1>LIGHTING DIVISION</h1>
        <p>We have different kinds of lights for various uses like light for street, home etc… we do have
          the various kind of configuration in this like 12 watt 15 watt, 18 watt which contain the remote sansing system.</p>
      </div>
      <div className="light">
        <div className="15 aos-init" data-aos="fade-up-right" data-aos-duration="2000">
          <img src={WATT15} alt="" className="img0" />
          <h1>15 Watt Solar Light</h1>
          <p>This 15watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
        <div className="a12 aos-init" data-aos="fade-up" data-aos-duration="2000">
          <img src={WATT12} alt="" className="img0"/>
          <h1>12 Watt Solar Light with remote sensing system</h1>
          <p>This 12watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination. And with having the
            RMS system you can check the current parameter & current status of the light from your end..</p>
        </div>
        <div className="12_ aos-init" data-aos="fade-up-left" data-aos-duration="2000">
          <img src={WATT_12} alt="" className="img0"/>
          <h1>12 Watt Solar Light</h1>
          <p>This 12watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
        <div className="9 aos-init" data-aos="fade-up-right" data-aos-duration="2000">
          <img src={WATT9} alt="" className="img0" />
          <h1>9 Watt Light</h1>
          <p>This 9watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
        <div className="25 aos-init" data-aos="fade-up" data-aos-duration="2000">
          <img src={WATT25} alt="" className="img0"/>
          <h1>25 Watt Light</h1>
          <p>This 25watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
        <div className="18 aos-init" data-aos="fade-up-left" data-aos-duration="2000">
          <img src={WATT18} alt="" className="img0"/>
          <h1>18 Watt Light</h1>
          <p>This 18watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
        <div className="7 aos-init" data-aos="fade-up-right" data-aos-duration="2000">
          <img src={WATT7} alt="" className="img0"/>
          <h1>7 Watt Light</h1>
          <p>This 7 watt light system is providing required spreaded illumination level with required optics. KLK products are having
            Precise Thermal management for longer life and Precise light spreading angle for required illumination.</p>
        </div>
      </div>
    </>
  )
}

export default Light