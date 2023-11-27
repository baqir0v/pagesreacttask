import { useState } from "react"
import "./layout.scss"
import { Link, NavLink } from "react-router-dom"
function Navbar() {
  const [isAboutOpen, setisAboutOpen] = useState(false)
  const [isActive, setisActive] = useState(true)
  function handleAbout() {
    setisAboutOpen(!isAboutOpen)
  }
  function handleActive() {
    setisActive(!isActive)
  }
  return (
    <nav>
      <div className="navbox">
        <Link to={"/"}><p>Dazzling Demo</p></Link>
        <div className="links">
          <NavLink to={"/"} onClick={handleActive} className="navlinks" activeClassName="active">
            Home
          </NavLink>
          <NavLink to={"/gallery"} onClick={handleActive} className="navlinks" >Gallery</NavLink>
          <NavLink to={"/shortcodes"} onClick={handleActive} className="navlinks" >Shortcodes</NavLink>
          <div className="aboutclass">
            <button onClick={handleAbout}>About
            </button>
            <ul className={isAboutOpen ? "abouts" : "dnone"}>
              <NavLink to={"/pagemarkup"}>Page Markup And Formatting</NavLink>
              <NavLink to={"/contactform"}>Contact Form</NavLink>
              <NavLink to={"/pageimg"}>Page Image Alignment</NavLink>
              <NavLink to={"/clearfloat"}>Clearing Floats</NavLink>
              <NavLink to={"/comment"}>Page with comments</NavLink>
              <NavLink to={"/nocomment"}>Page with comments disabled</NavLink>
              This item is disabled
            </ul>
          </div>
          <NavLink to={"/languages"} onClick={handleActive} className="navlinks" >Languages</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar