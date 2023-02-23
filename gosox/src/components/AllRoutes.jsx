import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../ListComponents/Home'
import Men from '../ListComponents/Men'
import Admin1 from '../Admin/Admin1'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Home/>}/>
          <Route path="/login" element={<Home/>}/>
          <Route path="/register" element={<Home/>}/>
          
          <Route path="/admin" element={<Admin1/>}/>


         

          {/* components 22 */}
          <Route path="/Sale" element={<Home/>}/>
          <Route path="/New in" element={<Home/>}/>
          <Route path="/Clothing" element={<Home/>}/>
          <Route path="/Brands" element={<Home/>}/>
          <Route path="/Shoes" element={<Home/>}/>
          <Route path="/Tailoring" element={<Home/>}/>
          <Route path="/Accessories" element={<Home/>}/>
          <Route path="/Jeans" element={<Home/>}/>
          <Route path="/Activewear" element={<Home/>}/>
          <Route path="/Topman" element={<Home/>}/>
          <Route path="/FaceBody" element={<Home/>}/>
          <Route path="/Marketplace" element={<Home/>}/>
          <Route path="/Outlet" element={<Home/>}/>
        </Routes>


        

    </div>
  )
}

export default AllRoutes