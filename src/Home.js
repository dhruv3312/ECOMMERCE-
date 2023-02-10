import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import Productslider from './Productslider'
import Shop from './Shop'
import Slider from './Slider'
import Ssection from './Ssection'

function Home() {
  return (
    <div>

        <Header/>
        <Slider/>
         <About/>
         <Productslider/>
         <Ssection/>
         <Shop/>
         <Logo/>
         <Footer/>
    </div>
  )
}

export default Home;