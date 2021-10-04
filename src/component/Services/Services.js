import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Foter';
import Course from '../Course/Course';
import Header from '../Header/Header';
// this cod is more Details of Course
// Use hooks to Load data form Sarver
// import { Container } from 'react-bootstrap';
const Services = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
            fetch('datas.JSON')
            .then(res=>res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        <div className="container">
            <Header></Header>

                <h3 className="text-center my-3">Education refers to the discipline that is concerned with methods of teaching </h3>
            <div className="  row">
               {  
                    courses.map(course=><Course
                        course={course}
                    ></Course>)
               }
           </div>
           <Footer></Footer>
       </div>
          
            
         
        
    );
};

export default Services;