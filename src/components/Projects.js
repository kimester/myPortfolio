import React, { useState } from "react";


const projects = [
      {
          title: "In My Fridge",
          imgLink: "/fridge.png",
          imgAlt: "In My Fridge",
          deployedLink: "https://kimester.github.io/inMyFridge/",
          gitHubLink: "https://github.com/kimester/inMyFridge",
          description: " "
      },
      {
          title: "the Planter",
          imgLink: "./assets/images/plant.png",
          imgAlt: "In My Fridge",
          deployedLink: "https://kimester.github.io/inMyFridge/",
          gitHubLink: "https://github.com/kimester/inMyFridge",
          description: " "
      }
    ]

export default function Project() {
  return (
  <div>
      <div className="profile-box">
      
     
      <img src={imgLink} alt={imgAlt} className="card-img-top"></img>






       </div>
    </div>
  );
}