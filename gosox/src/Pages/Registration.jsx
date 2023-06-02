import React from 'react'
import { NavLink } from 'react-router-dom';

import { useState } from 'react'
import "../Css/nav.css"



  const initstate = {
 "firstname":"",
 "lastname":"",
 "email":"",
 "password":""
  };




const Registration = () => {

   
        const [formstate,setFormstate]=useState(initstate)
        
       
      
      
      
        
      
     
      
        const {firstname,lastname,email,password}=formstate
      
        const handelchange=(e)=>{
          const {type,name,value}=e.target
          let val =type==="number"?Number(value):value
          setFormstate({...formstate,[name]:val})
        }
      
   
      
        const handelsubmit=(e)=>{
      e.preventDefault();
      fetch(`https://asos-backend-s4z0.onrender.com/users`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(formstate)
      }).then((res)=>res.json()).then(()=>{setFormstate(initstate)
       
      }).catch((er)=>{console.log(er)})
      
        }
        return (
         
    <div>
        <form onSubmit={handelsubmit}>
<h3>Login </h3>
<label>
  First Name:-
    <input className='imp11' type="text" placeholder='Enter thr isNew' name='firstname' value={firstname} onChange={handelchange}/>
  </label>
  <br />
  <br />
  <label>
  Last Name:-
    <input className='imp11' type="text" placeholder='Enter thr isNew' name='lastname'  value={lastname} onChange={handelchange} />
  </label>
  <br />
  <br />
  <label>
  EmailId:-
    <input className='imp11' type="text" placeholder='Enter thr isNew' name='email' value={email} onChange={handelchange}/>
  </label>
  <br />
  <br />
  <label>
  Password:-
    <input className='imp11' type="text" placeholder='Enter thr imageURL' name='password' value={password} onChange={handelchange}/>
  </label>
  <br />
  <br />

  <input className='imp12' type="submit" value="create items" />
</form>
<div>
Already a User? <NavLink to="/adminlogin" style={{color:"blue"}}>Login</NavLink>
</div>

    </div>
  )
}

export default Registration