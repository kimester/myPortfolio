import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin, AiOutlinePhone,  } from "react-icons/ai";



export default function Footer() {
    return (
        <div id="contact-links">
            <div className="icon-links">
                <a href="mailto: kimester1996@gmail.com"></a>
                <AiOutlineMail />
            </div>
            <div className="">
                <a href="tel:9077647686">
                    <AiOutlinePhone />
                </a>
            </div>
            <div className="">
                <a href="https://github.com/kimester" target="_blank" rel="noreferrer noopener">
                    <AiOutlineGithub />
                </a>
            </div>
            <div className="">
                <a href="https://www.linkedin.com/in/ester-e-kim-b28679233/" target="_blank" rel="noreferrer noopener">
                    <AiOutlineLinkedin />
                </a>
            </div>
           
        </div>
    )
}