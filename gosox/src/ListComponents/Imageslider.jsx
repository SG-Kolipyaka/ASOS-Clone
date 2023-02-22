import React from 'react'
import { useState } from 'react'
import "../Css/nav.css"
import { NavLink } from 'react-router-dom'
import {AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";


const Imageslider = ({slides}) => {
    const [currentind,setIndex]=useState(0)


    const goprevious=(()=>{
        const firstind=currentind===0
        const newind=firstind?slides.length-1 :currentind-1
        setIndex(newind)
    })

    const gotonext=(()=>{
        const firstind=currentind===slides.length-1
        const newind=firstind?0 :currentind+1
        setIndex(newind)
    })
  return (
    <div className='slider1'>
        <div className='leftslide' onClick={goprevious}><AiFillCaretLeft/></div>
      
        {/* <p id='p1'>Lunch and hungry <br /> Arrived for early lunch. Service was excellent. <br />
         Selected from the 2 menus available, the portions <br /> are great for two people and the rice plate is
          awesome! Must try is staying nearby. <br /> Not expensive at all.</p>*/}
          <button id='but1' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/women">Shop Now</NavLink></button> 
        
<div className='slidermain' style={{backgroundImage:`url(${slides[currentind].url})`}}></div>
<div className='rightslide' onClick={gotonext}><AiFillCaretRight/></div>
    </div>
  )
}

export default Imageslider