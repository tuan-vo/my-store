import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

import AdminNav from '../../admin/AdminNav'


const Layout = () => {

  const location = useLocation()


  return <>
  {
    location.pathname.startsWith('/dashboard')? <AdminNav/>: <Header/>
  } 
  <div>
    <Routers/>
  </div>
  <Footer/>
  </>
}

export default Layout