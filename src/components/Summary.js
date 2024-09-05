import React from 'react'

function Summary (props) {
  const wordCountMethod = (string) => {
    const words = string.split(/\s+/).filter((word) => word.trim() !== "");
    console.log(words);
    return words.length;
  };
  
   let wordCount=wordCountMethod(props.text) 
  return (
        <>
        <div className="container my-5" style={{color:props.mode==='light' ? '#163520':'white'}}>
        <div className=" border  rounded w-25 p-2">
            <h4>Word Count </h4>
            <p className="fs-5">
              Words : {wordCount} Characters : {props.text.length}
            </p>
            <p className="fs-7">
              Time to read : {Math.ceil(wordCount / 3)} seconds ,{' '}
              {(Math.ceil(wordCount / 3) / 60).toFixed(2)} minutes
            </p>
          </div>
          <div className="container my-4 border rounded">
            <h3>Preview: </h3>
            <p>
              {props.text.length > 1
                ? props.text
                : 'Enter some text in the text box'}
            </p>
          </div>
      </div>
        </>
  )
}
export default Summary;