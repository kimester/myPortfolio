import React from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";

// const box = document.querySelector(".box__inner");

// box.addEventListener("click", function (e) {
//   box.classList.toggle('is-flipped');
// });
export default function Profile() {
  return (
    <>
      <div className="section">
        
        {/* <div className="empty"></div> */}
        <div
          className="boxes"
          style={{
            color: "white",
          }}
        >
          <a href="mailto: kimester1996@gmail.com"></a>
          <AiOutlineMail
            style={{
              color: "white",
              width: 50,
              height: 50,
            }}
          />
          Email
          <br></br>
          <a
            href="https://github.com/kimester"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineGithub
              style={{
                color: "white",
                width: 50,
                height: 50,
              }}
            />
          </a>
          Github
          <br></br>
          <a
            href="https://www.linkedin.com/in/ester-e-kim-b28679233/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineLinkedin
              style={{
                color: "white",
                width: 50,
                height: 50,
              }}
            />
          </a>
          LinkedIn
          <br></br>
          <a href="tel:9077647686">
            <AiOutlinePhone
              style={{
                color: "white",
                width: 50,
                height: 30,
              }}
            />
          </a>
          Phone #
        </div>
        <div className="boxes">this is my project 1</div>
        <div
          className="empty"
          style={{
            width: 300,
          }}
        >
          this is a box
        </div>
        <div className="another">
        </div>
        <div className="boxes"></div>
        <div
          className="me"
          style={{
            color: "white",
            fontFamily: "Questrial",
            fontSize: 20,
          }}
        >
          <p> Full name: Ester Kim </p>
          <p>Born and raised: Anchorage,Alaska</p>
          <p>Hobbies: bouldering, yoga, hiking</p>
        </div>
        <div className="end">
        <img src="plant.png" />
        </div>

        {/* trying flip card
        <div class="card">
          <div class="card_inner">
            <div class="card__face--front">
              <h2>Dev card</h2>
            </div>
            <div class="card__face--back">
              <div class="card__content">
                <div class="card__header">
                  <img src="logo192.png" />
                  <div class="card__body"></div>
                  <h3>Javascript</h3>
                  <p>
                    lorem ipsNunc pharetra finibus est at efficitur. Praesent
                    sed congue diam. Integer gravida dui mauris, ut interdum
                    nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus
                    ac fi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
