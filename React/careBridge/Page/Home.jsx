import React from 'react'
import { Header } from '../src/Components/Header'
import { Footer } from '../src/Components/Footer'
import { Hero } from '../src/Components/Hero'
import Banner1 from '../src/Components/Banner1'
import Banner2 from '../src/Components/Banner2'
import { Support } from '../src/Components/Support'
import { Achivements } from '../src/Components/Achivements'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Banner1/>
        <Banner2/>
        <Achivements/>
        <Support/>
        <Footer/>
    </div>
  )
}

export default Home