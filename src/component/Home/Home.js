import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Foter';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Home = () => {
        const [services,setServices]=useState([]);
        // render Home page Data
        useEffect(()=>{
                fetch('service.JSON')
                .then(res=>res.json())
                .then(data=>setServices(data))
        },[])
    return (
        <div className="container">
            <Header></Header>
           <Banner></Banner>

           <div className="row">
               {/* seding Home page Data In cart */}
               {
                   services.map(service=> <Cart 
                            key={service.key}
                            service={service}
                   ></Cart>)
               }
           </div>
           <div>

           </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;