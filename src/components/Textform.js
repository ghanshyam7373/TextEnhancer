import React, { useState } from 'react'

function Textform(props) {
    const [text, setText] = useState("")

    const handleParaPhasing = () => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '12fd4790e1mshdd9e9bed5f94427p130f9djsn259398c99e21',
                'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
            },
            body:`{"language":"en","strength":3,"text":${JSON.stringify(text)}}`
        };

        fetch('https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite', options)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setText(response.rewrite)
                props.showAlert('Text Para-pharsing Successfull!')}
            )
            .catch(err => console.error(err));

    }


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
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard');
    }
    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleLineSpace = () => {
        let newtext = text.split(/\s+/);
        setText(newtext.join(" "));
    }

    return (
        <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <div className='container my-3'>
                <h1>Enter your text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text" value={text} onChange={handleonChange} id="databox" rows="12" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="toupper" onClick={handletoUpper}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="toLower" onClick={handletoLower}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="toLower" onClick={handleclearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="copytext" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="removeExtraSpace" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="removeLineSpace" onClick={handleLineSpace}>Remove NewLine Space</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2" id="paraphasing" onClick={handleParaPhasing}>Para-pharsing</button>
            </div>
            <hr />
            <div className="container my-3">
                <h1>Your Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words & {text.length} Characters</p>
                <p>{(text.length === 0) ? 0 : 0.008 * text.split(" ").length} Minutes for reading your content</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
            </div>
        </div>
    )
}

export default Textform