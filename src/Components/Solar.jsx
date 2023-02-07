import React from 'react'
import solar1 from "../Assets/solar1.jpg"
import file1 from "../Assets/file1.mp4"
import roofsolar2 from "../Assets/roofsolar2.mp4"

const Solar = () => {

    return (
        <>
            <div className="mains">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Solar Power Systems</li>
                    </ol>
                </nav>
                <h1>SOLAR POWER SYSTEMS</h1>
                <img src={solar1} alt="" className="ener" />
            </div>
            <div className="system aos-init" data-aos="fade-up" data-aos-duration="2000">
                <h1>Solar Power System</h1>
            </div>
            <div className="systems">
                <div className="do aos-init" data-aos="fade-up-right" data-aos-duration="2000">
                    <h2>What is Solar Power Generating System???</h2>
                    <p>Solar power is the conversion of energy from sunlight into electricity, either directly using
                        photovoltaics (PV) or indirectly using concentrated solar power. Photovoltaic cells convert
                        light into an electric current using the photovoltaic effect.Concentrated solar power systems
                        use lenses or mirrors and solar tracking systems to focus a large area of sunlight to a hot spot,
                        often to drive a steam turbine.</p>
                    <p>Photovoltaics were initially solely used as a source of electricity for small and medium-sized
                        applications, from the calculator powered by a single solar cell to remote homes powered by an
                        off-grid rooftop PV system. Commercial concentrated solar power plants were first developed in
                        the 1980s. Since then, as the cost of solar electricity has fallen, grid-connected solar PV systems
                        have grown more or less exponentially. Millions of installations and gigawatt-scale photovoltaic
                        power stations continue to be built, with half of new generation capacity being solar in 2021..</p>
                </div>
                <video src={file1} className="video1 aos-init" data-aos="fade-up-left" data-aos-duration="2000" autoPlay="true" loop="true" />
            </div>
            <div className="systemse">
            <video src={roofsolar2} className="video2 aos-init" data-aos="fade-up-right" data-aos-duration="2000"  autoPlay="true" loop="true" />
                <div className="dos aos-init" data-aos="fade-up-left" data-aos-duration="2000">
                    <h2>Could be with or without Grid Interaction...</h2>
                    <h3>Grid Interaction System:</h3>
                    <p>The DC power generated from SPV panels is converted to AC power using a inverter and is fed to the grid
                        either of 11 KV three phase line or of 220 V single phase line depending on the system installed at
                        commercial or residential establishment. The SPV System generates power using the daylight, which is
                        utilized fully by powering the captive loads and feeding excess power to the grid as long as grid is
                        available. In cases, where solar power is not sufficient, the captive loads are served by drawing power
                        from the grid. The grid- interactive rooftop SPV systems thus work on net metering basis wherein the
                        beneficiary pays to the utility on net meter reading basis.</p>
                    <h4>Non-grid interactive systems:</h4>
                    <p>Require a full load capacity battery power back up system. This kind of system with battery back is viable
                        at places where power supply is erratic or not available.</p>
                </div>
            </div>

        </>
    )
}

export default Solar