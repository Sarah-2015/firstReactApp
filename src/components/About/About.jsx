import React, { Component } from 'react'
import styles from './About.module.css'

export default class About extends Component {
  render() {
    return (
      <>
  <div className="py-5 text-white">
  <h2 className={` text-uppercase pt-4 fw-bold fs-1`}>About</h2>
  <div className={` w-100 d-flex justify-content-center align-items-center my-4`}>
                    <div className={styles.line}></div>
                    <div className="mx-3"><i className="fas fa-star fa-2x "></i></div>
                    <div className={styles.line}></div>
                </div>
      <div class="row justify-content-center pb-5">
         <div class="col-lg-4 ml-auto">
          <p class="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
            </div>
  </div>
                </>
    )
  }
}
