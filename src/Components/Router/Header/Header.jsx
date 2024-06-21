import { NavLink } from "react-router-dom"

// One Navlink Created and paste on every component 

// Whenever Navbar Component rendering , then no need's to import NavLink in every component only . import on Main page 

const Header = () => {
  return (
    <div>
    <header className="container">
      <a href="#">Logo</a>

 {/* Example - 1, Link or NavLink it was work like anchor tag , link render with page  */}

      <nav>
        <ul className="menu" type='none'>
          <li>

            <NavLink to="/">Home</NavLink>

          </li>
          <li>

            <NavLink to="/about">About</NavLink>

 {/* Example -2 , Anchor tag , link render with page   */}

             {/* <a href="/about">About</a> */}


          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    </div>
  )
}

export default Header