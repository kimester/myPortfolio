// import React from 'react';

// export default function Resume() {
//   return (
//     <div>
//       <h1
//       style={{
//         color:"white",
//         fontFamily: "Noto Sans medium",
//         textAlign:'center',
//       }}
//       >Resume</h1>
//       <p
//       style={{
//         color:"white",
//         fontFamily: "Noto Sans medium",
//         textAlign:'center',
//       }}
//       >
//         Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
//         Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
//         mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
//         lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//         imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
//         in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
//       </p>
//     </div>

//   );
// }

import React, { useState, useEffect } from "react";
import {
  AiOutlineGithub,
 
  AiOutlineLinkedin,
  
  AiOutlineImCss3
} from "react-icons/ai";

export default function Flip() {
  const [flip, setflip] = useState(false);
  const [flipOne, setFlipOne] = useState(false);
  const [flipThree, setFlipThree] = useState(false);

  function flipCard() {
    setflip(!flip);
  }

  function flipCardTwo() {
    setFlipOne(!flipOne);
  }
  function flipCardThree() {
    setFlipThree(!flipThree);
  }

  return (
    <div className="section">
      <div className="card-container">
        <div className="card" onClick={() => flipCard()}>
          <div className={`card__inner ${flip ? "is-flipped" : ""}`}>
            <div className="card__face card__face--front">
              <h2>ABOUT ME</h2>
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__header">
                  <div>
                    <br></br>
                    <br></br>
                  </div>
                </div>
                <div className="card__body">
                  <p>Full name: Ester Kim</p>
                  <p>Born and raised: Anchorage,Alaska</p>
                  <p>Hobbies: bouldering, yoga, hiking</p>
                  <a
                    href="https://www.linkedin.com/in/ester-e-kim-b28679233/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <AiOutlineLinkedin
                      style={{
                        color: "darkseagreen",
                        width: 100,
                        height: 100,
                      }}
                    />
                  </a>
                  <a
                    href="https://github.com/kimester"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <AiOutlineGithub
                      style={{
                        color: "darkseagreen",
                        width: 100,
                        height: 100,
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardTwo" onClick={() => flipCardTwo()}>
          <div className={`cardTwo__inner ${flipOne ? "is-flipped" : ""}`}>
            <div className="card__face card__face--front">
              <h2>HARD SKILLS</h2>
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__header">
                  <h2>Hard Skills</h2>
                </div>
                <div className="card__body">
                  <h3>JavaScript Wizard</h3>
                  <p> Javascript</p>
                  <p>CSS
                  </p>
                  <p>React</p>
                  <p>Mongo</p>
                  <p>Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardThree" onClick={() => flipCardThree()}>
          <div className={`cardThree__inner ${flipThree ? "is-flipped" : ""}`}>
            <div className="card__face card__face--front">
              <h2>SOFT SKILLS</h2>
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__header">
                  <h2>Soft Skils</h2>
                </div>
                <div className="card__body">
                  <p> Effective communication </p>

                  <p> Team Player</p>
                  <p> Problem solving </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
