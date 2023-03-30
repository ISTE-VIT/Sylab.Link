import React, { useState, useEffect } from "react"
import "./Home.css"
import vector1 from "../Images/vec1.png"

function App() {

  return (
    <div className="App">
      <div className="App">
        {/* <div className='navbar'>
          <nav>
            <ul className='logo-ul'>
              <li>
                <h1 className='logo-heading'>SYLAB<span>.LINK</span></h1>
              </li>
            </ul>
            <ul className='middle-ul'>
              <li>Start Page</li>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <ul className='button-ul'>
              <button classname="login-btn">LOGIN</button>          
              <button className="sign-up-btn">SIGN UP</button>          
            </ul>
          </nav>            
        </div> */}

        <div className="main-head-par">
          
          <div className="main-head">
              <p>Get <span>relevant</span> links for your <span>entire syllabus</span> in just one <span>click</span></p>
              <button>Get Started</button>
          </div>
          <div className="main-vec">
              <img src={vector1} alt="alternate-vector" />
          </div>

        </div>

        <div className="features-div">

          <div className="feature-heading">
            <h1><span>FEATUR</span>ES</h1>
          </div>

          <div className="featurezz">
            <div className="feat-text">
              <h1>UPLOAD YOUR SYLLABUS</h1>
              <p>Upload the pic of your syllabus and wait for us to do the magic. </p>
            </div>
            <div className="feat-vec">
              <img src={vector1} alt="alternate-vector" />
            </div>
          </div>

          <div className="featurezz">
            <div className="feat-vec">
              <img src={vector1} alt="alternate-vector" />
            </div>
            <div className="feat-text">
              <h1>UPLOAD YOUR SYLLABUS</h1>
              <p>Upload the pic of your syllabus and wait for us to do the magic. </p>
            </div>
          </div>

          <div className="featurezz">
            <div className="feat-text">
              <h1>UPLOAD YOUR SYLLABUS</h1>
              <p>Upload the pic of your syllabus and wait for us to do the magic. </p>
            </div>
            <div className="feat-vec">
              <img src={vector1} alt="alternate-vector" />
            </div>
          </div>

          <div className="featurezz">
            <div className="feat-vec">
              <img src={vector1} alt="alternate-vector" />
            </div>
            <div className="feat-text">
              <h1>UPLOAD YOUR SYLLABUS</h1>
              <p>Upload the pic of your syllabus and wait for us to do the magic. </p>
            </div>
          </div>

        </div>

        <footer className="footer-area">
            <div className="footer-logo">
                <h1 className='logo-heading'>SYLAB<span>.LINK</span></h1>
            </div>
            <div className="col-2">
                <h1>Company</h1>
                <p>About Us</p>
                <p>About Us</p>
                <p>About Us</p>
            </div>
            <div className="col-3">
                <h1>More</h1>
                <p>About Us</p>
                <p>About Us</p>
                <p>About Us</p>
            </div>
        </footer>

      </div>
    </div>

  )
}

export default App;