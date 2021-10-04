import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Heade.css'

const Header = () => {
  return (
 <div>
    <div className="">
            <div className="menu-container ">

              <Navbar>
              <ul className="d-flex align-items-end justify-content-start naver">
                {/* All Route Button set From Here */}
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/service" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact</li>
                </Link>
              </ul>
              </Navbar>
             
            </div>
            {/* This Is Web site Banner */}
            <div className="">

            </div>
          </div>

 </div>

        
  
 
  

  )};

export default Header;