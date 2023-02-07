import React from 'react'
import Limitlesenergy1 from "../Assets/Limitlesenergy1.png"
import Reducecarbon1 from "../Assets/Reducecarbon1.png"
import GridSecurity1 from "../Assets/GridSecurity1.png"
import greenhouseeffect1 from "../Assets/greenhouseeffect1.png"
import electricitybills1 from "../Assets/electricitybills1.png"
import Walletfriendly1 from "../Assets/Walletfriendly1.png"
import roofsolar1 from "../Assets/roofsolar1.mp4"

const Whysolar = () => {
  return (<>
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Why Solar</li>
  </ol>
</nav>
<video src={roofsolar1} className="roof" autoPlay="true" loop="true" playbackRate = "0.75" />
     <h1 className="come">Come And Be A Part Of Solar Revolution</h1>
	<section className="why py-5">
    <div className="container">
        <h2 className="heading text-center">Why should you invest in Solar Power?</h2>
        <div className="gf row">
            <div className="col-lg-9 mx-auto">
                <div className="as  row  mb-3 py-1 aos-init " data-aos="zoom-out-right" >
                <div className="col-lg-2 col-md-2 border-right">
                    <div className="icn-sunplugged"><img src={Walletfriendly1} alt=".." className="img-fluid"/></div>
                    
                </div>
                <div className="col-lg-10 col-md-10 ">
                    <div className="sunpugged-cont">
                        <h4 className="h4 text-lg-left text-center">Wallet friendly one time investment for 25 Years</h4>
                        <p className="p1 text-lg-left text-center">All these advantages come without leaving a hole in your pocket. Installation of the solar power system is a one-time investment.The investment reaps huge dividends in form of lower electricity bills for several years. </p>
                    </div>
                </div>
                </div>

                <div className="as row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-left">
                <div className="col-lg-10 col-md-10">
                    <div className="sunpugged-cont">
                        <h4 className="h4 text-lg-left text-center">Reduce your carbon footprint</h4>
                        <p className="p1 text-lg-left text-center">Sustainable carbon-free energy solutions such as solar are crucial in achieving our climate goals and the sustainable development agenda.</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 border-left">
                    <div className="icn-sunplugged"><img src={Reducecarbon1} alt=".." className="img-fluid"/></div>
                </div>
                </div>

                <div className="as row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-right">
                <div className="col-lg-2 col-md-2 border-right">
                    <div className="icn-sunplugged"><img src={greenhouseeffect1} alt=".." className="img-fluid"/></div>
                </div>
                <div className="col-lg-10 col-md-10 order2">
                    <div className="sunpugged-cont">
                        <h4 className="h4 text-lg-left text-center">Evasion from the greenhouse effect </h4>
                        <p className="p1 text-lg-left text-center">Solar Power means producing energy through photovoltaic process. The environmental impact of solar power is significantly smaller than other power generation method. No harmful emissions are released into the air when electricity is produced by solar panels This means your small measure can contribute significantly to save the environment.</p>
                    </div>
                </div>
                </div>

                <div className="as row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-left">
                <div className="col-lg-10 col-md-10 order2">
                    <div className="sunpugged-cont">
                    <h4 className="h4 text-lg-left text-center">Better Grid Security</h4>
                    <p className="p1 text-lg-left text-center">Increasing usage of solar energy would lighten the load on the power grid and therefore ensure better grid security. This implies fewer power cuts and more protection from disasters.</p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 border-left">
                    <div className="icn-sunplugged"><img src={GridSecurity1} alt=".." className="img-fluid"/></div>
                </div>
                </div>

                <div className="as row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-right">
                <div className="col-lg-2 col-md-2 border-right">
                    <div className="icn-sunplugged"><img src={Limitlesenergy1} alt=".." className="img-fluid"/></div>
                </div>
                <div className="col-lg-10 col-md-10 order2">
                    <div className="sunpugged-cont">
                    <h4 className="h4 text-lg-left text-center">Limitless and eternal solar energy </h4>
                    <p className="p1 text-lg-left text-center">The sun provides more than enough energy to meet the whole world’s energy needs. The photovoltaic process that transforms the eternal sunlight into electricity doesn’t require any fuel and has no variable costs. It produces electricity in an efficient and cost-effective way.</p>
                    </div>
                </div>
                </div>

                <div className="as row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-left">
                <div className="col-lg-10 col-md-10 order2">
                <div className="sunpugged-cont">
                    <h4 className="h4 text-lg-left text-center">Save on electricity bills</h4>
                    <p className="p1 text-lg-left text-center">Installing solar panels significantly reduces monthly electricity bills and dependence on the power grid.  According to long-term  forecast solar remains a cost-effective solution and long-term investment in the future.</p>
                </div>
                </div>
                <div className="col-lg-2 col-md-2 border-left">
                    <div className="icn-sunplugged"><img src={electricitybills1} alt=".." className="img-fluid"/></div>
                </div>
                </div>

            </div>
        </div>
    </div>
</section>
</>
    // <section className="bg-gray py-5">
	// 	<div className="container">
	// 		<h2 className="text-center sectionHeading mb-5">Why should you invest in Solar Power?</h2>
	// 		<div className="row">
	// 			<div className="col-lg-10 mx-auto">
	// 				<div className="row sunplugged-c mb-3 py-4">
	// 				<div className="col-lg-2 col-md-2 border-right">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				<div className="col-lg-10 col-md-10 order2">
	// 					<div className="sunpugged-cont">
	// 						<h4 className="text-lg-left text-center">Wallet friendly one time investment for 25 Years</h4>
	// 						<p className="text-lg-left text-center">All these advantages come without leaving a hole in your pocket. Installation of the solar power system is a one-time investment.The investment reaps huge dividends in form of lower electricity bills for several years. </p>
	// 					</div>
	// 				</div>
	// 				</div>
	// 				<div className="row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-left">
	// 				<div className="col-lg-10 col-md-10 order2">
	// 					<div className="sunpugged-cont">
	// 						<h4 className="text-lg-left text-center">Reduce your carbon footprint</h4>
	// 						<p className="text-lg-left text-center">Sustainable carbon-free energy solutions such as solar are crucial in achieving our climate goals and the sustainable development agenda.</p>
	// 					</div>
	// 				</div>
	// 				<div className="col-lg-2 col-md-2 border-left">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				</div>
	// 				<div className="row sunplugged-c mb-3 py-4 aos-init " data-aos="fade-right">
	// 				<div className="col-lg-2 col-md-2 border-right">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				<div className="col-lg-10 col-md-10 order2">
	// 					<div className="sunpugged-cont">
	// 						<h4 className="text-lg-left text-center">Evasion from the greenhouse effect </h4>
	// 						<p className="text-lg-left text-center">Solar Power means producing energy through photovoltaic process. The environmental impact of solar power is significantly smaller than other power generation method. No harmful emissions are released into the air when electricity is produced by solar panels This means your small measure can contribute significantly to save the environment.</p>
	// 					</div>
	// 				</div>
	// 				</div>
	// 				<div className="row sunplugged-c mb-3 py-4 aos-init" data-aos="fade-left">
	// 				<div className="col-lg-10 col-md-10 order2">
	// 					<div className="sunpugged-cont">
	// 					<h4 className="text-lg-left text-center">Better Grid Security</h4>
	// 					<p className="text-lg-left text-center">Increasing usage of solar energy would lighten the load on the power grid and therefore ensure better grid security. This implies fewer power cuts and more protection from disasters.</p>
	// 					</div>
	// 				</div>
	// 				<div className="col-lg-2 col-md-2 border-left">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				</div>
	// 				<div className="row sunplugged-c mb-3 py-4 aos-init" data-aos="fade-right">
	// 				<div className="col-lg-2 col-md-2 border-right">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				<div className="col-lg-10 col-md-10 order2">
	// 					<div className="sunpugged-cont">
	// 					<h4 className="text-lg-left text-center">Limitless and eternal solar energy </h4>
	// 					<p className="text-lg-left text-center">The sun provides more than enough energy to meet the whole world’s energy needs. The photovoltaic process that transforms the eternal sunlight into electricity doesn’t require any fuel and has no variable costs. It produces electricity in an efficient and cost-effective way.</p>
	// 					</div>
	// 				</div>
	// 				</div>
	// 				<div className="row sunplugged-c mb-3 py-4 aos-init" data-aos="fade-left">
	// 				<div className="col-lg-10 col-md-10 order2">
	// 				<div className="sunpugged-cont">
	// 					<h4 className="text-lg-left text-center">Save on electricity bills</h4>
	// 					<p className="text-lg-left text-center">Installing solar panels significantly reduces monthly electricity bills and dependence on the power grid.  According to long-term  forecast solar remains a cost-effective solution and long-term investment in the future.</p>
	// 				</div>
	// 				</div>
	// 				<div className="col-lg-2 col-md-2 border-left">
	// 					<div className="icn-sunplugged"><img src="/" alt=".." className="img-fluid"/></div>
	// 				</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>
  )
}

export default Whysolar
