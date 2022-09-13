import React, { useState } from 'react'

function Textform(props) {

    const handletoUpper = () => {
        let upper = text.toUpperCase()
        setText(upper)
    }
    const handletoLower = () => {
        let lower = text.toLowerCase()
        setText(lower)
    }
    const handleclearText = () => {
        setText("")
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () =>{
        let text = document.getElementById('databox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard');
    }
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const countWords = (s) => {
        s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function(str){return str!=="";}).length;
      }
    const [text, setText] = useState("")

    return (
        <div style={{color:props.mode === 'light'?'black':'white'}}>
            <div className='container my-3'>
                <h1>Enter your text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text" value={text} onChange={handleonChange} id="databox" rows="12" style={{backgroundColor: props.mode === 'light'?'white':'black',color:props.mode === 'light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-info mx-2" id="toupper" onClick={handletoUpper}>Convert to Uppercase</button>
                <button className="btn btn-info mx-2" id="toLower" onClick={handletoLower}>Convert to Lowercase</button>
                <button className="btn btn-info mx-2" id="toLower" onClick={handleclearText}>Clear Text</button>
                <button className="btn btn-info mx-2" id="copytext" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-info mx-2" id="removeExtraSpace" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <hr />
            <div className="container my-3">
                <h1>Your Summary</h1>
                <p>{countWords(text)} Words & {text.length} Characters</p>
                <p>{(text.length ===0)?0: 0.008 * text.split(" ").length} Minutes for reading your content</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Textform