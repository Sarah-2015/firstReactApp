import React, { Component } from 'react'
import styles from './Portfolio.module.css'
import por1 from '../../images/cabin.png'
import por2 from '../../images/cake.png'
import por3 from '../../images/circus.png'
import por4 from '../../images/game.png'
import por5 from '../../images/safe.png'
import por6 from '../../images/submarine.png'

export default class Portfolio extends Component {
  render() {
    return (
      <>
      <div className="py-5 text-white">
      <h2 className='text-uppercase pt-4 fw-bold fs-1'>Portfolio</h2>
      <div className={` w-100 d-flex justify-content-center align-items-center my-4`}>
                    <div className={styles.line}></div>
                    <div className="mx-3"><i className="fas fa-star fa-2x "></i></div>
                    <div className={styles.line}></div>
                </div>
      <div className="row g-4 pb-5">
      <div className="col-md-4">
      <div className={`${styles.item} rounded-3 border `}>
          <img className='w-100' src={por1}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>

      <div className="col-md-4">
      <div className={`${styles.item} rounded-3 border`}>
          <img className='w-100' src={por2}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>
      <div className="col-md-4 ">
      <div className={`${styles.item} rounded-3 border`}>
          <img className='w-100' src={por3}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>
      <div className="col-md-4">
      <div className={`${styles.item} rounded border`}>
          <img className='w-100' src={por4}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>
      <div className="col-md-4">
      <div className={`${styles.item} rounded border`}>
          <img className='w-100' src={por5}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>
      <div className="col-md-4">
      <div className={`${styles.item} rounded border`}>
          <img className='w-100' src={por6}/>
          <div className={`${styles.layer} `}>
          <i className="fas fa-plus fa-4x"></i>
          </div>

        </div>
      </div>

      </div>
      </div>
      </>
    )
  }
}
