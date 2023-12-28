import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-h2">
      <h2> &copy;2023@yemek.net</h2>
      </div>
      <div className="footer-svg">
     <a> <FaFacebookSquare/></a>
     <a > <FaInstagram/></a>
     <a > <FaXTwitter/></a>
      </div>
    </div>
  )
}

export default Footer