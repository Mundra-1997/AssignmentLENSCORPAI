import Image from 'next/image'
import { Inter } from '@next/font/google'

import Navbar from '@/components/Navbar'
import Component1 from '@/components/Component1'
import Advantages from '@/components/Advantages'
import About from '@/components/About'
import Markets from '@/components/Markets'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Products from '@/components/Products'
import Head from './head'
export default function Home() {
  return (
    <>
    <Head/>
  <Navbar/>

  <Component1/>
  <Products/>
  <Advantages/>
  <Markets/>
  <About/>
  
  
  <Contact/>
  <Footer/>
  </>
  )
}
