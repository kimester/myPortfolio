// import React, { useState } from 'react';
// import './components/style.css';


// function Contact() {
//     // Here we set two state variables for firstName and email using `useState`
//     const [firstName, setFirstName] = useState('');
//     const [email, setEmail] = useState('');
  
//     const handleInputChange = (e) => {
//       // Getting the value and name of the input which triggered the change
//       const { name, value } = e.target;
  
//       // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//       return name === 'firstName' ? setFirstName(value) : setEmail(value);
//     };
  
//     const handleFormSubmit = (e) => {
//       // Preventing the default behavior of the form submit (which is to refresh the page)
//       e.preventDefault();
  
//       // Alert the user their first and last name, clear the inputs
//       alert(`Hello ${firstName} ${email}`);
//       setFirstName('');
//       setEmail('');
//     };
  
//     return (
    //<h1> Contact Me!</h1>
//       <div>
//         <p>
//           Hello {firstName} {email}
//         </p>
//         <form className="form">
//           <input
//             value={firstName}
//             name="firstName"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="email"
//           />
//           <button type="button" onClick={handleFormSubmit}>
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
  
//   export default Contact;
  