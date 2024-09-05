import React from 'react'

export default function Alert(props) {
    const capatilizeFirstLetter=(str)=>{
        let newStr=str.toLowerCase();
        return newStr.charAt(0).toUpperCase()+newStr.slice(1);

    }
  return (
    <div style={{height:'35px'}}>
   {props.alert && <>
   <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
  <strong>{capatilizeFirstLetter(props.alert.type)} : {props.alert.message}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div> </>}
  </div>
    

  )
}
