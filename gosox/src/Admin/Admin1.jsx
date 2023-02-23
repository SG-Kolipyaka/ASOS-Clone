import React from 'react'
import { useState,useEffect } from 'react'
import "../Css/nav.css"

const initstate={
  title:"",
  name:"",
  image:"",
  price:"",
  description:"",
}

const getData=(url)=>{
  return fetch(url).then((res)=>res.json());
}

const Admin1 = () => {
  const [formstate,setFormstate]=useState(initstate)
  const [loading,setloading]=useState(false)
  const [Error,setError]=useState(false)
  const [products,setProducts]=useState([])



  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata=async()=>{
    setloading(true)
    try{
      let data=await getData('https://636c99f691576e19e30fb69c.mockapi.io/items');
      setProducts(data)
      setloading(false)
    }catch(err){
setError(true)
setloading(false)
    }
  }


  const {title,name,image,price,description}=formstate

  const handelchange=(e)=>{
    const {name,value}=e.target
    setFormstate({...formstate,[name]:value})
  }


  async function deletoperation(id){
let result =await fetch(`https://636c99f691576e19e30fb69c.mockapi.io/items/`+id,{
  method:"DELETE"
})
result=await result.json()
console.log(result)
fetchdata() 
  }

  const handelsubmit=(e)=>{
e.preventDefault();
fetch(`https://636c99f691576e19e30fb69c.mockapi.io/items`,{
  method:"POST",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify(formstate)
}).then((res)=>res.json()).then(()=>{setFormstate(initstate)}).catch((er)=>{console.log(er)})
  }
  return (
    loading?<h1>Loading...</h1>:Error?<h1>Something went wrong</h1>:
    <div>
      <h1>ADMIN SIDE</h1>
      
<form onSubmit={handelsubmit}>
<h3>Only Authorised User can Acess It</h3>
  <label>
    Title:
    <input className='imp11' type="text" placeholder='Enter thr title' name='title' value={title} onChange={handelchange} />
  </label>
  <br />
  <br />
  <label>
    Name:
    <input className='imp11' type="text" placeholder='Enter thr Name' name='name' value={name} onChange={handelchange} />
  </label>
  <br />
  <br />
  <label>
    Image URL:
    <input className='imp11' type="text" placeholder='Enter thr Image Url' name='image' value={image} onChange={handelchange}/>
  </label>
  <br />
  <br />
 
  <label>
    Price:
    <input className='imp11' type="text" placeholder='Enter thr Price' name='price' value={price} onChange={handelchange} />
  </label>
  <br />
  <br />

  <label>
    Description:
    <input className='imp11' type="text" placeholder='Enter thr Description' name='description' value={description} onChange={handelchange} />
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
            <th>Title</th>
            <th>Name</th>
            <th>Image Url</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
        {/* <!-- Append your output to tbody --> */}
        {products.map((el)=>{
          return(
            <tr>
              <td>{el.title}</td>
              <td>{el.name}</td>
              <td>{el.image}</td>
              <td>{el.price}</td>
              <td>{el.description}</td>
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