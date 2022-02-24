import React, { useState } from 'react';
import { Form, Input, Button, Label} from 'reactstrap';
import { toast } from 'react-toastify';
import { updateUser } from '../Login/action';
import "bootstrap/dist/css/bootstrap.min.css";




function ProfileForm(){

    const userId = localStorage.getItem('id')
    const [name, setName] = useState(String)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(Number)
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')


    const handlename = (e) =>{
        setName(e.target.value)
    }
    const handleemail = (e) =>{
        setEmail(e.target.value)
    }
    const handlephone = (e) =>{
        setPhone(e.target.value)
    }
    const handledob = (e) =>{
        setDob(e.target.value)
    }
    const handlegender = (e) =>{
        setGender(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id : userId,
            name : name,
            phone: phone,
            email : email,
            dob : dob,
            gender : gender
        }
        if(!user.name||!user.email||!user.phone){
            if(!user.name){
                toast("Enter the name")
            }
            if(!user.email){
                toast("Enter the email")
            }
            if(!user.phone){
                toast("Enter the phone")
            }
        }else{
        updateUser(user)
        }
    }


    return(        
        <Form method="POST">
            
            <Label className="form-lable">Name</Label>
            <Input type="text" className="form-input" placeholder="Enter your Name" required="required" name="name" onChange={ handlename } value={ name } />
            
            <Label className="form-lable">Email</Label>
            <Input type="email" className="form-control" placeholder="Enter your Email" required="required" name="email" onChange={ handleemail } value={ email } />
            
            <Label className="form-lable">Phone No</Label>
            <Input type="tel" className="form-input"  name="phone" placeholder="Enter your Phone number" required="required"  onChange={ handlephone } />

            <Label className="form-lable">Date of Birth</Label>
            <Input type="date" className="form-input"  name="dob" required="required"  onChange={ handledob } value={ dob } />

            <Label className="form-lable">Gender</Label><br></br>
            <select className="profileSelect" name="gender" onChange={ handlegender } value={ gender } >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>            
            <hr></hr>
            
            <Button type="submit" className="form-sbutton"  onClick ={ handleSubmit }>Submit</Button>
        
        </Form>         
    )
}

export default ProfileForm;
