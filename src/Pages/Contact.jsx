import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
       
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                    <label htmlFor="name"> Ad</label>
                    <input name="name" placeholder='Adınızı Giriniz...' type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Email Giriniz...' type="email"/>
                    <label htmlFor="message">Mesaj</label>
                    <textarea name="message" required rows="6" placeholder='Mesajınızı Giriniz...'></textarea>
                    <button type='submit'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Contact