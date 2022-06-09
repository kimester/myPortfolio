import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [flip, set] = useState(false);

  const words = [
    "Javascript",
    "Express",
    "MySQL",
    "Sequelize",
    "CSS",
    "React",
    "HTML",
    "Node",
    "Mongo",
  ];
  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 300,
    config: { duration: 3000 },
    onRest: () => set(!flip),
  });

  return (
    <div className="homebox">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          marginRight: "2rem",
          marginTop: 500,
          
        }}
      >
        <h1
      
          style={{
            color: "white",
            
           
            fontFamily: "Noto Sans medium ",
            fontSize: 50,
           
          }}
        >
          Hi, I'm Ester
        </h1>
        <h2
          className="header"
          style={{
            
            fontFamily: "Noto Sans medium",
            height: 100,
          
            color: "white",
            textShadow: "grey"
          }}
        >
          {" "}
          A Web Developer with expreience in
        </h2>
      </div>
      <animated.div
        style={{
          border: "1px solid white",
          color: "black",
          right: 200,
          fontFamily: "Questrial",
          bottom: 10,
          top: 350,
          height: 100,
          overflow: "auto",
          fontSize: "30px",
          color:"white",
marginTop:520,
        }}
        scrollTop={scroll}
      >
        {words.map((word, i) => (
          <div
            key={`${word}_${i}`}
            style={{ width: "100%", height: 50, textAlign: "center" }}
          >
            {word}
          </div>
        ))}
      </animated.div>
    </div>
  );
}
