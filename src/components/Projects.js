import React, { useState } from "react";
import fridge from "../assets/images/fridge.png";
import plant from "../assets/images/plant.png";

const projects = [
  {
    title: "In My Fridge",
    imgLink: fridge,
    imgAlt: "In My Fridge",
    deployedLink: "https://kimester.github.io/inMyFridge/",
    gitHubLink: "https://github.com/kimester/inMyFridge",
    description: " ",
  },
  {
    title: "the Planter",
    imgLink: plant,
    imgAlt: "In My Fridge",
    deployedLink: "https://kimester.github.io/inMyFridge/",
    gitHubLink: "https://github.com/kimester/inMyFridge",
    description: " ",
  },
];

export default function Project() {
  return (
    <div>
      <div className="profile-box">
        {/* <div className="bg-dark text-white"style={{margin:"auto",marginTop:"2%"}}>
            <h1 style={{marginLeft:"1%"}}>My Work :</h1>
            <div className="container rounded"style={{display:"grid",gridTemplateColumn: "repeat(3,[col-start])"}}>
            {projects.map(({title, imgLink, imgAlt, deployedLink, gitHubLink, description}) => { */}
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.imgLink}
            alt={project.imgAlt}
            className="card-img-top"
          />
        ))}
        <img src={imgLink} alt={imgAlt} className="card-img-top"></img>
      </div>
    </div>
  );
}
