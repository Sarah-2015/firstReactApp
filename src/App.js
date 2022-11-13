import React, { Component } from 'react'
import  {createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './components/MasterLayout/MasterLayout';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';

let routes=createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index:true,
        element: <Home />
       
      },
      {
        path: "portfolio",
        element: <Portfolio />
       
      },
      {
        path: "about",
        element: <About />
       
      },
      {
        path: "contact",
        element: <Contact />
       
      },
      {
        path: "*",
        element: <NotFound />
       
      }
    
    ],
  }
]);



export default class App extends Component {
 
  render() {
    return <>
    <RouterProvider router={routes}/>
    </>
  
      
 
    
  }
}

