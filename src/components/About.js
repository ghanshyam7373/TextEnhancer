import React from 'react'
import { Link } from 'react-router-dom'

function About(props) {
  return (
    <div className='container'>
       <div className={`p-5 mb-4 bg-${props.mode === 'light'?'light':'black'} rounded-3`}>
      <div className="container-fluid py-5">
        <h1 className={`display-5 fw-bold text-${props.mode === 'light'?'dark':'light'}`}>TextEnhancer</h1>
        <p className={`col-md-12 fs-4 text-${props.mode === 'light'?'dark':'light'}`}>In TextEnhancer you can easily enhance your text using our text features as well as you can find out number of Words & Characters. You can use different text features depending on your goals and the purpose of the writing.</p>
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className={`h-100 p-5 text-bg-${props.mode === 'light'?'dark':'light'} rounded-3`}>
          <h2 className={`text-${props.mode === 'light'?'light':'dark'}`}>Made By <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{marginBottom:'5px',marginLeft:'5px',color:'RED'}}>
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></h2>
          <p className={`text-${props.mode === 'light'?'light':'dark'}`}>This website is created to work easier & faster.</p>
          <p className={`text-${props.mode === 'light'?'light':'dark'}`}>-Ghanshyam Mistry</p>
          <a href="https://github.com/ghanshyam7373"><button className={`btn btn-outline-info`}type="button">Github</button></a>
          <a href="https://www.linkedin.com/in/mistryghanshyam/"><button className={`btn btn-outline-info mx-2`}type="button">LinkedIn</button></a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg--${props.mode === 'light'?'light':'dark'} border rounded-3">
          <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Why it's needed?</h2>
          <p className={`text-${props.mode === 'light'?'dark':'light'}`}>Text features allow a reader to easily access information that supplements the main text without distracting from the content in the body.</p>
          <Link to="/"><button className={`btn btn-info`} type="button">Enhance My Text</button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
