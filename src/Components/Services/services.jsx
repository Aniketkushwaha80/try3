import React, { useContext } from 'react';
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png"
import Glasses from "../../img/glasses.png"
import Card from '../Card/Card';
import resume from "./Aniket_kushwaha_Resume.pdf"
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';

const Services = () => {
  const transition={duration :1,type:"spring"}
  const theme= useContext(themeContext)
  const darkmode=theme.state.darkmode
    return (
        <div className='services' id="Services">
            <div className="awesome">
                <span  style={{color:darkmode? "white" :""}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum adipisicing elit. Quaerat delenibfbti rabbrvr 
                    <br />
                     ut voluptate nisi vel similique!  enim optio?
                </span>
                <a href={resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
               
                <div className='s-blur'>vfdvfvfv</div>
            </div>
            {/* //right */}
            
            <div className="cards">
              <motion.div
                    initial={{left:"300px"}}
                    whileInView={{left:"250px"}}
                    transition={transition}
               className='card-1'>
              <Card
                emoji={HeartEmoji}
                heading={"Ui-Design"}
                detail={"Animation,Sketch,Web-design,Ui"}/>
              </motion.div>
         
              {/* 2nd  */}
              <motion.div
                initial={{left:"-150px"}}
                whileInView={{left:"-80px"}}
                transition={transition}
              className='card-2'>
              <Card
                emoji={Glasses}
                heading={"Front-end"}
                detail={"Html,Css,JavaScript,React,Redux"}/>
              </motion.div>
              {/* 3rd */}
              <motion.div 
                 initial={{left:"450px"}}
                 whileInView={{left:"220px"}}
                 transition={transition}
              className='card-3'>
              <Card
                emoji={Humble}
                heading={"Back-end"}
                detail={"Mongodb,Node-js,Express"}/>
              </motion.div>
              <div className='s-blur2'></div>
            </div>
        </div>
    );
};

export default Services;