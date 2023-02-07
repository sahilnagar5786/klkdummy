import React from 'react'
import client_1 from "../Assets/client_1.png"
import client_4 from "../Assets/client_4.png"
import client_3 from "../Assets/client_3.png"

const Testimolial = () => {
  return (
    <>
      <div className="testmimo aos-init " data-aos="fade-up" data-aos-duration="2000">
        <div className="text-center mx-auto mb-2"  >
          <h1 className="testi mb-3">Testimonial</h1>
          <h1 className="our mb-4">What Our Clients Say!</h1>
        </div>
         <div className="owl-carousel " >
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item cloned aos-init " data-aos="fade-up-right" data-aos-duration="2000">
              <div className="testimonial-item text-center">
              <div className="testimonial-img ">
                <img className="imgf mx-auto rounded-circle" src={client_3} alt='..' />
              </div>
              <div className="testimonial-text text-center rounded p-2">
                <p>Very nice place I like it</p>
                <h5 className="mb-1">TOFIQUE KHAN</h5>
                <span className="fst-italic">KLK Ventures Private Limited</span>
              </div>
            </div>
            </div>
            <div className="owl-item cloned aos-init " data-aos="fade-up-left" data-aos-duration="2000">
              <div className="testimonial-item text-center">
              <div className="testimonial-img ">
                <img className="imgf rounded-circle mx-auto" src={client_1} alt='..' />
              </div>
              <div className="testimonial-texts text-center rounded p-2">
                <p>I was looking into solar energy installations as a way to reduce the very high cost on electric bills and I chose KLK Ventures for the price per energy that I was gonna get. Their people were professional and courteous and the person managing the project kept me informed of what was going on. It was a good experience working with them. KLK Ventures service is outstanding and they delivered good value.</p>
                <h5 className="mb-1">Pranav Shandil</h5>
                <span className="fst-italic">KLK Ventures Private Limited</span>
              </div>
              </div>
              </div>
              <div className="owl-item cloned  aos-init " data-aos="fade-up-right" data-aos-duration="2000">
                <div className="testimonial-item text-center">
                  <div className="testimonial-img ">
                    <img className="imgf rounded-circle mx-auto" src={client_4} alt='..' />
                  </div>
                  <div className="testimonial-text text-center rounded p-2">
                    <p>Good work woth this company And its work with In MW PLANTS.</p>
                    <h5 className="mb-1">Narendra Singh</h5>
                    <span className="fst-italic">KLK Ventures Private Limited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Testimolial