import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Card, Row, Button, Container, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { removeAddress, createOrder } from '../Login/action';
import AddressForm from './AddressForm';
import "bootstrap/dist/css/bootstrap.min.css";



function Address (props) {
    const userID = localStorage.getItem('id')
    const JWT = localStorage.getItem('token')
    const [modal,setModal] = useState(false)
    const [address, setAddress] = useState([])
    const [addressID, setAddressID] = useState('')
    const [bag, setBag] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:9000/address/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setAddress(res.data))
        .catch(err => console.error(`Error : ${err}`))
        axios.get(`http://localhost:9000/bag/getbag/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setBag(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const toggle =() => {
        setModal(!modal)
    }

    const removeHandler = (props) => {
        removeAddress(props)
        axios.get(`http://localhost:9000/address/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setAddress(res.data))
        .catch(err => console.error(`Error : ${err}`))
        setAddressID('')
    }

    const selectHandler = (props) => {
        setAddressID(props)
    }

    const AddressCard = (props) => {
        return(
            <Card style={{ margin : "30px",padding : "30px", width : "500px", height : "430px"}} >
                <Row>
                    <Input type='radio' id='address' name='address' onClick={() => selectHandler(props.id)}/>
                    <Button style={{marginLeft : "370px",backgroundColor:'white',color:'grey',border:'none'}} onClick={() => removeHandler(props.id)}>
                        <b><i class="fa fa-times" style={{fontSize: '20px'}} aria-hidden="true"></i></b>
                    </Button>
                </Row>
                

                <Row>
                    <div className="col-lg-4"><b>NAME :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.name}</p></div>

                    <div className="col-lg-4"><b>DOOR NO. :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.doorno}</p></div>

                    <div className="col-lg-4"><b>STREET :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.street}</p></div>

                    <div className="col-lg-4"><b>CITY :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.city}</p></div>

                    <div className="col-lg-4"><b>STATE :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.state}</p></div>

                    <div className="col-lg-4"><b>COUNTRY :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.country}</p></div>

                    <div className="col-lg-4"><b>PINCODE :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.pincode}</p></div>

                    <div className="col-lg-4"><b>PHONE NO. :</b><br></br></div>
                    <div className="col-lg-8"><p>{props.phone}</p></div>

                </Row>
            </Card>
        )
    }

    const GetAddress = () => {

        return address.map(data => {
            return(
                <AddressCard 
                    id = {data._id}
                    name = {data.name}
                    doorno = {data.doorno}
                    street = {data.street}
                    city = {data.city}
                    state = {data.state}
                    country = {data.country}
                    pincode = {data.pincode}
                    phone = {data.phone}
                />
            )
        })
    }

    const PlaceOrder = (props) => {
        if(!addressID){
            toast("Please Select a Address")
        }else{
        return props.map(data => {
            let order = {
                userID : userID,
                addressID : addressID,
                productID : data.productID._id,
                qty : data.qty,
                size : data.size,
                totalPrice : data.totalPrice,
                id : data._id
            }
            createOrder(order)
        })}
    }

    const OrderButton = (props) =>{
        if(props === '/bag/address'& !bag[0]===false){
            return(
                <Button style={{width:"300px"}} onClick={() => PlaceOrder(bag)}>
                <b>Place Order</b>
                </Button>
            )
        }else{
            return(
                <div></div>
            )
        }
    }


    if(!userID){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 style={{textAlign:"center",color:"grey"}}><b>Please Login!</b></h3>
                <h5 style={{textAlign:"center",color:"grey"}}>Login to your accout to view bag item</h5>
                <p style={{textAlign:"center",color:"grey"}}>If you dont't have an account register now</p>
            </Container>
        )
    }
    return(
        <div className="container-fluid">
            <Row>
                
                <GetAddress />
                
                <div className="col-lg-3">
                    <Card onClick={toggle} style={{height:"200px",width:"200px", margin:"30px"}}>
                        <i class="fa fa-plus" aria-hidden="true" style={{fontSize:"80px",marginTop:"60px"}}></i>
                    </Card>
                    {OrderButton(props.location.pathname)}
                </div>
            
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Address</ModalHeader>
              <ModalBody>
              <AddressForm />
              </ModalBody>
            </Modal>
            </Row>
        </div>
    )
}

export default Address;