import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../ListComponents/Home'
import Men from '../ListComponents/Men'
import Admin1 from '../Admin/Admin1'
import Womens from '../Pages/Womens'
import PrivateRoute from '../AuthContext/PrivateRoute'
import Registration from "../Pages/Registration"
import Login from '../Pages/Login'
import PrivateRoute2 from '../AuthContext/PrivateRoute2'
import AdminLogin from '../Pages/AdminLogin'
import AdminRegistration from '../Pages/AdminRegister'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<PrivateRoute><Men/></PrivateRoute>}/>
          <Route path="/women" element={
            <PrivateRoute>
              <Womens/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>

          <Route path="/register" element={<Registration/>}/>
          <Route path="/adminregister" element={<AdminRegistration/>}/>
          
          <Route path="/admin" element={<PrivateRoute2><Admin1/></PrivateRoute2>}/>


         

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