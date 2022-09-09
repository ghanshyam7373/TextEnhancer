// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{ useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg) =>{
    setAlert({
      msg:msg
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

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
        <Alert alert={alert} />
        <Textform mode={mode} alert={alert} showAlert={showAlert}/>
      </div>
  );
}

export default App;
