import React from 'react'
import Image from 'next/image'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-main'>
     <div><Image src="/logo.png" width={170} height={30}></Image></div> 
     <p>All Right Reserved, 2023. Neurodactyl, LLC.<br/>
Address: Georgia, Tbilisi, Nadzaladevi District, Kursebi Street, <br/>N15. Identification Number: 400354488<br/>
E-mail us: info@neurodactyl.com</p>

    </div>
  )
}

export default Footer
