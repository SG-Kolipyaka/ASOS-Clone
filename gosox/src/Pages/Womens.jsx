

import {SimpleGrid,Spinner,Select} from "@chakra-ui/react"
import {useReducer,useEffect,useState} from "react"
import axios from "axios";
import ProductAddToCart from "../Pages/Card"
import "../Css/nav.css"
import {NavLink} from "react-router-dom"



const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,action) => {
  switch(action.type){
    case "FETCH_REQUEST":
      return{
        ...state,
        isLoading:true,
        error:false,
      }

      case "FETCH_SUCESS":
        return{
          ...state,
          data:action.payload,
          isLoading:false,
          error:false,
        }
        case "FETCH_FAILURE":
        return{
          ...state,
          data:[],
          isLoading:false,
          error:true,
        };
        default:
          throw new Error()
  }
};

const getData=({order})=>{
 return axios.get(`http://localhost:8080/womens`,{
params:{
_sort:"cost",
_order:order
}
 })
}







export default function Womens() {
  const [state,dispatch] =useReducer(reducer,initialState);
  const {data,isLoading,error} =state
  const [order,setOrder]=useState("asc")

  const fetchData=(order)=>{
    dispatch({type:"FETCH_REQUEST"});
   getData({order:order}).then((res)=>{
      dispatch({type:"FETCH_SUCESS",payload:res.data});
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch({type:"FETCH_FAILURE",payload:err.message});
    })
  }

useEffect(()=>{
 fetchData(order)
},[order])





// const handelSort=(val)=>{
// setOrder(val)
// }
if(error){
  return <h1>Something went wrong</h1>
}
  return (
<div>
  <div className="ds1">
    <NavLink to="/"><h5>Home  |</h5></NavLink> 
    <NavLink to="/men"><h5>Mens  |</h5></NavLink> 
    <NavLink to="/"><h5>CTAS  |</h5></NavLink>
  </div>

  <div className="ds2">
    <h1> <b>Think Print</b></h1>
  </div>

  <div className="ds3">
  <div className="gs321">
  <SimpleGrid columns={{base:1,md:3,lg:5,xl:6,"2xl":7}} spacing={7} className="ds31">
  <Select placeholder='Sort' onChange={(e)=>setOrder(e.target.value)}>
  <option value='asc'>Price Low To High</option>
  <option value='desc'>Price Low to High</option>
  <option value='asc'>Wats new</option>
</Select>
  
<Select placeholder='Category'>
  <option value='option1'>Jen's Wear</option>
  <option value='option2'>Canvas</option>
  <option value='option3'>Denin</option>
</Select>

<Select placeholder='Product Type'>
  <option value='option1'>T-Shirts</option>
  <option value='option2'>Hoodies</option>
  <option value='option3'>Shirts</option>
</Select>


<Select placeholder='Price Range'>
  <option value='option1'>20-30</option>
  <option value='option2'>31-40</option>
  <option value='option3'>41-50</option>
</Select>


<Select placeholder='Style'>
  <option value='option1'>Regular</option>
  <option value='option2'>Relaxed</option>
  <option value='option3'>Casual</option>
</Select>


<Select placeholder='Color'>
  <option value='option1'>Black</option>
  <option value='option2'>Blue</option>
  <option value='option3'>Brown</option>
</Select>


<Select placeholder='Brand'>
  <option value='option1'>GOxis</option>
  <option value='option2'>Denin</option>
  <option value='option3'>ZARA</option>
</Select>


<Select placeholder='Body Fit'>
  <option value='option1'>Tall</option>
  <option value='option2'>Out fit</option>
  <option value='option3'>Plus Size</option>
</Select>

<Select placeholder='Size'>
  <option value='option1'>2XL</option>
  <option value='option2'>3XL</option>
  <option value='option3'>XL</option>
</Select>

  </SimpleGrid>
  </div>
   
  </div>
<hr />

<div className="mediaquery">
    {isLoading?<Spinner/>:<SimpleGrid columns={{base:1,md:2,lg:3,xl:4,"2xl":5}} spacing={7}>
        {data.map((el)=>
        <ProductAddToCart key={el.id} data={el}/>)}
        </SimpleGrid>}
</div>
</div>
    
       



    
  );
}