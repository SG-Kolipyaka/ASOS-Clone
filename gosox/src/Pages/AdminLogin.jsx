import React from 'react'
import { NavLink,Link,Navigate } from 'react-router-dom';

import { useState,useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';


export const fetchData = async () => {
    // make fetch request to the mentioned api and return the result here
    try{
      const res=await fetch(`https://asos-backend-s4z0.onrender.com/adminuser`);
      const data=await res.json();
      return data;
  
    }
    catch(err){
      console.log(err);
    }
  };
  
  const inistate={
    email:"",
    password:""
  }

function AdminLogin(){
    const [search,setSearch]=React.useState(inistate);
    const [info,setInfo]=React.useState([]);
    const [info2,setInfo2]=React.useState([]);
    const {isAuth21,LoginUser1,LogoutUser1}=useContext(AuthContext)
    const [Auth,SetAuth2]=useState(false)



    useEffect(()=>{
        showdata();
       
      },[])

      
  const searching=(e)=>{
    const {name,value}=e.target;
    setSearch({
      ...search,
      [name]:value,
    })
    // console.log(search);    
  }

      const showdata=async()=>{
        try{
          const data1=await fetchData();
        //   console.log(data1);
          setInfo(data1);
        }
        catch(err){
          console.log(err);
        }
        
        }

    const handleSearch = (e) => {
        e.preventDefault();
        // setSearch(inistate)
        // filter the data based on source and destination
        const flydata=info.filter((elem)=>{
          return(elem.email.toLowerCase().includes(search.email.toLowerCase()) && elem.password.toLowerCase().includes(search.password.toLowerCase()));
        });
        setInfo2(flydata); 
       
        console.log(flydata.length)

        const aa=flydata.length===1?SetAuth2(true):SetAuth2(false)
       
       return aa
        
    
      };

     if(Auth){
        if(Auth){
            LoginUser1()
            
        }else{
            LogoutUser1()
        }
        // <Navigate to="/women"/>
        
     }
    //  if(isAuth21){
    //     <Navigate to="/admin"/>
    //  }
    // //  else{
        return (
            
            <div>
                <h1>Only Authorised Users Are allowed to use</h1>
                <h1 className='ffa'>{isAuth21?"Login Successful !":""}</h1>
                <h1 className='ffa'>{isAuth21?<NavLink to="/admin"><h2><b style={{color:"lawngreen"}}>Admin Click</b></h2></NavLink>:"Please Login"}</h1>
                <form onSubmit={handleSearch}>
        <h3>Admin Login </h3>
          <label>
          EmailId:-
            <input className='imp11' type="email" placeholder='Enter thr Email' name="email" onChange={searching}   />
          </label>
          <br />
          <br />
          <label>
          Password:-
            <input className='imp11' type="Password" placeholder='Enter thr password' name="password" onChange={searching}   />
          </label>
          <br />
          <br />
        
          <input className='imp12' type="submit" value="create items" />
        </form>
        <div>
        New User? <NavLink to="/adminregister" style={{color:"blue"}}>New Registration</NavLink>
        </div>
        {/* <div>
            <NavLink to="/admin"/>
        </div> */}
        
            </div>
          )
  

    //  }

       
}

export default AdminLogin