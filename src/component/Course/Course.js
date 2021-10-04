import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
  // Loading Data from Server
    console.log(props)
    // Adding ta Int Array
    const {name,price,title,created,key,img}=props.course;
    return (
                    
                <div className="col-lg-4 ">
                 
       <Card className="card-style my-3 courses">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name.slice(0,30)}</Card.Title>
          <Card.Text>
            {title}
          </Card.Text>
          <div>
              <h5 className="mt-2">Price :{price}</h5>
              <h5>Instructor : {created}</h5>
          </div>
        </Card.Body>
      </Card>

        </div>
        
        
    );
};

export default Course;