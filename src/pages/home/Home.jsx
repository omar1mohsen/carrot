import React from 'react'
import Nav from '../../shared-components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import NewArrivals from './components/NewArrivals'
import Services from './components/Services'
import Deal from './components/Deal'
import LastNews from './components/LastNews'
import Footer from '../../shared-components/Footer'
import SideBar from '../../shared-components/SideBar'
import'./home.css'
function Home() {
  return (
    <main className='relative'>
    <Nav/>
      <Hero/>
      <Categories/>
      <NewArrivals/>
      <Services />
      <Deal />
      <LastNews />
      <Footer/>
      <SideBar/>
    </main>
  )
}

export default Home