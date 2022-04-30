import React from 'react';
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import Boat from "../../img/boat.png"
import Overstock from "../../img/overstock.png"
import Food from "../../img/food.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"
import { useContext } from 'react';
import Github from "@iconscout/react-unicons/icons/uil-github"
import Rocket from "@iconscout/react-unicons/icons/uil-rocket"
import { themeContext } from '../../context/context';

const Portfolio = () => {
    const theme= useContext(themeContext)
    const darkmode=theme.state.darkmode
    return (
        <div className='portfolio' id='Portfolio'>
            {/* heading */}
            <span style={{color:darkmode? "white" :""}}>Recent Projects</span>
            <span>Portfolio</span>
              {/* slider */}
              <Swiper 
              spaceBetween={10}
                  slidesPerView={3}
                  grabCursor={true}
                  className="portfolio-slider"
                  >
              <SwiperSlide>
                  <div className='project'>
                      <span onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }} className='project-p'>
                          <p className='p-1'>Boat</p>
                          <p className='p-2'>Application</p>
                      </span>
                      <img onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }} src={Boat} alt="" />
                      <div className='p-icons'>
                      <Github onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/boat-application"
                      }} size={"40px"}/>


                      <p onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/boat-application"
                      }}>Github</p>

                      <Rocket onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }} size={"40px"}/>
                      <p onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }}>Live</p>
                      </div>
                  </div>
              
                
              </SwiperSlide>

              <SwiperSlide>
              <div className='project'>
                      <span className='project-p'>
                          <p className='p-1'>Over Stock</p>
                          <p className='p-2'>Application</p>
                      </span>
                      <img src={Overstock} alt="" />
                      <div className='p-icons'>
                      <Github onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/Overstock.com"
                      }} size={"40px"}/>
                      <p onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/Overstock.com"
                      }}>Github</p>
                      <Rocket size={"40px"}/>
                      <p>Live</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='project'>
                      <span  onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }}  className='project-p'>
                          <p className='p-1'>Food</p>
                          <p className='p-2'>Application</p>
                      </span>
                      <img  onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }}  src={Food} alt="" />
                      <div className='p-icons'>
                      <Github  onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/foodapplication"
                      }}  size={"40px"}/>
                      <p  onClick={()=>{
                          window.location.href="https://github.com/Aniketkushwaha80/foodapplication"
                      }} >Github</p>
                      <Rocket  onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }}  size={"40px"}/>
                      <p  onClick={()=>{
                          window.location.href="https://musical-treacle-246245.netlify.app/"
                      }} >Live</p>
                      </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='project'>
                      <span className='project-p'>
                          <p className='p-1'>Music</p>
                          <p className='p-2'>Application</p>
                      </span>
                      <img src={MusicApp} alt="" />
                      <div className='p-icons'>
                      <Github size={"40px"}/>
                      <p>Github</p>
                      <Rocket size={"40px"}/>
                      <p>Live</p>
                      </div>
                  </div>
              </SwiperSlide>
              </Swiper>
            
        </div>
    );
};

export default Portfolio;