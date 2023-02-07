import React from 'react'
import { Link } from 'react-router-dom';
import klklogo from "../Assets/klklogo.png"
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <>
            <footer className="site-footer my-3">
                <div className="wave-bg">
                    <img width="1868" height="253" src="https://hookagency.com/wp-content/themes/hookagency/svg/footer-wave.svg" alt="wave pattern" aria-hidden="true" className="perfmatters-lazy entered pmloaded" data-src="https://hookagency.com/wp-content/themes/hookagency/svg/footer-wave.svg" data-ll-status="loaded" />
                </div>

                <div className="foot text-center text-lg-start text-muted">
                    <section className="sect d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
                        <div className="my-5 mx-4 text-white">
                            <span className="get">Get connected with us on social networks:</span>
                        </div>

                        <div className="logos mx-4">
                            <a
                                class="facebook btn text-white btn-floating m-1"
                                href="/"
                                role="button"
                            ><i class="fa fab fa-facebook-f"></i
                            ></a>

                            <a
                                class="twitter btn text-white btn-floating m-1"
                                href="/"
                                role="button"
                            ><i class="fa fab fa-twitter"></i
                            ></a>

                            <a
                                class="google btn text-white btn-floating m-1"
                                href="/"
                                role="button"
                            ><i class="fa fab fa-google"></i
                            ></a>

                            <a
                                class="instagram btn text-white btn-floating m-1"
                                href="/"
                                role="button"
                            ><i class="fa fab fa-instagram"></i
                            ></a>

                            <a
                                class="linkedin btn text-white btn-floating m-1"
                                href="/"
                                role="button"
                            ><i class="fa fab fa-linkedin-in"></i
                            ></a>
                        </div>
                    </section>


                    <section className="">
                        <div className="contai text-center text-white text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-2 col-lg-4 col-xl-2 mx-auto mb-1">
                                    <h6 className="ventures text-uppercase fw-bold mb-1">
                                         KLK Ventures Pvt Ltd.
                                    </h6>
                                    <p>
                                        <img className="klk my-4 rounded" src={klklogo} alt="" />
                                    </p>
                                </div>

                                <div className="col-md-2 mb-1">
                                    <h6 className="location text-uppercase my-2">
                                        Location
                                    </h6>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.4407251822977!2d77.35667251320181!3d28.60333306087264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56c15555555%3A0xe34818fa9bfd0b86!2sKLK%20Ventures%20Private%20Limited!5e0!3m2!1sen!2sin!4v1675145337817!5m2!1sen!2sin"
                                     title="myframe" className="map rounded" width="230" height="190" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
                                    <h6 className="use text-uppercase fw-bold mb-1">
                                        Useful links
                                    </h6>
                                    <p className="usefull">
                                        <Link to="/" className="text-reset">HOME</Link>
                                    </p>
                                    <p className="usefull">
                                        <Link to="whysolar" className="text-reset">WHY SOLAR</Link>
                                    </p>
                                    <p className="usefull">
                                        <Link to="about" className="text-reset">ABOUT US</Link>
                                    </p>
                                    <p className="usefull">
                                        <Link to="/csr" className="text-reset">CSR</Link>
                                    </p>
                                    <p className="usefull">
                                        <Link to="/energy" className="text-reset">ENERGY</Link>
                                    </p>
                                    <p className="usefull">
                                        <Link to="contact" className="text-reset">CONTACT</Link>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-1">
                                    <h6 className="contacts text-uppercase fw-bold mb-1">Contact</h6>
                                    <p className="address my-2"><i class="fa-sharp fa-solid fa-location-dot"></i> A-52, Sector-58, Distt. Gautam Buddha Nagar, Noida-201301 (U.P.)</p>
                                    <p className="address my-2"><i class="fa-sharp fa-solid fa-location-dot"></i> 1517, Hemkund Chamber, 89, Nehru Place, New Delhi-110019</p>
                                    <p className="mail my-2">
                                        <i className="fas fa-envelope me-3"></i>
                                        info@klkindia.com
                                    </p>
                                    <p className="name my-1"><i className="fas fa-phone me-3"></i> +0120 4549038</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="copy text-center my-5" >
                    © KLK Ventures Pvt Ltd, All Right Reserved.
                    </div>
                </div>

                <ScrollToTop smooth top="20" width="37" /> 
            </footer>
        </>
    )
}

export default Footer;
