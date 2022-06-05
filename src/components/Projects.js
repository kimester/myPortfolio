import React from 'react';
import fridge from "../assets/images/fridge.png";
import plant from "../assets/images/plant.png";
import passgen from "../assets/images/passgen.png";
import workday from "../assets/images/workday.png";
import employee from "../assets/images/employee.png";
import note from "../assets/images/note.png";


const projects = [
  {
    title: "In My Fridge",
    imgLink: fridge,
    imgAlt: "In My Fridge",
    deployedLink: "https://kimester.github.io/inMyFridge/",
    gitHubLink: "https://github.com/kimester/inMyFridge",
    description: "In my Fridge is a web app that you can use to search recipes based on the ingredients that you have in your fridge. There will be a search for recipes that have as many of the given ingredients as possible and require as few additional ingredients as possible. With the title of each dish you will be able to make a youtube search right on our page.  ",
  },
  {
    title: "the Planter",
    imgLink: plant,
    imgAlt: "In My Fridge",
    deployedLink: "https://secret-waters-02737.herokuapp.com/login",
    gitHubLink: "https://github.com/ncfranklin14/the-planter",
    description:
      " The Planter is a forum for plant lovers around the world who need help naming their plants. Create an account, browse plants, and help your fellow plant lovers come up with names for their beloved friends. You can post your un-named plant to the board and allow others to suggest names.",
  },
  {
    title: "Password Generator",
    imgLink: passgen,
    imgAlt: "In My Fridge",
    deployedLink: " https://kimester.github.io/javachip/",
    gitHubLink: "https://github.com/kimester/javachip/",
    description:
      "If you can't think of a good secure password like me you are in the right place. Here you can get a password pased on the criteria chosen.  ",
  },
  {
    title: "Work day scheduler",
    imgLink: workday,
    imgAlt: "In My Fridge",
    deployedLink: "https://kimester.github.io/workparty/",
    gitHubLink: "https://github.com/kimester/workparty",
    description:
      "If you can't think of a good secure password like me you are in the right place. Here you can get a password pased on the criteria chosen.  ",
  },
  {
    title: "Team builder",
    imgLink: employee,
    imgAlt: "Team builder",
    gitHubLink: "https://github.com/kimester/teamProfileGen",
    description:
      "A command line application that generates a nice and easy to read page that is based on a series of user inputs",
  },
  {
    title: "Note taker",
    imgLink: note,
    imgAlt: "In My Fridge",
    deployedLink: "https://kimester.github.io/notetaker/",
    gitHubLink: "https://github.com/kimester/notetaker",
    description:
      " An application tha you can use to store notes for yourself or use as a secret diary that nobody will be able to find ",
  },
];

export default function Project() {
  
  return (
    <div>
    <div className="$orange-900 text-white"style={{margin:"auto",marginTop:"1%"}}>
        
        <div className="container"style={{height:"200", marginTop:"1000"}}>
        {projects.map(({title, imgLink, imgAlt, deployedLink, gitHubLink, description}) => {
        return (
         
            <div className="card" key={title} >
                <img src={imgLink} alt={imgAlt} className="card-img-top"></img>
                <div className="card-body" >
                    <h5 className="card-title text-dark">{title}</h5>
                    <p className="card-text text-dark">{description}</p>
                    <p></p>
                </div>
                <div className="card-body" style={{textAlign:"center", fontSize:"24px", fontColor:"black"}}>
                    <a href={deployedLink}>Deployed link</a>
                    <br />
                    <a href={gitHubLink}>See the Repo</a>
                </div>
            </div>
        )
    })}
    </div>
    </div> 
    </div>
)
}
