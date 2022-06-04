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
    description:
      " The Planter is a forum for plant lovers around the world who need help naming their plants. Create an account, browse plants, and help your fellow plant lovers come up with names for their beloved friends. You can post your un-named plant to the board and allow others to suggest names.",
  },
];

export default function Project() {
  return (
    <div>
      <div className="profile-box">
        {projects.map(
          (project, index, deployedLink, gitHubLink, description) => (
            <img
              key={index}
              src={project.imgLink}
              alt={project.imgAlt}
              className="card-img-top"
            />
          )
        )}
        <div>
          <div
            className="card-body"
            style={{ textAlign: "center", fontSize: "24px" }}
          >
            <a href={deployedLink}>Deployedlink</a>
            <br />
            <a href={gitHubLink}>See the Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
}
