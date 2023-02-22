import React from 'react'
import { NavLink } from 'react-router-dom'
//  { AiFillShopping,AiFillFacebook } from "react-icons/ai";
// import "../components/Pages/"
import {AiFillShopping,AiFillFacebook ,AiFillPhone,AiOutlineTwitter} from "react-icons/ai";
import "../Css/nav.css"
// import {IoLocation} from "react-icons"

const activelink={textDecoration:"none", color:"brown"}
const defelink={textDecoration:"none", color:"black"}
// import { AiFillFacebook } from 'react-icons/fa';
// impor

const link=[
    {path:"/",title:"Menu"},
    {path:"/ourfood",title:"Catering"},
    {path:"/about",title:"Contact Us"},
    {path:"/giftcards",title:"Feedback"},
    {path:"/careers",title:"Fundraisers & Charities"},
    {path:"/franchi",title:"Gift Cards"},
   
]

const Footer2 = () => {
  return  (
    <>
    
    <div className='main-fot'>
        <div className='logo1'>
        
            <NavLink style={{textDecoration:"none"}} to="/"><h2>GK's Taste</h2></NavLink>
            {/* <img src={logo1} alt="" /> */}
            
        </div>
    
    {/* menu bar */}
    
    <div className='menubar2'>
        {/* <ul> */}
        {link.map((el)=>{
        return(
            // <li>
                <h2><NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}>{el.title}</NavLink></h2>
                // </li>
        )
    })}
        {/* </ul> */}
    
    </div>
    <div>
        <p>Join Loco Rewards Earn points <br />
         with every order, receive a birthday reward and <br />
          other valuable offers throughout the year. Plus, <br />
           special app features to order ahead, pay, and save your favorites.</p>
    </div>
    <div className='social-media1'>
        {/* socialmedia */}
        {/* <ul> */}
            {/* <li> */}
                <NavLink to="/"><AiFillShopping/></NavLink>
            {/* </li> */}
            {/* <li> */}
                <NavLink to="/"><AiFillFacebook/></NavLink>
                <NavLink to="/"><AiFillPhone/></NavLink>
                <NavLink to="/"><AiOutlineTwitter/></NavLink>
                {/* </li> */}
        {/* </ul> */}
    </div>
    </div>
    </>
      )
}

export default Footer2