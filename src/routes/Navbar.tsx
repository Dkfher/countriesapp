import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <Link to="/" className="navbar-brand">Paises App</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/pais/:id" className="nav-item nav-link" >Por País</Link>
      <Link to="/capital"className="nav-item nav-link" >Por Capital</Link>
      <Link to="/region"className="nav-item nav-link" >Por Región</Link>
    </div>
  </div>
</nav>
<br />
</div>
  )
}

export default Navbar