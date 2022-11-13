import React, { Component } from 'react'
import avatar from '../../images/avatar.svg'
import styles from './Home.module.css'


export default class Home extends Component {
  render() {
    return (
      <div className={`${styles.masthead}   d-flex align-items-center flex-column bg-primary text-white py-5`}>
             
                <img className="masthead-avatar w-25 px-2 py-5 " src={avatar} alt=""/>
           
                <h1 className={`${styles.mastheadheading} text-uppercase mb-0`}>Start React</h1>
             
                <div className={` w-100 d-flex justify-content-center align-items-center my-3`}>
                    <div className={styles.line}></div>
                    <div className="mx-3"><i className="fas fa-star fa-2x "></i></div>
                    <div className={styles.line}></div>
                </div>
              
                <p className={`${styles.mastheadsubheading} font-weight-light mb-0`}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
    )
  }
}
