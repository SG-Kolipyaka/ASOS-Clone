import React from 'react'
import { useState,useEffect } from 'react'
import "../Css/nav.css"
import { useContext } from 'react'
import { AuthContext } from "../AuthContext/AuthContext"
import { NavLink } from 'react-router-dom'



  const initstate = {
    "isNew": "",
    "imageURL":"",
    "name": "",
    "price": "",
    "rating": "",
    "numReviews": "",
  };


const getData=(url)=>{
  return fetch(url).then((res)=>res.json());
}

const Admin1 = () => {
  const [formstate,setFormstate]=useState(initstate)
  const [loading,setloading]=useState(false)
  const [Error,setError]=useState(false)
  const [products,setProducts]=useState([])
  const {LogoutUser1}=useContext(AuthContext)



  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata=async()=>{
    setloading(true)
    try{
      let data=await getData('http://localhost:8080/womens');
      setProducts(data)
      setloading(false)
    }catch(err){
setError(true)
setloading(false)
    }
  }


  const {isNew, imageURL,name,price,rating,numReviews}=formstate

  const handelchange=(e)=>{
    const {type,name,value}=e.target
    let val =type==="number"?Number(value):value
    setFormstate({...formstate,[name]:val})
  }


  async function deletoperation(id){
let result =await fetch(`http://localhost:8080/womens/`+id,{
  method:"DELETE"
})
result=await result.json()
console.log(result)
fetchdata() 
  }

  const handelsubmit=(e)=>{
e.preventDefault();
fetch(`http://localhost:8080/womens`,{
  method:"POST",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify(formstate)
}).then((res)=>res.json()).then(()=>{setFormstate(initstate)
  fetchdata()
}).catch((er)=>{console.log(er)})

  }
  return (
    loading?<h1>Loading...</h1>:Error?<h1>Something went wrong</h1>:
    <div>
      <h1>ADMIN SIDE</h1>
<h1><NavLink to="/adminlogin" style={{color:"red",fontSize:"20px"}}><button onClick={LogoutUser1}>LOGOUT</button></NavLink></h1>
      
<form onSubmit={handelsubmit}>
<h3>Only Authorised User can Acess It</h3>
  <label>
  isNew:
    <input className='imp11' type="checkbox" placeholder='Enter thr isNew' name='isNew' value={isNew} onChange={handelchange} />
  </label>
  <br />
  <br />
  <label>
  imageURL:
    <input className='imp11' type="text" placeholder='Enter thr imageURL' name='imageURL' value={imageURL} onChange={handelchange} />
  </label>
  <br />
  <br />
  <label>
  name:
    <input className='imp11' type="text" placeholder='Enter thr name' name='name' value={name} onChange={handelchange}/>
  </label>
  <br />
  <br />
 
  <label>
    Price:
    <input className='imp11' type="number" placeholder='Enter thr Price' name='price' value={price} onChange={handelchange} />
  </label>
  <br />
  <br />

  <label>
  rating:
    <input className='imp11' type="number" placeholder='Enter thr rating' name='rating' value={rating} onChange={handelchange} />
  </label>
  <br />
  <br />

  <label>
  numReviews:
    <input className='imp11' type="number" placeholder='Enter thr numReviews' name='numReviews' value={numReviews} onChange={handelchange} />
  </label>
  <br />
  <br />
  <input className='imp12' type="submit" value="create items" />
</form>
<br />
<hr />
<hr />
<h1>ITEMS Added To The Page</h1>
{/* <br /> */}
<table>
        {/* <!-- Dont change order of columns --> */}
        <thead>
          <tr>
            <th>isNew</th>
            <th>imageURL</th>
            <th>name</th>
            <th>Price</th>
            <th>rating</th>
            <th>numReviews</th>
            <th>Delete</th>

            
          </tr>
        </thead>
        <tbody>
        {/* <!-- Append your output to tbody --> */}
        {products.map((el)=>{
          return(
            <tr>
              <td>{el.isNew}</td>
              <td>{el.imageURL}</td>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.rating}</td>
              <td>{el.numReviews}</td>
              <td className='delet' onClick={()=>deletoperation(el.id)}>Delete</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      {/* {products.map((el)=>{
        return(
          <div>
            <h1>{el.name}</h1>
          </div>
        )
      })} */}
    </div>
    
  )
}

export default Admin1