

import React, { useState } from "react";
import {
  AiOutlineGithub,
 
  AiOutlineLinkedin,
  
 
} from "react-icons/ai";

export default function Flip() {
  const [flipTwo, setflip] = useState(false);
  const [flipOne, setFlipOne] = useState(false);
  const [flipThree, setFlipThree] = useState(false);

  function flipCardOne() {
    setflip(!flipTwo);
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
        <div className="cardOne" onClick={() => flipCardOne()}>
          <div className={`card__inner ${flipTwo ? "is-flipped" : ""}`}>
            <div className="card__face card__face--front">
              <h2>ABOUT ME</h2>
            </div>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__header">
                <h2>About me</h2>
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
                        height: 80,
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
                        height: 80,
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
