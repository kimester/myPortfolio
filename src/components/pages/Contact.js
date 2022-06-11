
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
;
    const handleFormSubmit = (event) => {
        event.preventDefault()
        // Preventing the default behavior of the form submit (which is to refresh the page)
        if (email && name && message) {

            const serviceID = "service_2bmlaq8"
            const templateID = "template_2zi5knz"
            const publicKey = "w5WVSJbF2wkkie5Tp"
            const templateParams = { name, email, message }

            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((response) => {
                    // alert("Your email was successfully sent!");
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });

        }
        //     //clear the inputs
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 className="text-light">Contact Me:</h1>
           
            <form ref={form} className="form" 
             onSubmit={handleFormSubmit}
            style={{
                color:'black',
                display:"flex", 
                flexDirection:"column",
                marginTop:"4%",
                marginLeft:"20%",
                width:"50%",
                 }}
                 >
                <input className="text-black"
                    value={name}
                    name="name"
                    onChange={(e) => { setName(e.target.value) }}
                    type="text"
                    placeholder="Your Name"
                />
                <input className="text-black"
                    value={email}
                    name="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email"
                    placeholder="Your Email"
                />
                <textarea className="text-black"
                    value={message}
                    name="message"
                    onChange={(e) => { setMessage(e.target.value) }}
                    type="text"
                    placeholder="Your Message"
                />
                <button style={{alignSelf:"center",width:"80%"}} type="submit">
                    Submit
                </button>
            </form>
           
    
        </div>
    );
}