import React from 'react';
import { AiOutlineGithub,  AiOutlineLinkedin  } from "react-icons/ai";



export default function Footer() {
    return (
        <div id="contact-links">
            
            
            <div className="">
                <a href="https://github.com/kimester" target="_blank" rel="noreferrer noopener">
                    <AiOutlineGithub
                     style={{
                        color: "darkseagreen",
                        width: 100,
                        height: 100,
                      }}
                    />
                </a>
            </div>
            <div className="">
                <a href="https://www.linkedin.com/in/ester-e-kim-b28679233/" target="_blank" rel="noreferrer noopener">
                    <AiOutlineLinkedin 
                     style={{
                        color: "darkseagreen",
                        width: 100,
                        height: 100,
                      }}
                    />
                </a>
            </div>
           
        </div>
    )
}
