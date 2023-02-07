import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Whysolar from "./Components/Whysolar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Csr from "./Components/Csr";
import Energy from "./Components/Energy";
import Success from "./Components/Success";
import Solar from "./Components/Solar";
import Waterpump from "./Components/Waterpump";
import Light from "./Components/Light";


import "./style/header.scss";
import "./style/App.scss"
import "./style/home.scss"
import "./style/tsparticles.scss"
import "./style/choose.scss"
import "./style/whysolar.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/about.scss"
import "./style/csr.scss"
import "./style/testimonial.scss"
import "./style/energy.scss"
import "./style/success.scss"
import "./style/solar.scss"
import "./style/waterpump.scss"
import "./style/light.scss"


function App() {
  return (
    <>
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Whysolar" element={<Whysolar/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/csr" element={<Csr/>}/>
      <Route path="/energy" element={<Energy/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/solar" element={<Solar/>}/>
      <Route path="/waterpump" element={<Waterpump/>}/>
      <Route path="/light" element={<Light/>}/>

    </Routes>
    <Footer/>
  </HashRouter>
  </>
  );
}

export default App;
