import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH_NAME } from "../Configs/PathName";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home/Home";


export default function AllRoutes() {
  return (
    <Routes>
     
      <Route path={PATH_NAME.LOGIN} element={<Login />} />
      <Route path={PATH_NAME.HOME} element={<Home />} />

      
      {/* <Route element={<Home />}>
        <Route path={PATH_NAME.DASHBOARD} element={<Dashboard />} />
        
      </Route> */}

    </Routes>
  );
}
