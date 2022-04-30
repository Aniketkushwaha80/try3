import React from 'react';
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Facebook from "../../img/Facebook.png"
import Shopify from "../../img/Shopify.png"
import { useContext } from 'react';
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';

const Works = () => {
    const theme= useContext(themeContext)
    const transition={duration :3.5,type:"spring"}
    const darkmode=theme.state.darkmode
    return (
        <div className='works'>
             <div className="awesome w-awesome">
                <span style={{color:darkmode? "white" :""}}>Works for all these</span>
                <span>Brand & clinets</span>
                <span>Lorem ipsum adipisicing elit. Quaerat deleniti ratione amet 
                    <br />
                     ut voluptate nisi vel similique! Maiores 
                     <br />
                     ut voluptate nisi vel similique! Maiores voluptas enim optio?
                     <br />
                     ut voluptate nisi vel similique! 
                </span>
                
                <button className='button s-button'>Hire me</button>
               
                <div className='s-blur'>vfdvfvfv</div>
            </div>
            {/* right */}
            <div className="w-right">
                <motion.div
                   initial={{rotate:45}}
                   whileInView={{rotate:0}}
                   viewport={{margin:"-40px"}}
                   transition={transition}
                className="w-maincircle">
                    <div className="seccircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="seccircle">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="seccircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="seccircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="seccircle">
                        <img src={Amazon} alt="" />
                    </div>
                </motion.div>
                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>
            </div>
        </div>
    );
};

export default Works;