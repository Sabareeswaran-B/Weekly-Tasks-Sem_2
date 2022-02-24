import React, { useEffect, useState } from 'react';
import { CardImg, Container, Row, Card, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import moment from 'moment'
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/OrderDetails.css"




function OrderPage (props){

    const userID = localStorage.getItem('id')
    const username = localStorage.getItem('name')
    const JWT = localStorage.getItem('token')
    const id = props.match.params.id
    const [order, setOrder] = useState([]);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:9000/order/get/${id}/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setOrder(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const toggle = () => {
        setModal(!modal)
    }

    const OrderCard = (props) => {
        return(
            <div>
            <h6><b className="ml-2">Ordered On : </b>{props.date}</h6>
            <Container className="container-one">
                <Card className="card-one">
                    <a href={`/product/${props.product.productID.gender}/${props.product.productID.productType}/${props.product.productID.productID}`}>
                        <CardImg src={props.src} alt="imag"></CardImg>
                    </a>
                </Card>
                        <h6 className="center"><b>{props.brandName}</b></h6>
                        <p className="center">{props.productName}</p>
                        <p className="center">Size : {props.size}</p>
                        <p className="center">Quantity : {props.qty}</p>
            </Container>
            <hr></hr>
            <Container className="container-two">
                <h5 style={{color:"grey"}}><b>Delivery Address</b></h5><br></br>
                <h6><b>{props.name} </b> | {props.phone}</h6>
                <p>{props.doorno} {props.street} , {props.city} , {props.state} , {props.country} {props.pincode}</p>

            </Container>
            <hr></hr>
            <Container className="container-three">
                <Row>
                    <div className="col-lg-6">
                        <h6><b>TOTAL ORDER PRICE</b></h6>
                        <h6><b>TOTAL OFFER</b></h6>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="right">Rs. {props.price}</h6>
                        <h6 className="right grey">{props.offer}</h6>
                        <Button onClick={toggle} className="breakupbtn">
                                view breakup
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Breakup</ModalHeader>
                            <ModalBody>
                            <Row>
                            <div className="col-lg-6">
                                <h6><b>MRP</b></h6>
                                <h6><b>Special Price</b></h6>
                                <h6><b>Total Discount</b></h6>
                                <h6><b>Quantity</b></h6>
                                <h6><b>Total Price</b></h6>
                                <h6><b>Delivery Charge</b></h6>
                                <hr></hr><br></br>
                                <h6><b>Total Order Price</b></h6>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="right">Rs. {props.mrp}</h6>
                                <h6 className="right">Rs.{props.specialPrice}</h6>
                                <h6 className="right grey">{props.offer}</h6>
                                <h6 className="right">{props.qty}</h6>
                                <h6 className="right">Rs.{props.price}</h6>
                                <h6 className="right">Rs. 0</h6>
                                <hr></hr><br></br>
                                <h6 className="right"><b>Rs.{props.price}</b></h6>

                            </div>                            
                            </Row>
                            <hr></hr>
                            </ModalBody>
                        </Modal>
                    </div>
                </Row>
            </Container>

            </div>
        )
    }

    const GetOrder = () => {
        if(!order[0]){
            return(
                <div style={{marginTop:"150px"}}>
                    <h3 className="center grey"><b>404, Not Found!</b></h3>
                    <p className="center grey">The order you have selected is not found. Lets start shopping</p>
                    <a href="/"> <Button className="continuebtn" style={{marginLeft:"330px"}} >Continue Shopping</Button></a>
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
                    specialPrice = {data.productID.specialPrice}
                    mrp ={data.productID.MRP}
                    offer = {data.productID.offer}
                    qty = {data.qty}
                    size = {data.size}
                    href = {data._id}
                    name = {data.addressID.name}
                    phone = {data.addressID.phone}
                    doorno = {data.addressID.doorno}
                    street = {data.addressID.street}
                    city = {data.addressID.city}
                    state = {data.addressID.state}
                    country = {data.addressID.country}
                    pincode = {data.addressID.pincode}
                    date = {moment(data.createdAt).format("MMM Do YY")}
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
                    <br></br><a href="/order" style={{color:"black"}}><h6>Overview</h6></a><br></br><hr></hr><br></br>
                    <h6>Orders</h6><br></br>
                    <h6>Orders & Returns</h6><br></br><hr></hr><br></br>
                    <h6>Credits</h6><br></br>
                    <p>Myntra Credits</p>
                    <p>Myntra Coupons</p>
                    <p>MynCash</p><br></br><hr></hr><br></br>
                    <h6>Accounts</h6><br></br>
                    <a href="/profile" style={{color:"black"}}><p>Profile</p></a>
                    <p>Saved Cards</p>
                    <a href="/address" style={{color:"black"}}><p>Address</p></a><br></br><hr></hr>

                </div>
                <div className="col-lg-9">                    
                    <GetOrder />                    
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