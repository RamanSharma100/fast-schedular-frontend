import React from 'react'

import { Hero, Navbar } from '../../components/HomeComponents/home'
import Content from '../../components/HomeComponents/home/Content'
import CTA from '../../components/HomeComponents/home/CTA'
import Footer from '../../components/HomeComponents/home/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
