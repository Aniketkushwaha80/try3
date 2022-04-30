import React from 'react';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import "./Navbar.css"
import Portfolio from '../Portfolio/Portfolio';
const Navbar = () => {
    return (
       <div className="navbar" id='Navbar'>
           <div className="n-left">
               <div className="n-name">Aniket</div>
              <Toggle/>
           </div>

           {/* right */}
           <div className="n-right">
               <div className="n-list">
                   <ul>
                   <Link className='Link' spy={true} to="Navbar" smooth={true}>
                   <li>Home</li>
                       </Link>
                      
                     
                       <Link className='Link' spy={true} to="Portfolio" smooth={true}>
                       <li>Project</li>
                       </Link>
                     
                       <Link className='Link' spy={true} to="Experience" smooth={true}>
                       <li>Experence</li>
                       </Link>
                       <Link className='Link' spy={true} to="Services" smooth={true}>
                       <li>Skills</li>
                       </Link>
                   
                       <Link className='Link' spy={true} to="Testimonial" smooth={true}>
                       <li>Testimonial</li>
                       </Link>
                       
                      
                   </ul>
               </div>
               <Link className='Link' spy={true} to="Contact" smooth={true}>
               <button className='button '>Contact</button>
                       </Link>
             
               

           </div>
       </div> 
         
    );
};

export default Navbar;