import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>

      <style>
      {`
          .navbar-nav .nav-link {
            position: relative;
            transition: color 0.3s;
          }

          .navbar-nav .nav-link::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: black;
            transition: width 0.3s;
          }

          .navbar-nav .nav-link:hover::before {
            width: 100%;
          }
        `}
      </style>

      <div className="container-fluid">
        <img src={logo} style={{maxWidth: "3.5%", maxHeight: "3.5%"}}/>
        <Link className="navbar-brand mx-2" to="/"><strong>JAOGUMO</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" >
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">Discover</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">Trips</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">Review</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">More</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/login"><button className="btn btn-outline-dark mx-3" type="submit">Login</button></Link>
            <Link to="/signup"><button className="btn btn-outline-dark" type="submit"> SignUp</button></Link>
            <Link to="/ingredient"><button className="btn btn-outline-dark" type="submit">Add Ingredient</button></Link>
            <Link to="/recipeDetail"><button className="btn btn-outline-dark" type="submit">Add Recipe</button></Link>
          </form>
        </div>
      </div>
    </nav>
  )
}


export default Navbar
