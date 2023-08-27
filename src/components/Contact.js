import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-main'>
      <h1>Contact Us</h1>
      <h3>Any question about our products or technologies?<br></br>
Just text us!</h3>
      <div className='sub-form'>
        <div><label>Email</label><input type='text'></input></div>
         <div><label>Name</label><input type='text'></input></div>
         <div> <label>Phone</label><input type='text'></input></div>
          <div> <label>Your Question</label><textarea type='text'></textarea></div>
          <div></div> <button>Send</button></div>
      </div>
  
  )
}

export default Contact
