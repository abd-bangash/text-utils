// import {useState} from 'react';
// import { SpeechRecognition } from 'web-speech-api';
function TextArea (props)  {
  

    
//speech to text

   
   
     return (
        <>
          <div className="mb-1 mt-4 container" >
            <h3 style={{color:(props.palette==='light1' || props.palette==='light2') ? '#163520':'white'}}>{props.heading}</h3>
            <textarea
              className="form-control"
              value={props.text}
              onChange={props.handleTextValueChange}
              style={{color:(props.palette==='light1'|| props.palette==='light2') ? '#163520':'white',
            backgroundColor:(props.palette==='light1') ? 'white':(props.palette==='light2')?'#0DCAF0':(props.palette==='dark1')?'#163520':(props.palette==='dark2')?'#660000':null}}
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
            
          </div>
          
        </>
      );
    }
    
    export default TextArea;