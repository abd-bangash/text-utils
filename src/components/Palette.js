import React from 'react'

export default function Palette(props) {
  return (
    <>
    {
    props.mode==='light'? 
    <button type="button" className="btn btn-light border border-dark mx-3 h-50 rounded-pill"onClick={props.handlePalette1}>Pri</button>:
    <button type="button" className="btn btn-success border border-light mx-3 rounded-pill"onClick={props.handlePalette3} >Sec</button>
    }
       
    {
    props.mode==='light'?
    <button type="button" className="btn btn-info border border-dark mx-3 h-50 rounded-pill"onClick={props.handlePalette2}>Pri</button>:
    <button type="button" className="btn btn-danger border border-light mx-3 rounded-pill" onClick={props.handlePalette4}>Sec</button>
    }
       
    </>  
)
}
