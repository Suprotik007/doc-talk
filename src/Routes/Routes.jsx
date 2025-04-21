import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index:true,
          loader:()=>fetch('/doctors.json'),
          path:'/',
          Component:Home,
        }
      ]
    },
  ]); 