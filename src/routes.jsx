import React from 'react'
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Departments from './pages/HR/department/Department';
import Positions from './pages/HR/position/Position';
import Office from './pages/HR/office/Office';
import Project from './pages/Finance/project/Project';
import Budget from './pages/Finance/budget/Budget';
import Finance from './pages/Finance/Finance';
import General from './pages/Logistics/AssetMgt/General';
import AuthLayout from './layouts/auth/AuthLayout'
import Page404 from './pages/Page404'
import DashboardLayout from './layouts/dashboard/DashboardLayout'
import Users from "./pages/HR/user/Users";
import Asset from './pages/Logistics/AssetMgt/Asset/Asset';
import PrivateRoute from "./utils/PrivateRoute";
import AuthContext from "./context/AuthContext";
import Account from "./pages/account/Account"
import Home from "./pages/home/Home";
import LogDashboard from './pages/Logistics/LogDashboard.jsx';
import Catagory from 'src/pages/Logistics/AssetMgt/Catagory/Catagory';
import SubCatagory from 'src/pages/Logistics/AssetMgt/SubCatagory/SubCatagory';
import HrDashboard from './pages/HR/HrDashboard.jsx';
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function RoutesComponent() {
  const { userDetail,setUserDetail,setIsLoading, isLoading} = React.useContext(AuthContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decoded = jwt_decode(accessToken);
      setUserDetail(decoded);
      setIsLoading(false); // Add this line
    } else {
      setIsLoading(false); // Add this line
    }
  }, [ setUserDetail, userDetail?.userName]);
  return (

    <Routes> 
      <Route element={<AuthLayout />} >
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
          <Route path="*" element={<Page404 />} />
      <Route element={<PrivateRoute />} >
        <Route path="/app" element={<DashboardLayout />} >
          <Route path="/app/account" element={<Account />} />
            <>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/users" element={<Users />} />
            <Route path="/app/departments" element={<Departments />} />
            <Route path="/app/positions" element={<Positions />} />
            <Route path="/app/offices" element={<Office />} />
            <Route path="/app/finance" element={<Finance />} />
            <Route path="/app/budget" element={<Budget />} />
            <Route path="/app/projects" element={<Project />} />
            <Route path="/app/assets" element={<Asset />} />
            <Route path="/app/logistics" element={<LogDashboard />} /> 
            <Route path="/app/general" element={<General />} />
            <Route path="/app/catagory" element={<Catagory />} />
            <Route path="/app/subcatagory" element={<SubCatagory />} />
            <Route path="/app/hr" element={<HrDashboard />} />

            


          </>
          <Route path="/app/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>



  )
}



export default RoutesComponent