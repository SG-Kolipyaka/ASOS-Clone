import React from 'react'
import { NavLink,Navigate } from 'react-router-dom';

import { useState,useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';


export const fetchData = async () => {
    // make fetch request to the mentioned api and return the result here
    try{
      const res=await fetch(`http://localhost:8080/users`);
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

function Login(){
    const [search,setSearch]=React.useState(inistate);
    const [info,setInfo]=React.useState([]);
    // const [info2,setInfo2]=React.useState([]);
    const {isAuth,LoginUser,LogoutUser}=useContext(AuthContext)
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
        // setInfo2(flydata); 
       
        console.log(flydata.length)

        const aa=flydata.length===1?SetAuth2(true):SetAuth2(false)
       
       return aa
        
    
      };

     if(Auth){
        if(Auth){
            LoginUser()
            
        }else{
            LogoutUser()
        }
        // <Navigate to="/women"/>
        
     }
     if(isAuth){
      return  <Navigate to="/women"/>
     }
     else{
        return (
            
            <div>
                <h1 className='ffa'>{isAuth?"Login Successful !":""}</h1>
                <form onSubmit={handleSearch}>
        <h3>Login </h3>
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
        New User? <NavLink to="/register" style={{color:"blue"}}>New Registration</NavLink>
        </div>
        
            </div>
          )
  

     }

       
}

export default Login