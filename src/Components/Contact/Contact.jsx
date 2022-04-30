import React, { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { useContext } from 'react';
import { themeContext } from '../../context/context';
const Contact = () => {
    const theme= useContext(themeContext)
    const darkmode=theme.state.darkmode
    const [done,setDone]=useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l44yjb5', 'template_kepgadg', form.current, 'u2SCDc6Y3V4v0nKRa')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            form.reset();
        }, (error) => {
            console.log(error.text);
        });    
        console.log("resut")
    }

    return (
        <div className='contact-form' id='Contact'>
            <div className="W-left"></div>
            <div className="awesome c-div">
                <span style={{color:darkmode? "white" :""}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur"></div>
               <div className="contact-no">
               <span>+918718820714</span>
                <span>+919131530760</span>
               </div>
            </div>
            {/* right */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input className='user' type="text" name='user_name' placeholder='Name' />
                    <input type="email" name='user_email' placeholder='Email' className='user' />
                    <textarea placeholder='Message' className='user' name='message'/>
                    <input type="submit" className="button" value="send" />
                    <span className='thanks'>{ done ? "Thanks for Contacting me" :""}</span>
                    <div className="blur c-blur"></div>
                </form>
            </div>

            
        </div>
    );
};

export default Contact;