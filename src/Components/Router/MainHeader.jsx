import React from 'react'

// Whenever Navbar Component render here , then no need's to import NavLink in every component

import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <>
        <Header />

      {/* Whenever In parent component , Nested Rouating the all child component's , then How to Share with all child component , Outlet created  */}

        {/* Outlet created , and Double page showed with parent component , How to particular one Component data show   */}

        {/*  Then we need's to go All child component (Home, About , Contact , Register ) Inside  Header NavLink Component Deleted , Only Header Component adding on MainHeader Componenet  , Then It was Not show the Double Page   */}

        <Outlet />

      
    </>
    
  )
}

export default MainHeader