import React, { useEffect, useState } from 'react'
import {Row, Card, CardImg, Container, Button } from 'reactstrap';
import axios from 'axios'
import '../CSS/Bag.css'
import { removeBag, updateSizeQty } from '../Login/action';


function Bag (props) {

    const userID = localStorage.getItem('id')
    const [product, setProduct] = useState([]);
    const JWT = localStorage.getItem('token')
    useEffect(() => {
        axios.get(`http://localhost:9000/bag/getbag/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        }
        )
        .then(res => setProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const clickHandeler = (props) => {
        removeBag(props)
    }



    const CartContainer =(props)=>{

        const [size, setSize] = useState(props.size)
        const [qty, setQty] = useState(props.qty)

        const sizeHandeler = (e) => {
            setSize(e.target.value)
            let data = {
                id : props.id,
                size : e.target.value,
                qty : qty,
                totalPrice : props.price * qty
            }
            updateSizeQty(data)
        }

        const qtyHandeler = (e) => {
            setQty(e.target.value)
            let data = {
                id : props.id,
                size : size,
                qty : e.target.value,
                totalPrice : props.price * e.target.value
            }
            updateSizeQty(data)
        }
        return(
            <Row style={{marginBottom:"50px"}}>
                <div className="col-lg-3">
                    <Card style={{border: "none", height:"180px",width:"150px"}}>
                        <CardImg src={props.src} alt="cartimag"></CardImg>
                    </Card>
                </div>
                <div className="col-lg-9" style={{marginLeft:"-25px"}}>
                    <Row>
                        <div className="col-lg-9">
                            <h6><b>{props.productName}</b></h6>
                            <p><b>From : </b>{props.brandName}</p>
                        </div>
                        <div className="col-lg-3">
                            <h6 style={{textAlign:"right"}}><b>Rs. {props.price}</b></h6>
                            <h6 style={{textAlign:"right",color:"gray"}}><b>{props.offer}</b></h6>
                        </div>
                    </Row>                
                    
                    <h3 class="bag-item-can bag-item-btn "  style={{display:"inline"}}>Size : </h3>
                    <select class="bag-item-can bag-item-btn" name="size" onChange={sizeHandeler} value={size}><i style={{marginTop:"5px"}} class="fa fa-sort-desc"></i>
                        <option >S</option>
                        <option >M</option>
                        <option >L</option>
                        <option >XL</option>
                        <option >XXL</option>
                    </select>
                <h3 class="bag-item-can bag-item-btn "  style={{display:"inline"}}> Quantity : </h3>
                    <select  class="bag-item-can bag-item-btn" name="qty" onChange={qtyHandeler} value={qty}><i style={{marginTop:"5px"}} class="fa fa-sort-desc"></i>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        <option >6</option>
                    </select>
                    <hr></hr>
                    <Button className="removebtn" onClick={() => clickHandeler(props.id)}>
                    <b>Remove</b>
                    </Button>
                    <Button className="wishbtn" style={{marginTop:"10px",marginLeft:"50px"}}>
                    <b>Move To Wishlist</b>
                    </Button>
                    <hr></hr>
                </div>
                
            </Row>
            )

        
    }

    const CartProducts = () =>{
        return product.map(data => {
            return(
                <CartContainer src={data.productID.images[0].url}
                    productName = {data.productID.productName} 
                    brandName = {data.productID.brandName} 
                    price={data.productID.specialPrice} 
                    offer={data.productID.offer} 
                    qty = {data.qty}
                    size = {data.size}
                    id={data._id} />
            )
        })
    }
    const totalCalculation = () => {
        var sum = 0
        product.map(data => {
            sum += data.productID.specialPrice*data.qty;
        })
        return sum
    }
    var bagTotal = totalCalculation()
    var discount = 0
    var tax = (5/100)*bagTotal
    var deliveryCharge = 0
    var total = bagTotal+tax-discount+deliveryCharge
    

    if(!userID){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 style={{textAlign:"center",color:"grey"}}><b>Please Login!</b></h3>
                <h5 style={{textAlign:"center",color:"grey"}}>Login to your accout to view bag item</h5>
                <p style={{textAlign:"center",color:"grey"}}>If you dont't have an account register now</p>
            </Container>
        )
    }
    if(!product[0]){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 style={{textAlign:"center",color:"grey"}}><b>Hey, it feels so light!</b></h3>
                <p style={{textAlign:"center",color:"grey"}}>There is nothing in your bag. lets add some items</p>
                <a href="/"> <Button style={{width:"300px", backgroundColor:"white",color:"grey",marginLeft:"405px"}}>ADD ITEMS FROM WISHLIST</Button></a>
            </Container>
        )
    }
    return(
        <Container style={{marginTop : "-50px"}}>
            <Row>
                <Container className="col-lg-9">
                    

                        <CartProducts />

                   
                </Container>
                <Container className="col-lg-3">
                    <Row>
                        <div className="col-lg-6">
                            <h6><b>BAG TOTAL : </b></h6>
                            <h6><b>DISCOUNT : </b></h6>
                            <h6><b>TAX : </b></h6>
                            <h6><b>DELIVERY CHARGE: </b></h6>                            
                        </div>
                        <div className="col-lg-6">
                            <h6 style={{textAlign:"right"}}>Rs. {bagTotal}</h6>
                            <h6 style={{textAlign:"right"}}>Rs. {discount}</h6>
                            <h6 style={{textAlign:"right"}}>RS. {tax.toFixed(2)}</h6>
                            <h6 style={{textAlign:"right"}}>Rs. {deliveryCharge}</h6>
                        </div>
                    </Row>
                    <hr></hr>
                    <Row>
                        <div className="col-lg-6">
                            <h6><b>TOTAL : </b></h6>
                        </div>
                        <div className="col-lg-6">
                            <h6 style={{textAlign:"right"}}>Rs. {total}</h6>
                        </div>
                    </Row>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <a href='/address'>
                    <Button style={{width:"300px"}}>
                        Place Order
                    </Button></a>
                    
                </Container>
            </Row>        
        </Container>
    )
} 

export default Bag;