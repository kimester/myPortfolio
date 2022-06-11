
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = () => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        if (email && name && message) {
            const serviceID = "service_2bmlaq8"
            const templateID = "template_2zi5knz"
            const publicKey = "w5WVSJbF2wkkie5Tp"
            const templateParams = { name, email, message }
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(function (response) {
                    alert("Your email was successfully sent!");
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
            {/* Review forms in React for this portion. Include an email form with a comment & name section */}
            <form className="form" 
            style={{
                color:'black',
                display:"flex", 
                flexDirection:"column",
                // margin:0,
                marginTop:"4%",
                width:"60%",
                
                //  justifyContent:"center"
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
                <br/>
                <br/>
                <button style={{alignSelf:"center",width:"80%"}} type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
           
    
        </div>
    );
}