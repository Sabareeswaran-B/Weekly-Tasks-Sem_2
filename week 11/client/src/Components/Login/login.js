import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Label} from 'reactstrap';
import { loginUser } from './action';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Header.css";


class Login extends Component{
      
    constructor() {
      super();
      this.state = {
          phone: '',
          password: '',
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

    handleSubmit(e) {
      e.preventDefault();
      const user = {
          phone: this.state.phone,
          password: this.state.password,
      }
      if(!user.phone){toast("Enter the phone number")}
      if(!user.password){toast("Enter the Password")}
      loginUser(user);     
      
    }
  
  render(){
    
      return(
        
              <Form method="POST">
                <Label className="form-lable">Phone No</Label>
                <Input type="tel" className="form-input"  name="phone" placeholder="Enter your Phone number" required="required"  onChange={ this.handleInputChange } value={ this.state.phone } />
                <Label className="form-lable">Password</Label>
                <Input type="password" className="form-input" name="password" placeholder="Enter the password" required="required" onChange={ this.handleInputChange } value={ this.state.password } />
                <hr></hr>
                <Button type="submit" className="form-sbutton"  onClick ={ this.handleSubmit }>Submit</Button>
              </Form>

        
                  
      )
  }
}

export default Login
