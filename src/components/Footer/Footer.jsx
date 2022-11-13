import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className='bg-secondary text-white text-center py-5'>
    <div className="container py-5">
    <div className='row   '>
        <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Location</h4>
        <p className="lead mb-0">2215 John Daniel Drive<br/>Clark, MO 65243</p>

        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Around the Web</h4>
        <div className='d-flex justify-content-center'>
        <a className="btn btn-outline-light  mx-1" href="#!"> <i class="fab fa-fw fa-facebook-f"></i></a>
        <a className="btn btn-outline-light  mx-1" href="#!"> <i class="fab fa-fw fa-twitter"></i></a>
        <a className="btn btn-outline-light  mx-1" href="#!"> <i class="fab fa-fw fa-linkedin"></i></a>
        <a className="btn btn-outline-light  mx-1" href="#!"> <i class="fab fa-fw fa-dribbble"></i></a>

        </div>

        </div>
        <div className="col-lg-4">
        <h4 className="text-uppercase mb-4">About Freelancer</h4>
        <p class="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>

        </div>
      </div>
    </div>
      
      </footer>
      <div className='bg-dark text-center text-white py-5 '>Copyright © Your Website 2021</div>
      </>
    )
  }
}
