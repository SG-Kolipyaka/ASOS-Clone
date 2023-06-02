import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import CartCard from './CartCard';
import {SimpleGrid} from "@chakra-ui/react"
import "../Css/nav.css"

const Cart = () => {
    const [cart1,setCart1]=useState([])
    const [quantity,setQuantity]=useState(1)


    const getCartAdd1=()=>{
        return axios.get(`https://asos-backend-s4z0.onrender.com/cart`).then((res)=> setCart1(res.data))
       }
 
       useEffect(()=>{
        getCartAdd1()
        
       },[])

       let total=Number(0);
    for(let i of cart1){
        let p=Number(i.price)
        total=total+p
    }
const handelquantity=(id,val)=>{
    cart1.map((el)=>
    el.id===id?setQuantity(quantity+val):1
 )
 
}


async function DeleteOpe(id){
  
  let result =await fetch(`https://asos-backend-s4z0.onrender.com/cart/`+id,{
  method:"DELETE"
})
result=await result.json()
console.log(result)
getCartAdd1()
      
}


   


  return (
   <div >
    <div style={{fontSize:"15px"}}>
        <h1 >Items Added To Cart</h1>
        <h3>Total: <b> £ {total}</b></h3>
    </div>
    {/* DeleteOpe={DeleteOpe} */}
    {/* quantity={quantity} handelquantity={handelquantity} */}
     <div className="mediaquery">
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4,"2xl":8}} spacing={7}>
      {cart1?.map((el)=>{
        return <CartCard key={el.id} data={el} quantity={quantity} handelquantity={handelquantity} DeleteOpe={DeleteOpe}/>
      })}
      </SimpleGrid>
    </div>
   </div>
  )
}

export default Cart
