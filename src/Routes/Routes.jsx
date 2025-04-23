import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import DocDetails from '../Pages/DocDetails';
import MyBookings from '../Pages/MyBookings';
import Blogs from '../Pages/Blogs';

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
        },
        {
          path:"/doctorDetails/:id",
          loader:()=>fetch('/doctors.json'),
          Component:DocDetails,
        },
        {
         path:'/myBookings',
         loader:()=>fetch('/doctors.json'),
         Component:MyBookings,

        },
        {
          
          path:'/contact',
          Component:ErrorPage,
        },
        {
          path:'/blogs',
          loader:()=>fetch('/blogs.json'),
          Component: Blogs,
        }
      ]
    },
  ]); 

