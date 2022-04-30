import React from 'react';
import "./Intro.css"
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Aniket from "../../img/Aniket.jpg";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoii from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import { Thumbs } from 'swiper';
import { useContext } from 'react';
import { themeContext } from '../../context/context';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition={duration :2,type:"spring"}
    const theme= useContext(themeContext)
    const darkmode=theme.state.darkmode
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkmode? "white" :""}}>Hy! I Am</span>
                    <span> Aniket Kushwaha</span>
                    <span>Full stack web developer with good knowledge in designing.
Dedicated to building and optimizing user focused websites using HTML, CSS, JavaScript. Technically proficient at solving
complex problems. Looking forward to working as a web developer in an exciting organization.</span>

                </div>
                <button className='button i-button'>Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>


            <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img className='propic' src={Aniket} alt="" />
       <motion.img
       initial={{left:"-36%"}}
       whileInView={{left:"-24%"}}
       transition={transition}
       src={glassesimoii} alt="" />
       <motion.div
         initial={{top:"-4%",left:"74%"}}
         whileInView={{left:"68%"}}
         transition={transition} style={{color:darkmode? "black" :""}}  className='floatdiv1'>
           <FloatingDiv  image={Crown} txt1={"Web"} txt2={"Developer"}/>
       </motion.div>

       <motion.div 
          initial={{left:"9rem", top:"18rem"}}
          whileInView={{left:"0rem"}}
          transition={transition}
       style={{color:darkmode? "black" :""}}  className="floatdiv2">
       <FloatingDiv image={thumbup} txt1={"Good Deseign"} txt2={"Skills"}/>
       </motion.div>
       
       <div className='blur'></div>
       <div className='blur2'></div>
            </div>
        </div>
    );
};

export default Intro;