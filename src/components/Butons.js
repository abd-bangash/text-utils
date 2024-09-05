import React from 'react'

function Butons (props) {

  return (
        <>
        <div className="container   my-3">
        <button
              className="btn btn-success mx-1"
              onClick={props.handleUpperCaseClick}
            >
              Upper case
            </button>
            <button
              className="btn btn-success mx-1"
              onClick={props.handlelowerCaseClick}
            >
              Lower case
            </button>
            <button className="btn btn-success mx-1" onClick={props.handleCopy}>
        Copy Text
      </button>
            <button className="btn btn-success mx-1" onClick={props.handleExtraSpaces}>
        Remove Extra Spaces
      </button>
            <button
              type="submit"
              onClick={props.speak}
              className="btn btn-warning mx-1"
            >
              Speak
            </button>
            <button className="btn btn-warning mx-1" onClick={props.startSpeechRecognition}>
        Voice Typing
      </button>
            <button className="btn btn-danger mx-1" onClick={props.clearText}>
        Clear Text
      </button>
      
      </div>
        </>
  )
}
export default Butons;