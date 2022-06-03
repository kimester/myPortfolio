import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className="profile-box">
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
        <div className="boxes">
          <img src="plant.png"></img>
          this is my project 1
        </div>
        <div
          className="empty"
          style={{
            width: 300,
          }}
        >
          this is a box
        </div>
        <div className="another">this is box 2</div>
        {/* <div className="boxes">box 3</div> */}
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
        <div className="end"> this is the end box </div>
      </div>
    </>
  );
}
