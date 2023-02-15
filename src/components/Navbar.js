import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(props)
{
  return(
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode==='light'?'light':'dark'}`}>
  < div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtiles</a>
   
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item'>
        <a className='nav-link' href="/about"><strong>About</strong></a>
          {/* <Link className='nav-link' to="/about"><strong>About</strong></Link> */}
        </li>
        <li className='nav-item'>
        <a className='nav-link' href="/"><strong>home </strong></a>
          {/* <Link className='nav-link' to="/"><strong>Home</strong></Link> */}
        </li>
        <li className="nav-item">
          {/* DARK */}
        <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"  type="checkbox"  onClick={props.toggleModeDark} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable {`${props.mode}`} mode</label>
      </div>
        </li>
        <li className="nav-item">
         {/* GREEN */}
      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"  type="checkbox"  onClick={props.toggleModeGreen} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable GREEN mode</label>
      </div>
        </li>
        <li className="nav-item">
          {/* RED */}
      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"  type="checkbox"  onClick={props.toggleModeRed} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable RED mode</label>
      </div>
        </li>
        <li className="nav-item">
          {/* BLUE */}
      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input"  type="checkbox"  onClick={props.toggleModeBlue} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable BLUE mode</label>
      </div>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      </div>   
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
</nav>
  )
}