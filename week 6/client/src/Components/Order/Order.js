import React, { useEffect, useState } from 'react';
import { CardImg, Container, Row, Card, Button } from 'reactstrap';
import axios from 'axios';
import moment from 'moment'
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Order.css'




function OrderPage (){

    const userID = localStorage.getItem('id')
    const username = localStorage.getItem('name')
    const JWT = localStorage.getItem('token')
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:9000/order/getAllOrder/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setOrder(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const OrderCard = (props) => {
        return(
            <Row style={{marginTop:"50px"}}>
                <div className="col-lg-3">
                    <Card className="card-two">
                        <a href={`/product/${props.product.productID.gender}/${props.product.productID.productType}/${props.product.productID.productID}`}>
                            <CardImg src={props.src} className="card-two" alt="imag"></CardImg>
                        </a>
                    </Card>
                </div>
                <div className="col-lg-9">
                    <Row className="row-one">
                        <div className="col-lg-9" >
                            <h6><b>{props.productName}</b></h6>
                            <p><b>From : </b>{props.brandName}</p>                            
                            <p><b>Size : </b>{props.size} <b className="ml-3">Quantity : </b>{props.qty}</p>
                            <p><b>Ordered On : </b>{props.date}</p>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="right"><b>Rs. {props.price}</b></h6>
                            <h6 className="right grey"><b>{props.offer}</b></h6>
                            <a href={`/order/orderdetails/${props.href}`}>
                            <Button className="detailbtn">
                            View Details<i className="fa fa-angle-double-right"></i>
                            </Button></a>
                        </div>
                    </Row>
                </div>
            </Row>
        )
    }

    const GetOrder = () => {
        if(!order[0]){
            return(
                <div style={{marginTop:"150px"}}>
                    <h3 className="center grey"><b>Hey, it feels so light!</b></h3>
                    <p className="center grey">There is nothing in your order List. Lets start shopping</p>
                    <a href="/"> <Button className="continuebtn" style={{marginLeft:"330px"}}>Continue Shopping</Button></a>
                </div>
            )
        }
        return order.map(data => {

            return(
                <OrderCard 
                    product = {data}
                    src = {data.productID.images[0].url}
                    productName = {data.productID.productName}
                    brandName = {data.productID.brandName}
                    price = {data.totalPrice}
                    offer = {data.productID.offer}
                    qty = {data.qty}
                    size = {data.size}
                    date = {moment(data.createdAt).format("MMM Do YY")}
                    href = {data._id}
                />
            )
        })
    }

    if(!userID){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 className="center grey"><b>Please Login!</b></h3>
                <h5 className="center grey">Login to your accout to view order</h5>
                <p className="center grey">If you dont't have an account register now</p>
            </Container>
        )
    }
    return(
        <Container>
            <p>Account : <b>{username}</b></p>
            <hr></hr>
            <Row>
                <div className="col-lg-3">
                    <br></br><a href="/" style={{color:"black"}}><h6>Home</h6></a><br></br><hr></hr><br></br>
                    <h6>Orders</h6><br></br>
                    <h6>Orders & Returns</h6><br></br><hr></hr><br></br>
                    <h6>Credits</h6><br></br>
                    <p>Myntra Credits</p>
                    <p>Myntra Coupons</p>
                    <p>MynCash</p><br></br><hr></hr><br></br>
                    <h6>Accounts</h6><br></br>
                    <a href="/profile" style={{color:"black"}}><p>Profile</p></a>
                    <p>Saved Cards</p>
                    <a href="/address" style={{color:"black"}}><p>Address</p><br></br><hr></hr></a>

                </div>
                <div className="col-lg-9">
                    <div className="conainer-fluid" style={{marginTop:"10px"}}>
                        <GetOrder />                        
                    </div>
                </div>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
        </Container>
    )

    
}

export default OrderPage;