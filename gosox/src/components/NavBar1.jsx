import React from 'react'
import { NavLink } from 'react-router-dom'
//  { AiFillShopping,AiFillFacebook } from "react-icons/ai";
// import "../components/Pages/"
import {AiFillShopping,AiOutlineUser } from "react-icons/ai";
import "../Css/nav.css"
import {ImHeart} from "react-icons/im"
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
// import {IoLocation} from "react-icons"


const activelink={textDecoration:"none", color:"pink"}
const defelink={textDecoration:"none", color:"white"}
// import { AiFillFacebook } from 'react-icons/fa';
// impor

const link=[
    // {path:"/",title:"HOME"},
    {path:"/men",title:"MEN"},
    {path:"/women",title:"Women"},
    // {path:"/giftcards",title:"GIFT CARDS"},
    // {path:"/careers",title:"CAREERS"},
    // {path:"/franchi",title:"FRANCHISING"}
]
const Navbar1 = () => {
    const {isAuth,LogoutUser}=useContext(AuthContext)
  return (
<>
<nav className='main-nav'>
    <div className='logo'>
    
        <NavLink style={{textDecoration:"none"}} to="/"><h1>Goxos</h1></NavLink>
        {/* <img src={logo1} alt="" /> */}
        
    </div>
    <div className='slash'>
        <h1><b>|</b></h1>
    </div>

{/* menu bar */}

<div className='menubar'>
    {/* <ul> */}
    {link.map((el)=>{
    return(
        // <li>


<NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}><h3>{el.title}</h3></NavLink>


            // </li>
    )
})}
    {/* </ul> */}

</div>

<div className='searchbar'>
    <input type="text" placeholder='Search for items and brands'/>
</div>

<div className='social-media'>
    
        <NavLink  className="social1" to="/login"><button onClick={LogoutUser}>{isAuth?"Logout":<AiOutlineUser/>}</button></NavLink>
            
        
            <NavLink className="social1" to="/"><ImHeart/></NavLink>
            <NavLink className="social1" to="/"><AiFillShopping/></NavLink>
            
       
</div>
</nav>
</>
  )
}


export default Navbar1



