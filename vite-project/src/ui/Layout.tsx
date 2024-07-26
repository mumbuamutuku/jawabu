import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'

const Layout = ({children}: {children:React.ReactNode}) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}

export default Layout
