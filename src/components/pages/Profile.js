// import React, {useState} from "react";
// import {
//   AiOutlineGithub,
//   AiOutlineMail,
//   AiOutlineLinkedin,
//   AiOutlinePhone,
// } from "react-icons/ai";

// export default function Profile() {
// const[flip, setFlip] = useState(false)

//   function flipped(e) {
//   setFlip(true)
// }
//   return (
//     <>
//       <div className="section">

//         {/* <div className="empty"></div> */}
//         <div
//           className="boxes"
//           style={{
//             color: "white",
//           }}
//         >
//           <a href="mailto: kimester1996@gmail.com"></a>
//           <AiOutlineMail
//             style={{
//               color: "white",
//               width: 50,
//               height: 50,
//             }}
//           />
//           Email
//           <br></br>
//           <a
//             href="https://github.com/kimester"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             <AiOutlineGithub
//               style={{
//                 color: "white",
//                 width: 50,
//                 height: 50,
//               }}
//             />
//           </a>
//           Github
//           <br></br>
//           <a
//             href="https://www.linkedin.com/in/ester-e-kim-b28679233/"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             <AiOutlineLinkedin
//               style={{
//                 color: "white",
//                 width: 50,
//                 height: 50,
//               }}
//             />
//           </a>
//           LinkedIn
//           <br></br>
//           <a href="tel:9077647686">
//             <AiOutlinePhone
//               style={{
//                 color: "white",
//                 width: 50,
//                 height: 30,
//               }}
//             />
//           </a>
//           Phone #
//         </div>
//        <div  className= 'boxes' >
//         <img src= "plant.png" ></img>
//         this is my project 1</div>
//         <div
//           className="empty"
//           style={{
//             width: 300,
//           }}
//         >
//           this is a box
//         </div>
//         <div className="another" >this is box 2
//         </div>
//         <div className="boxes">box 3</div>
//         <div
//           className="me"
//           style={{
//             color: "white",
//             fontFamily: "Questrial",
//             fontSize: 20,
//           }}
//         >
//           <p> Full name: Ester Kim </p>
//           <p>Born and raised: Anchorage,Alaska</p>
//           <p>Hobbies: bouldering, yoga, hiking</p>
//         </div>
//         <div className="end"></div>

import React, { useState, useEffect } from "react";
// import "./App.css";

export default function Flip() {
  const [flip, setflip] = useState(false);
  const [flipOne, setFlipOne] = useState(false);

  function flipCard() {
    setflip(!flip);
  }

  function flipCardTwo() {
    setFlipOne(!flipOne);
  }

  return (
    <div className="card-container">
      <div className="card" onClick={() => flipCard()}>
        <div className={`card__inner ${flip ? "is-flipped" : ""}`}>
          <div className="card__face card__face--front">
            <h2>Card Front</h2>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                <img src="plant.png" alt="" className="pp" />
                <h2>Tyler Potts</h2>
              </div>
              <div className="card__body">
                <h3>planter</h3>
                <p>
                  for this project 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardTwo" onClick={() => flipCardTwo()}>
        <div className={`cardTwo__inner ${flipOne ? "is-flipped" : ""}`}>
          <div className="card__face card__face--front">
            <h2>Card Front</h2>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                <img src="pp.jpg" alt="" className="pp" />
                <h2>Tyler Potts</h2>
              </div>
              <div className="card__body">
                <h3>JavaScript Wizard</h3>
                <p>
                  Lorem ipsum <strong>dolor</strong> sit amet, consectetur{" "}
                  <strong>adipiscing</strong> elit. Sed id erat a magna lobortis
                  dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien
                  placerat, <strong>laoreet</strong> tincidunt nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
