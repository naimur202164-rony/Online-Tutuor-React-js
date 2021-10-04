import React from 'react';
import Footer from '../../Footer/Foter';
import Header from '../Header/Header';
import './Contacts.css'
import san from '../../img/san-francisco-460x350.jpeg'
import  denver from '../../img/denver-460x350.jpeg'
import dublin  from '../../img/dublin-1-460x350.jpeg'
const Contacts = () => {
    return (
            // This Contact File
            <div className="container" >
            <Header></Header>
            <div className="">
                <div className="row contact-img">
                    <div className="col-lg-6 col-sm-12">
                    </div>
                    <div className="col-lg-6 col-sm-12 p-5 my-5 ">
                    <h2 className="contact-h2">Connecting people with knowledg</h2>
                    </div>
                </div>
                {/* ourOrgins */}
                <div>
                    <h2 className=" text-center" >Our origins</h2>
                    <p className="text-center">Growing up in a small Turkish village, founder Eren Bali had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.</p>
                   <p className="text-center">After learning online changed his life, Eren partnered with co-founders Oktay Caglar and Gagan Biyani to achieve a common goal: to make quality education accessible to all.</p>
                </div>
                <div>
                    {/* this Office images */}
                    <h2 className="text-center">Our Offices</h2>
                    <div className="row m-3">
                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <div><img  className=" Office-img" src={san}/></div>
                                <h2 className="text-center">San-francisco</h2>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-6 ">
                                <div><img className="Office-img" src={denver}/></div>
                                <h2 className="text-center">Denver</h2>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-6 ">
                                <div><img className="Office-img" src={dublin}/></div>
                                <h2 className="text-center">Dublin</h2>
                            </div >
                            <div className="text-center"> <p className="text-center">For partnership and business development inquiries, please contact us at xx@Gmail.com</p>
                                <p>   Check out our Help and Support center to find quick answers to your questions.</p>
                            </div>
                           
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;