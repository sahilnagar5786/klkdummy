import React from 'react'
import abouts from "../Assets/abouts.jpg"
import {BsCheckCircleFill,BsPersonCheckFill} from "react-icons/bs"
import {IoIosConstruct} from "react-icons/io"
import {RiCustomerServiceFill} from "react-icons/ri"



const Choose = () => {
    return (
        <>
        <div class="co container-fluid  overflow-hidden ">
        <div class="io container feature px-lg-0">
            <div class="ts row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 aos-init " data-aos="fade-up-right" data-aos-duration="1000">
                    <div class="p-lg-5 ps-lg-0">
                        <h6 class="pb-4 my-3">Why Choose Us!</h6>
                        <h1 class="comp mb-3 pb-3">Complete Commercial & Residential Solar Systems</h1>
                        <p class="jh mb-3 pb-2">Our presence in the solar manufacturing sector contributes to India's
                                     climate goals and bolsters its vision of embracing a healthier energy mix.</p>
                        <div class="ts row g-4">
                            <div class="col-6 pb-3">
                                <div class="coin d-flex align-items-center">
                                    <div class="btn-lg-square ">
                                    <BsCheckCircleFill className="sticker"/>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-1">Quality</p>
                                        <h5 class="mb-2">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="coin d-flex align-items-center">
                                    <div class="btn-lg-square ">
                                    <BsPersonCheckFill className="sticker"/>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-1">Expert</p>
                                        <h5 class="mb-2">Workers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="coin d-flex align-items-center">
                                    <div class="btn-lg-square ">
                                    <IoIosConstruct className="sticker"/>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-1">Free</p>
                                        <h5 class="mb-2">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="coin d-flex align-items-center">
                                    <div class="btn-lg-square ">
                                    <RiCustomerServiceFill className="sticker"/>  
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-1">Customer</p>
                                        <h5 class="mb-2">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0">
                    <div class="position-relative">
                        <img class="position-absolute rounded  aos-init " src={abouts} alt="" data-aos="fade-up-left" data-aos-duration="2500"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
    )
}

export default Choose