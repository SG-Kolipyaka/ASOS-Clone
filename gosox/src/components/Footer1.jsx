
import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillFacebook } from "react-icons/ai";
import "../Css/nav.css"
import {ImHeart} from "react-icons/im"
import {FiTwitter} from "react-icons/fi"


const Footer1 = () => {
  return (
    <>
    <hr />
    <div className='footer11w'>
   <NavLink className="social11" to="/login"><AiFillFacebook/></NavLink>
            
        
            <NavLink className="social11" to="/"><ImHeart/></NavLink>
            <NavLink className="social11" to="/"><FiTwitter/></NavLink>
            
    </div>
    <br />
    <br />
    </>
  )
}

export default Footer1
