import {SimpleGrid,Spinner,Select,Button} from "@chakra-ui/react"
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

const getData=({order,page})=>{
 return axios.get(`https://asos-backend-s4z0.onrender.com/womens`,{
params:{
  _page:page,
  _limit:12,
_sort:"price",
_order:order
}
 })
}


const initstate=  {
  "isNew": "",
  "imageURL": "",
  "name": "",
  "price": "",
  "rating": "",
  "numReviews": "",
  
}




export default function Womens() {
  const [state,dispatch] =useReducer(reducer,initialState);
  const {data,isLoading,error} =state
  const [order,setOrder]=useState("asc")
  const [page,setPage]=useState(1)
  const [carrr,setCarr]=useState(initstate)


  const handelsub=(id)=>{
    return axios.get(`https://asos-backend-s4z0.onrender.com/womens/${id}`).then((res)=> axios({
      method:'post',
      url:`https://asos-backend-s4z0.onrender.com/cart`,
      data:res.data
     }))
  }

console.log(carrr)


// const handelsub=(idd)=>{
//   getCartItems(idd)
//  return axios({
//   method:'post',
//   url:`https://asos-backend-s4z0.onrender.com/cart`,
//   data:carrr
//  })
  
//     }



  const fetchData=(order,page)=>{
    dispatch({type:"FETCH_REQUEST"});
   getData({order:order,page:page}).then((res)=>{
      dispatch({type:"FETCH_SUCESS",payload:res.data});
      console.log(res.data)
     
    })
    .catch((err)=>{
      dispatch({type:"FETCH_FAILURE",payload:err.message});
    })
  }

useEffect(()=>{
 fetchData(order,page)
},[order,page])





const handelSort=(val)=>{
setOrder(val)
}
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
  <SimpleGrid columns={{base:1,md:3,lg:8,xl:6,"2xl":7}} spacing={7} className="ds31">
  <Select placeholder='Sort' onChange={(e)=> handelSort(e.target.value)}>
  <option value='asc'>Price Low To High</option>
  <option value='desc'>Price High to Low</option>
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

{/* handelsub={handelsub} */}
{/* getCartItems={getCartItems}  */}

<div className="mediaquery">
    {isLoading?<Spinner/>:<SimpleGrid columns={{base:1,md:2,lg:3,xl:4,"2xl":8}} spacing={7}>
        {data.map((el)=>
      <ProductAddToCart key={el.id} data={el} handelsub={handelsub}/>)}
        </SimpleGrid>}
</div>
<br />



<div>
<Button disabled={page===1} colorScheme='blue' mr="10px" onClick={()=>setPage(page-1)} >Previous</Button>
<Button colorScheme='red'>{page}</Button>
<Button  colorScheme='blue' ml="10px" onClick={()=>setPage(page+1)}>Next</Button> 
</div>
<br />
</div>
    
  );
}




