import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Foter';
import Header from '../Header/Header';
import './About.css'
// import logo3 from '../../img/logo3.png'
const About = () => {

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row about-container my-3">
                        <div className="col-sm-12 col-lg-6" >
                            <h2 className="my-5 p-5 h2-text">We share <br/>knowledge
                            <br/> with the world</h2>
                    </div>
                </div>
              <div>
                <div className="text-center">
                <h2 className="quote-h2">Changing learning for the better</h2>
                  <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                 </div>
                </div>

                <div  className="row about-quote">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                       
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="h2-text1 my-5 p-5 ">We just keep growing</h2>
                    </div>
                    
                </div>

                <div className="my-3" >
                        <p className="text-center">We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
                </div>
            </div>
            <Footer className=""></Footer>
        </div>
    );
};

export default About;