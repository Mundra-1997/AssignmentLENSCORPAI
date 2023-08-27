import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./Component1.css"
const Component1 = () => {
  return (
    <div className='component1-main-div'>
        <div className='component1-sub-div'><div><h2>Contactless fingerprint recognition</h2></div>
        <div><ul>
            <li>Highly accurate neural network algorithms</li>
            <li>Work with scans and photo images</li>
            <li>All types of fingerprints are supported</li>
        </ul></div>
         <div> <h3>Top-tier algorithm accuracy<Link href="https://pages.nist.gov/pft/results/pftiii/" style={{textDecoration:"underline"}}> in NIST PFT III evaluation</Link></h3></div>
        </div>
           <div className='image-container'>
            <Image class="zoom-image" src="/hand_sm_new.png" width={800} height={500}></Image>
        </div>
    
    </div>
  )
}

export default Component1
