import React from 'react'
import Image from 'next/image'
import "./Advantages.css"
const Advantages = () => {
  return (
    <div className='main-advantage'>
      <h1>Advantages</h1>
      <div className='advantage'>
        <div><Image src="/rocket.png" width={55} height={55}/><span>Superior accuracy</span><p>Neural network based technology provides
extremely high recognition accuracy
for verification and identification</p></div>
        <div><Image src="/fingerprint.png" width={55} height={55}/><span>All types of fingerprints</span><p>Processing of photo images and standard scans
(flats, rolls, latents) with one technology
creating templates compatible between each other</p></div>
       <div><Image src="/template.png" width={55} height={55}/><span>Fixed size of biometric template</span><p>Fingerprint biometric templates
always have standard size - 512 bytes
regardless of fingerprint or image type</p></div>
        <div><Image src="/flash.png" width={55} height={55}/><span>High matching speed</span><p>Matching performance is 100+ million matches
per 1 s on one modern CPU and up to 1 billion
matches per 1 s using batch mode or GPU</p></div>
        <div><Image src="/dpi.png" width={55} height={55}/><span>DPI tolerant technology</span><p>Algorithm works with images or scans from 250 dpi and higher and doesn't require exact DPI values
(for example, exactly 500 dpi)</p></div>
        <div><Image src="/accuracy.png" width={55} height={55}/><span>Identification with the highest confidence</span><p>By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable
and user-friendly identification</p></div>
      </div>
    </div>
  )
}

export default Advantages
