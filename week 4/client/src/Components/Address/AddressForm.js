import React, { Component } from 'react';
import { Form, Input, Button, Label} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { addAddress } from '../Login/action'


class AddressForm extends Component{
    constructor() {
        super();
        this.state = {
            userID : localStorage.getItem('id'),
            name : '',
            doorno : '',
            street : '',
            city : '',
            state : '',
            country : '',
            pincode : '',
            phone: '',
            errors: {},
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            userID : this.state.userID,
            name : this.state.name,
            doorno : this.state.doorno,
            street : this.state.street,
            city : this.state.city,
            state : this.state.state,
            country : this.state.country,
            pincode : this.state.pincode,
            phone : this.state.phone
        }
        addAddress(formData)
    }
    render(){
    
    


    return(
        <Form method="POST">
            <Label>Name</Label>
            <Input placeholder="Enter your Name" required="true" name="name" onChange={this.handleInputChange} />

            <Label>Door Number</Label>
            <Input placeholder="Enter your Door number" required="true" name="doorno" onChange={this.handleInputChange}/>

            <Label>Street</Label>
            <Input placeholder="Enter your Street Name" required="true" name="street" onChange={this.handleInputChange}/>

            <Label>City</Label>
            <Input placeholder="Enter your city" required="true" name="city" onChange={this.handleInputChange}/>

            <Label>State</Label>
            <Input placeholder="Enter your State" required="true" name="state" onChange={this.handleInputChange}/>

            <Label>Country</Label>
            <Input placeholder="Enter your Country" required="true" name="country" onChange={this.handleInputChange}/>

            <Label>Pin-Code</Label>
            <Input placeholder="Enter your Pin-Code" required="true" name="pincode" onChange={this.handleInputChange}/>

            <Label>Phone Number</Label>
            <Input placeholder="Enter your Phone Number" required="true" name="phone" onChange={this.handleInputChange}/>

            <hr></hr>

            <Button type="submit" className="form-sbutton"  onClick ={this.handleSubmit}>Submit</Button>
        </Form>
    )

}
}

export default AddressForm;