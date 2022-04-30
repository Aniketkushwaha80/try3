import React from 'react';
import "./Footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Twitter from "@iconscout/react-unicons/icons/uil-twitter"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Wave from"../../img/wave.png"
const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" />
            <div className="f-content">
<span>Aniketkushwaha80@gmail.com</span>
<div className="f-icons">
    <Insta onClick={()=>{
                          window.location.href="https://www.instagram.com/aniketkushwahaart/"
                      }}   size={"55px"}/>
    <Twitter onClick={()=>{
                          window.location.href="https://www.instagram.com/aniketkushwahaart/"
                      }}  size={"55px"}/>
    <Facebook onClick={()=>{
                          window.location.href=""
                      }}  size={"55px"}/>
    <Github onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/Overstock.com"
                      }} size={"55px"}/>
</div>
            </div>
        </div>
    );
};

export default Footer;