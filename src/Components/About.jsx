import React from 'react'
import chooseus from "../Assets/chooseus.jpg"
import { AiOutlineSetting } from "react-icons/ai"
import { RiBattery2ChargeLine } from "react-icons/ri"
import { SlEnergy } from "react-icons/sl"
import aboutus from "../Assets/aboutus.jpg"
import sir from "../Assets/sir.jpg"
import Testimolial from './Testimolial'

const About = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </nav>
            <img src={aboutus} alt=".." className="roof" />

            <div className="us">
                <h1 className="head">About Us</h1>
            </div>
            <img className="img1 rounded aos-init " data-aos="fade-left" data-aos-duration="1000" src={chooseus} alt="img.." />
            <div className="wholes aos-init " >
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

            <section className="kl pb-2 bg-gray aos-init " data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="fd container">
                    <div className="df row">
                    <h2 className="ceos pl-2 ">CEO's Message</h2>
                        <div className="col-md-3">
                            <img alt="" src={sir} className="imgs-fluids rounded" />
                            <p className="mt-3"><strong className="imgs-fluid">Akshat Jain </strong><span className="imgs-fluid d-block">CEO, KLK Ventures Pvt. Ltd.</span></p>
                            <a className="btn btn-sm btn-outline-dark mx" href="https://www.linkedin.com/in/jnakshat/"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                        </div>
                        <div className="detail col-md-9">
                            <p className="my-2"><span className="details" >India has pledged to reduce carbon emissions at multiple climate forums and only recently reiterated its commitment in the United Nations Climate Change Conference, more commonly referred to as COP26. India targets to meet 50% of its energy requirements from renewable energy by 2030. We at the KLK Ventures Pvt. Ltd. see it as our responsibility to help India fulfill these pledges.</span></p>
                            <p className="my-2"><span className="details"><strong>At KLK Ventures Pvt. Ltd., we are committed to playing a pivotal role in making solar energy affordable and accessible to all.</strong></span></p>
                            <p className="my-2"><span className="details">KLK Ventures formerly known as “KL Khanna Gear Industries Pvt. Ltd.” Known for manufacturing heavy Industrial Gears. Soon joined the organization renamed as KLK Ventures Pvt Ltd. and further diversified their portfolio to include Heavy Engineering & Energy Conversation with his leadership experienced CEO with a demonstrated history of working in different industries..</span></p>
                            <p className="my-2"><span className="details">Introduced battery manufacturing plant and in-house testing facility in 2018. With his strong entrepreneurial skills in energy sector, Import-Export, Accounting, Trading, Strategic Planning and Business development, today KLK is a preferred energy partner for Energy Storage.</span></p>
                            <p className="my-2"><span className="details">Efficient lighting and Innovative Solar Solutions in various government, PSUs and private organizations. he is actively involved to provide innovative energy solutions for rural development.</span></p>
                            {/* <p className="mt-4"> */}
                            {/* <a className="bg-gradient p-3 btn-white" href="/-/media/Project/AdaniSolar/About-Us/Message/ceoSolar.jpg?la=en&amp;hash=C590E815E26BDA84D9D91355DCC28291"><em className="fa fa-download mr-2"></em>Download high resolution image</a></p> */}
                        </div>
                    </div>
                </div>
            </section>
          
          <Testimolial/>
    
        </>
    )
}

export default About
