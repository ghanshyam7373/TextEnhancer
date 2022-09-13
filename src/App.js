// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{ useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      <Router>  
      <Navbar title="TextEnhancer" mode={mode} toggleMode={toggleMode} / >
        <Alert alert={alert} />
        <div>
        <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
          <Route path="/" element={<Textform mode={mode} alert={alert} showAlert={showAlert}/>}>
        {/* <Textform mode={mode} alert={alert} showAlert={showAlert}/> */}
          </Route>
        </Routes>
        </div>
      </Router>
      </div>
  );
}

export default App;
