import React from 'react'
import animatedimg6 from "../Assets/animatedimg6.jpg"
import animatemedia3 from "../Assets/animatemedia3.gif"

const Contact = () => {
  return (<>
   <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
  </ol>
</nav>
    <img className="anim" src={animatedimg6} alt="" />
    <div className="Contact">
        <main>
            <h1 className="contactus">Contact Us</h1>
            <form>
                <div>
                    <img className="con" src={animatemedia3} alt="" />
                    <label></label>
                    <input type="text" required placeholder="Your Name"/>
                </div>
                <div>
                    <label></label>
                    <input type="email" required placeholder="Your Email"/>
                </div>
                <div>
                    <label></label>
                    <input type="text" required placeholder="Your Phone"/>
                </div>
                <div>
                    <label></label>
                    <input type="text" required placeholder="Subject"/>
                </div>
                <div>
                    <label></label>
                    <input type="text" required placeholder="Message.."/>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </main>
    </div>
    </>
  )
}

export default Contact