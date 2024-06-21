import React from 'react'
// import './Components/Router2/Router.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle.min.js'

import Home from './Components/Router2/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import LoginPage from './Components/Router2/LoginPage'
import About from './Components/Router2/About'
import Contact from './Components/Router2/Contact'
import Help from './Components/Router2/Help'
import Error from './Components/Router2/Error'
import Footer from './Components/Router2/Footer/Footer'
import Header from './Components/Router2/Header/Header'
import { Provider } from 'react-redux'
import store from './Components/Redux/Store'
// console.log(store.getState());

const Router2 = () => {
  return (
    <Provider store={store}>

      <BrowserRouter>
          <Header />
              <Routes>
                  {/* <Route path='/' element={<LoginPage/>}> */}
                      <Route path='/' element={ <Home />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/help' element={ <Help />} />
                      <Route path='*' element={<Error />} />
                  {/* </Route> */}
              </Routes>
          <Footer />
          <Outlet />
      </BrowserRouter>

    </Provider>
  )
}

export default Router2