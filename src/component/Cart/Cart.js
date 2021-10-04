import React from 'react';
import { Card,Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const{name,title,created,img,price,key}=props.service;
    console.log(name)
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 c-cart my-3 ">
           <Card className="">
  <Card.Header></Card.Header>
  <Card.Body>
        <div className="text-center"><img className="" src={img}/></div>
    <Card.Title className="text-center">{name}</Card.Title>
    <Card.Text>
            {title}
    </Card.Text>
            <div>
                <h3>Price : {price} $</h3>
            </div>
            <div>Instructor : {created}</div>
    <Button className="btn btn-info my-1" variant="info">Enroll Now </Button>
  </Card.Body>
  <Card.Footer className="text-muted">{key} days ago</Card.Footer>
</Card>
        </div>
    );
};

export default Cart;
