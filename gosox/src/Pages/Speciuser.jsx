import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const getdata=((id)=>{
  return fetch(`https://asos-backend-s4z0.onrender.com/womens/${id}`).then((res)=>res.json());
});



const Speciuser = () => {

    const [data,setData]=useState([]);
    const [load,setLoad]=useState(false);
    const [err,setErr]=useState(false);
  let param=useParams();
  
    const fetchdataurl=(()=>{
      setLoad(true);
      getdata(param.id).then((data)=> setData(data)).catch((err)=>setErr(true)).finally(()=>setLoad(false))
    })
  
    console.log(data)
    useEffect(()=>{
  fetchdataurl();
    },[])
  
    return load?(<h1>Loading...</h1>):err?(<h1>Something went wrong</h1>):
    (
      <>
        
  
     <div key={data?.id} style={{width:"45%",border:"2px solid black",margin:"auto",alignContent:"center",backgroundColor:"pink",alignItems:"center"}}>
       <img src={data?.imageURL} alt="" style={{marginLeft:"28%",border:"2px solid black",marginTop:"10px"}}/>
       <h1 style={{fontSize:"30px"}}>{data?.name}</h1>
       <h2 style={{fontSize:"30px"}}><b>£{data?.price}</b></h2>
       <h2 style={{fontSize:"30px",fontFamily:"fantasy"}}>Reviews:- {data?.numReviews}</h2>
       <h2 style={{fontSize:"25px",fontFamily:"fantasy"}}>{data?.rating} Stars</h2>
       <button style={{width:"18%",backgroundColor:"brown",marginBottom:"10px",color:"white",height:"50px",borderRadius:"10%"}}>Add To Cart</button>
       
     </div>
     <br />
  
    
  
    
      </>
    )
  
}

export default Speciuser
