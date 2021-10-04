import React from 'react';
import logo from '../../img/logo.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="container d-flex row banner-container my-2">
              <div className="col-lg-6 col-sm-12  quots ">
              <h2 className="my-5 text-center">Always something <br/> new to learn</h2>
                  <p className="mb-3">With courses added <br/> regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
              </div>
              {/* This is Img source of Home page */}
              <div className="col-lg-6 col-sm-12 ">
                <img className=" logos " src={logo} alt=""/>
              </div>
        </div>
    );
};

export default Banner;