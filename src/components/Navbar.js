
"use client";



import { useState } from 'react';
import Image from 'next/image'
import "./Navbar.css"

import { LiaEnvelopeSolid } from "react-icons/lia";
import { AiFillCaretDown } from "react-icons/ai";


const Navbar = () => {
     const [productHovered, setProductHovered] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);

  const handleProductHover = () => {
    setProductHovered(true);
  };

  const handleProductLeave = () => {
    setProductHovered(false);
  };

  const handleSolutionsHover = () => {
    setSolutionsHovered(true);
  };

  const handleSolutionsLeave = () => {
    setSolutionsHovered(false);
  };
  return (
    <div className='main-div'>
        <div><Image src="/logo.png" width={300} height={50}></Image></div>
         <div className='foo'  onMouseEnter={handleProductHover}
       ><span>Products<AiFillCaretDown style={{fontSize:"10px"}}/> </span> </div>
   <div
        className={`t-menusub__content ${productHovered ? 'show' : ''} pro`}
          onMouseLeave={handleProductLeave}
      >
          <ul>
          <li>Server SDK for fingerprint recognition</li>
          <li>Server platform for fingerprint recognition</li>
          <li>Mobile SDK for touchless fingerprint capture</li>
        </ul>
      </div>

       
   
         <div  className='foo' onMouseEnter={handleSolutionsHover}
        ><span>Solutions <AiFillCaretDown style={{fontSize:"10px"}}/></span> </div>
<div
        className={`t-menusub__content ${solutionsHovered ? 'show' : ''} sol`}
         onMouseLeave={handleSolutionsLeave}
      >
          <ul>
          <li>Biometric Deduplication</li>
          </ul>
        
        
      </div>

        
      
           <div><span>Advantages</span></div>
            <div><span>Markets</span></div>
             <div><span>News </span></div>
              <div><span>About Us</span></div>
               <div><span>Contacts</span></div>
               <div><span><LiaEnvelopeSolid/></span></div>
    </div>
  )
}

export default Navbar
