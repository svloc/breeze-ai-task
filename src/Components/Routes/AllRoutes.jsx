import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATH_NAME } from "../Configs/PathName";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home/Home";
import HelloWorld from "../Pages/Home/HelloWorld";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path={PATH_NAME.LOGIN} element={<Login />} />
      <Route element={<Home />}>
        <Route path={PATH_NAME.HELLOWORLD} element={<HelloWorld />} />
      </Route>
    </Routes>
  );
}
