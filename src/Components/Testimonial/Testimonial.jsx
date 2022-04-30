import React from 'react';
import "./Testimonial.css"
import {Pagination} from"swiper"
import "swiper/css/pagination"
import ProfilePic1 from "../../img/profile1.jpg"
import ProfilePic2 from "../../img/profile2.jpg"
import ProfilePic3 from "../../img/profile3.jpg"
import ProfilePic4 from "../../img/profile4.jpg"
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css"
const Testimonial = () => {

    const clients=[
         {
             img:ProfilePic1,
             review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae, illo magni accusamus reiciendis, cumque deserunt eveniet corporis culpa quas incidunt vero possimus sed? Quaerat pariatur iure architecto possimus facere?"
         },
         {
            img:ProfilePic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae, illo magni accusamus reiciendis, cumque deserunt eveniet corporis culpa quas incidunt vero possimus sed? Quaerat pariatur iure architecto possimus facere?"
        },
        {
            img:ProfilePic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae, illo magni accusamus reiciendis, cumque deserunt eveniet corporis culpa quas incidunt vero possimus sed? Quaerat pariatur iure architecto possimus facere?"
        },
        {
            img:ProfilePic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestiae, illo magni accusamus reiciendis, cumque deserunt eveniet corporis culpa quas incidunt vero possimus sed? Quaerat pariatur iure architecto possimus facere?"
        }
    ]
    return (
        <div className='t-wrapper' id='Testimonial'>
            <div className="t-heading">

            <span>Clients Allways Get</span>
            <span> Exceptional Work</span>
            <span> From me...</span>
            <div className="blur t-blur"></div>
            <div className="blur t-blur2"></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {
                    clients.map((e,i)=>{
                        return(
                            <SwiperSlide key={i}>
                             <div className="testimonial">
                             <img src={e.img} alt="" />
                                <span>{e.review}</span>
                             </div>
                            </SwiperSlide>
                        )
                        })
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;