// Router work , without page refresh , page open 

import React from 'react'
import '../src/Components/Router/Router.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Router/Home'
import About from './Components/Router/About'
import Contact from './Components/Router/Contact'
import Register from './Components/Router/Register'
import Error from './Components/Router/Error'
import MainHeader from './Components/Router/MainHeader'

const Router = () => {
  return (

// Create the BrowserRouter and then Routes created and Route created 

    <BrowserRouter>
        <Routes>

{/*  Route path Defiend Here  */}

 {/*  Page component render  */}
{/*  Link or NavLink component render */}
{/* Nested Routing created  */}


            <Route path='/' element={ <MainHeader />}>                                 {/*  Path in forward to slace / , IT's mean that was Parent ,  it will render the MainHeader Component  */}

{/*  Index Props Created   */}

                <Route index element={ <Home />} />                                     {/* To click the Parent Component , Then it was show with Home Component  Data Show , then we add (index) */}
                <Route path='/about' element={ <About />}/>                             {/* Present component render here  */}          
                <Route path='/contact' element={ <Contact />}/>
                <Route path='/register' element={ <Register />}/>
                <Route path="*" element={ <Error /> } />                                    {/*  Path is forward to * , it's mean whenever user write in any wrong text , it was not Existing , then  Error Component Showed    */}

            </Route>                                                          {/* Nested Routing created ,All child route in one Parent Route ,  Suppose whenever NavData avail only MainHeader Component then  All child component clicked  it was show but it was avail only MainHeader Component   */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router