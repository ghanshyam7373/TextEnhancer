// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{ useState } from "react";

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor = 'black'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
  }
  }
  return (
    <div className="App">
      <Navbar title="TextEnhancer" mode={mode} toggleMode={toggleMode} / >
        <Textform mode={mode} />
      </div>
  );
}

export default App;
