import React from 'react'

import { useParams } from 'react-router-dom';
import Nav from '../../shared-components/Nav';
import Footer from '../../shared-components/Footer';
import SideBar from '../../shared-components/SideBar';
import Header from './components/Header';
import './products.css'
import Items from './components/Items';
function Products() {
    let params = useParams();
  return (
    <>
    <Nav/>
    <Header category={params.category} />
    <Items category={params.category}/>
    <SideBar/>
    <Footer/>
    </>
  )
}

export default Products