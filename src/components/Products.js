import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import './Products.css';
import { AiFillTool ,AiOutlineApi,AiFillMobile} from "react-icons/ai";
const Products = () => {
  return (
    <div className='main-product'>
      <h1>Products</h1>
      <div className='under-div'>
        <div><h1><AiFillTool/></h1><p>Server SDK
for fingerprint recognition</p><div className='underline'><Link href="https://www.neurodactyl.com/sdk">SDK</Link ></div><div className='justi'>Detection, template extraction
and matching (1:1, 1:N, M:N).
Scans and photo images are supported.</div></div><div className='verti'></div>
  <div><h1><AiOutlineApi/></h1><p>Server platform
for fingerprint recognition</p><div className='underline'><Link href="https://www.neurodactyl.com/rest-api">REST API</Link ></div><div className='justi'>Easy integration of biometric features,
microservices architecture
for system scaling and load balancing</div></div><div className='verti'></div>
  <div><h1><AiFillMobile/></h1><p>Fingers capture and recognition
for mobile devices</p><div className='underline'><Link href="https://www.neurodactyl.com/mobileapp">Mobile SDK</Link></div><div className='justi' >Touchless fingerprint acquisition
and recognition with mobile phones
(Android, iOS, web)</div></div>
      </div>
    </div>
  )
}

export default Products
