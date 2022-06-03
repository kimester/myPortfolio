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
      <div className="bg-dark text-white"style={{margin:"auto",marginTop:"2%"}}>
            <h1 style={{marginLeft:"1%"}}>My Work :</h1>
            <div className="container rounded"style={{display:"grid",gridTemplateColumn: "repeat(3,[col-start])"}}>
            {projects.map(({title, imgLink, imgAlt, deployedLink, gitHubLink, description}) => {
     
      <img src={imgLink} alt={imgAlt} className="card-img-top"></img>






       </div>
    </div>
  );
}