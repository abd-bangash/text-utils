// import React, { useState } from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btnStyle,setBtnStyle]=useState({
    //     text:'Dark mode',
    //     color:'white',
    //     backgroundColor:'black'
    // })
    let darkStyle1={
      backgroundColor:'#163520',
      color : 'white'
    }
    let lightStyle1={
      backgroundColor:'white',
      color : 'black'
    }
    let darkStyle2={
      backgroundColor:'#660000',
      color : 'white'
    }
    let lightStyle2={
      backgroundColor:'#0DCAF0',
      color : 'black'
    }
    // const btnClick=()=>{
    //     if(myStyle.color==='white'){
    //             setMyStyle({
    //                 color:'black',
    //                 backgroundColor:'white'
    //             })
    //             setBtnStyle({
    //                 text:'Dark mode',
    //                 color:'white',
    //                 backgroundColor:'black',
    //             })
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnStyle({
    //             text:'Light mode',
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //     }
    // }
  
  return (
    <>
    <div className="container p-4  rounded" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null}>
    <div className="accordion" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null} id="accordionExample">
        <h2 className='mb-3'>About Us..</h2>
  <div className="accordion-item" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null}>
    <h2 className="accordion-header" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null}>
      <button className="accordion-button" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Text Utils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Creators
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={props.palette==='dark1' ? darkStyle1:props.palette==='dark2' ? darkStyle2 :props.palette==='light1'?lightStyle1:props.palette==='light2'? lightStyle2:null} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        More Products
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
{/* <button type="button" className="btn btn-dark mt-3" style={btnStyle} onClick={btnClick}>{btnStyle.text}</button> */}
</div>
    </div>
    </>
  )
}
