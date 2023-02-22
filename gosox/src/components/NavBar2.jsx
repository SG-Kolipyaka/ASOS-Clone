import React from 'react'
import { NavLink } from 'react-router-dom'
//  { AiFillShopping,AiFillFacebook } from "react-icons/ai";
// import "../components/Pages/"

import "../Css/nav.css"



const activelink={textDecoration:"none", color:"black" }
const defelink={textDecoration:"none", color:"white"}
// import { AiFillFacebook } from 'react-icons/fa';
// impor

const link=[
    // {path:"/",title:"HOME"},
    {path:"/Sale",title:"Sale"},
    {path:"/New in",title:"New in"},
    {path:"/Clothing",title:"Clothing"},
    {path:"/Brands",title:" Brands"},
    {path:"/Shoes",title:"Shoes"},
    {path:"/Tailoring",title:"Tailoring"},
    {path:"/Accessories",title:"Accessories"},
    {path:"/Jeans",title:"Jeans"},
    {path:"/Activewear",title:"Activewear"},
    {path:"/Topman",title:"Topman"},
    {path:"/FaceBody",title:"Face + Body"},
    {path:"/Marketplace",title:"Marketplace"},
    {path:"/Outlet",title:"Outlet"},
    
   
    
]
const Navbar2 = () => {
  return (
<>
<nav className='main-nav2'>


{/* menu bar */}

<div className='menubar22'>
  
    {link.map((el)=>{
    return(
   


<NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}><h4 style={{fontFamily:"monospace",fontSize:"16.5px"}}>{el.title}</h4></NavLink>


          
    )
})}
  

</div>



</nav>
</>
  )
}


export default Navbar2