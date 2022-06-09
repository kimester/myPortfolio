import React from "react";
import Container from "./components/Container";
import './App.css'

// import Nav from "./components/Nav";
// import Section from "./components/Section"

// const App = () => <Container />;
function App() {
  

    return (
      <div className="App">
        <div className='BGAnimation'  >
        <Container />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        </div>
      </div>
    );
  }
export default App;

