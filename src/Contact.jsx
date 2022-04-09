import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
         <input type='text' placeholder='Full name' required/>
         <input type='email' placeholder='Enter email' required/>]
         <textarea placeholder='Write here.......' name='message'></textarea>
         <input type='submit' value='send'/>
      </form>
    </div>
  )
}

export default Contact
