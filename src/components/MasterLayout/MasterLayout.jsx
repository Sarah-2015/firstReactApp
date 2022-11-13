import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default class MasterLayout extends Component {
  render() {
    return (
        <>
   <div className="bg-primary ">
   <Navbar/>
        <div className="container vh-75 text-white text-center py-5 ">
          <Outlet></Outlet>
        </div>
        <Footer/>
   </div>
        </>
    )
  }
}
