import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Label } from 'reactstrap';
import { signupUser } from './action'
import "../CSS/Header.css";

class Signup extends Component{
  constructor() {
    super();
    this.state = {
        name : '',
        phone: null,
        email: '',
        password: '',
        confirmPassword: '',
        errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = {
        name : this.state.name,
        phone: this.state.phone,
        email : this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }
      if(!user.name){toast("Enter the name")}
      if(!user.email){toast("Enter the email")}
      if(!user.phone){toast("Enter the phone")}
      if(!user.password){toast("Enter the password")}      
      if(!user.confirmPassword){toast("Confirm the Password")}
      signupUser(user);
  }
    render(){
        return(
          <Form method="POST">
            
            <Label className="form-lable">Name</Label>
            <Input type="text" className="form-input" placeholder="Enter your Name" required="required" name="name" onChange={ this.handleInputChange } value={ this.state.name } />
            
            <Label className="form-lable">Email</Label>
            <Input type="email" className="form-control" placeholder="Enter your Email" required="required" name="email" onChange={ this.handleInputChange } value={ this.state.email } />
            
            <Label className="form-lable">Phone No</Label>
            <Input type="tel" className="form-input"  name="phone" placeholder="Enter your Phone number" required="required"  onChange={ this.handleInputChange } value={ this.state.phone } />
            
            <Label className="form-lable">Password</Label>
            <Input type="password" className="form-input" name="password" placeholder="Enter the password" required="required" onChange={ this.handleInputChange } value={ this.state.password } />
            
            <Label className="form-lable">Password</Label>
            <Input type="password" className="form-input" name="confirmPassword" placeholder="Confirm the password" required="required" onChange={ this.handleInputChange } value={ this.state.confirmPassword } />
            <hr></hr>
            <Button type="submit" className="form-sbutton"  onClick ={ this.handleSubmit }>Submit</Button>
          </Form>
        )
    }
}

export default Signup