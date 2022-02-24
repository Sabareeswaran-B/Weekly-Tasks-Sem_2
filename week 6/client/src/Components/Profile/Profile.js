import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import axios from 'axios';
import ProfileForm from './ProfileForm';
import "bootstrap/dist/css/bootstrap.min.css";


function Profile (){

    const userID = localStorage.getItem('id')
    const JWT = localStorage.getItem('token')
    const [user , setUser] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:9000/user/${userID}`,
        {
            headers : {Authorization : `Bearer ${JWT}`}
        })
        .then(res => setUser(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const toggle = () => {
        setModal(!modal)
    }

    const ProfileContent = (props) => {
        var value = props.value
        if (!value) {
            value = "---"
        }
        return(
        <Row>
            <div className="col-lg-3">
                <h6><b>{props.name}</b></h6>

            </div>
            <div className="col-lg-1">
                <h6><b>:</b></h6>
            </div>
            <div className="col-lg-8">
                <h6>{value}</h6>
            </div>
        </Row>
        
        )
    }
    if(!userID){
        return(
            <Container style={{marginTop:"230px",marginBottom:"200px"}}>
                <h3 style={{textAlign:"center",color:"grey"}}><b>Please Login!</b></h3>
                <h5 style={{textAlign:"center",color:"grey"}}>Login to your accout to view your profile</h5>
                <p style={{textAlign:"center",color:"grey"}}>If you dont't have an account register now</p>
            </Container>
        )
    }
    return(
        <Container>
            <h4><b>PERSONAL INFORMATION</b></h4><hr></hr><br></br>
           
                <ProfileContent name="FIRST NAME" value={user.name}/><br></br>
                <ProfileContent name="MOBILE NUMBER" value={user.phone}/><br></br>
                <ProfileContent name="EMAILID" value={user.email}/><br></br> 
                <ProfileContent name="DOB" value={user.dob}/><br></br> 
                <ProfileContent name="GENDER" value={user.gender}/><br></br> 

           
            <hr></hr>
            <Button className="removebtn" onClick={toggle}>EDIT</Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>EDIT PROFILE</ModalHeader>
              <ModalBody>
              <ProfileForm />
              </ModalBody>
          </Modal>
        </Container>
    )
}

export default Profile;