import React from 'react'
import spower5 from "../Assets/spower5.jpg"
import spower4 from "../Assets/spower4.jpg"
import file2 from "../Assets/file2.mp4"


const Waterpump = () => {
    return (
        <>
            <div className="mains">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Solar Water Pump</li>
                    </ol>
                </nav>
                <h1>SOLAR WATER PUMP</h1>
                <img src={spower5} alt="" className="ener" />
            </div>

            <div className="pump">
                <div className="pumps aos-init" data-aos="fade-up-right" data-aos-duration="2000"  autoPlay="true" loop="true">
                    <h1>Solar Water Pump(JAL SHAKTI)</h1>
                    <p>Solar water pumping systems are practical and affordable solution used to provide reliable
                        and cost effective water supplies where there is no grid power or where power supply is unreliable.</p>
                    <p>Solar pumps operates anywhere the sun shines. The system productivity increases during summer when
                        the water requirement is usually greater.</p>
                    <p>Requires minimal service and maintenance.</p>
                    <p>Virtually free to operate, compared to the cost of diesel-powered generators and grid electricity
                        which is constantly increasing.</p>
                    <p>Possible application includes livestock- cattle watering and fish farming; agriculture- irrigating
                        and crop watering; recreational activities- swimming pool circulation pumps, spa ; residential and
                        industrial water supply.</p>
                    <p>Water Pumping can be by submersible pumps, commonly used for deeper wells, where surface pumps cannot
                        be used because the water level is too deep below ground level (below approximately 6 meters depth).
                        These borehole pumps are specially designed to have a small outside diameter so they can be suspended
                        below the water level in the well and connected to an output pipe that extends up to the surface. The
                        right pump for each application will depend on the required pumping rates and pumping height and distance.​</p>
                </div>
                <video src={file2} className="video3 aos-init" data-aos="fade-up-left" data-aos-duration="2000"  autoPlay="true" loop="true"/>
            </div>


            <div className="work">
                <div className="works aos-init" data-aos="zoom-in-up" data-aos-duration="2000">
                    <h1>How Does Solar Pump Work ?</h1>
                    <img src={spower4} alt=".." />
                </div>
            </div>
        </>
    )
}

export default Waterpump