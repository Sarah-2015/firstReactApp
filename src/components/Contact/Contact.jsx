import React, { Component } from 'react'
import styles from './Contact.module.css'

export default class Contact extends Component {

 ValidateEmail=()=> 
  {
      let mail=document.getElementById("email").value;
      
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
          
        document.getElementById("email").classList.remove("is-invalid")
        document.getElementById("email").classList.add("is-valid")

          document.getElementById("mail-valid").style.display="none"
         return true
      }
      else
      {
      
        document.getElementById("email").classList.remove("is-valid")
        document.getElementById("email").classList.add("is-invalid")
      document.getElementById("mail-valid").style.display="block"
          
          return false
      }
    }

     phoneValidation=()=>{
      let regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gm
      let phone = document.getElementById('phone').value;
      if(regPhone.test(phone))
      { 
          
        document.getElementById('phone').classList.remove("is-invalid")
        document.getElementById('phone').classList.add("is-valid")
          document.getElementById("invalid-phone").style.display="none"
          return true
      
          }
      else
      {   document.getElementById('phone').classList.remove("is-valid")
      document.getElementById('phone').classList.add("is-invalid")   
          document.getElementById("invalid-phone").style.display="block"
          
          
      }
       }
  render() {
  
    return (
      <div className='container w-75 py-5 text-white'>
        <h2 className={` text-uppercase pt-4 fw-bold fs-1`}>contact me</h2>
        <div className={` w-100 d-flex justify-content-center align-items-center my-3`}>
                    <div className={styles.line}></div>
                    <div className="mx-3"><i className="fas fa-star fa-2x "></i></div>
                    <div className={styles.line}></div>
                </div>
      <div className='pb-5'>
      <input className='form-control mb-2' placeholder='Name'/>
        <input onKeyUp={this.ValidateEmail} id='email' className='form-control mb-2' placeholder='Email Address'/>
        <p id="mail-valid" className=" invalid-feedback   "  style={{display:"none"}}>Please enter a valid email address.</p>
        <input id="phone" className='form-control mb-2' placeholder='Phone Number'/>
        <p id="invalid-phone" onKeyUp={this.phoneValidation} className=" invalid-feedback   "  style={{display:"none"}}>invalid phone number.</p>
        <input className='form-control mb-2' placeholder='Messsage'/>
        <button className='btn btn-light mt-3 '>Send</button>
      </div>
      </div>
    )
  }
}
