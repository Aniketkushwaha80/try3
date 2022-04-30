import React from 'react';
import "./Experience.css"
import { useContext } from 'react';
import { themeContext } from '../../context/context';
const Experience = () => {
    const theme= useContext(themeContext)
    const darkmode=theme.state.darkmode
    return (
        <div className='experience' id='Experience'>
            <div className="achivement">

                <div style={{color:darkmode? "black" :""}} className="circle">8+</div>
                <span>Months</span>
                <span>Experience</span>
                
            </div>

            <div className="achivement">

<div style={{color:darkmode? "black" :""}}  className="circle">1+</div>
<span>Years</span>
<span>Experience</span>
</div>

<div className="achivement">

<div style={{color:darkmode? "black" :""}}  className="circle">1+</div>
<span>Years</span>
<span>Experience</span>
</div>
              
        </div>
    );
};

export default Experience;