import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./context/context";

function App() {

  const theme= useContext(themeContext)
  const darkmode=theme.state.darkmode

  return (
  <div className="App" 
style={
  {
    background:darkmode? "black":" ",
    color : darkmode ? "white":"",
  }
}  
  >
    
   <Navbar></Navbar>
   <Intro></Intro>
   <Services/>
   <Experience/>
   <Works/>
   <Portfolio/>
   <Testimonial/>
   <Contact/>
   <Footer/>
     </div>
  );
}

export default App;
