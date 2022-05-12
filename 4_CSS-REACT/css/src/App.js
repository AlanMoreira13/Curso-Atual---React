import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";
import Title from './components/Title';
import MyCars from '../challangecss/src/components/MyCars';

function App() {
  const n = 15;
  const [name] = useState("Alan");
  const redTitle = false;



  return (
    <div className="App">
      {/* css global */}
      <h1>React com css</h1>
      {/* css de componente */}
      <MyComponent/>
      <p>Este paragrafo é do App.js</p>
      {/* CSS inline */}
      <p style={{color: "magenta", backgroundColor: "gray", padding: "15px", border: "3px solid blueviolet"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS inline dinâmico */}
      <h2 style={n > 10 ? ({color: "red"}) : ({color: "greenyellow"})}>CSS dinâmico</h2>
      <h2 style={n < 10 ? ({color: "red"}) : ({color: "greenyellow"})}>CSS dinâmico</h2>
      <h2 style={name === "Alan" ? ({color: "blue", backgroundColor: "#000"}) : null}>teste nome</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title": "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
    <Title/>
    
    </div>
  );
}

export default App;

