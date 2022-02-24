import React, { Component } from 'react';
import logo from '../Image/myntra-icon.png';
import Login from '../Login/login';
import Signup from '../Login/signup';
import { Nav, Navbar, DropdownItem, DropdownMenu, DropdownToggle,  UncontrolledDropdown, Form, Button, Input, ListGroup, ListGroupItem,  Modal, ModalHeader, ModalBody} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Header.css";

class Header extends Component{
  constructor() {
    super();
    this.state = {
       signupmodel: false,
      loginmodel: false
    }
  }
  render(){
    const signuptoggle = () => this.setState({signupmodel : !this.state.signupmodel});        
    const logintoggle = () => this.setState({loginmodel : !this.state.loginmodel});
    const logout = () => {localStorage.clear()}
    
    var userName = localStorage.getItem("name");
      var back = "back !"
      if (!userName){
        userName = ""
        back = "Please Login !"
      }

      const userlogin = () => {
        if (!userName){
          return(
            <div>
              <Button onClick={signuptoggle} style={{marginLeft:"30px",marginRight:"15px"}}>Sign UP</Button>
              <Button onClick={logintoggle}>Log IN</Button>
            </div>
          )
        }
        else{
          return(
            <div>
              <a href='/'>
                <Button style={{"margin-right":"15px"}} onClick={logout} >
                    Log Out
                </Button>
              </a>
            </div>
          )
                   
        }
      }
    return(
      <header>
        <Navbar>
        <Nav className="navdropdown">
        <a href="/"><img src={logo} alt="myntraLOGO" className="logo" /></a>
        <UncontrolledDropdown >
            <DropdownToggle className="a-men"><b>MEN</b></DropdownToggle>
            <DropdownMenu className="dropdown-content men">
              <div className="row">
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>
                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
               

              </div>
              
            </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown >
            <DropdownToggle className="a-women"><b>WOMEN</b></DropdownToggle>
            <DropdownMenu className="dropdown-content women">
            <div className="row">
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>
                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
               

              </div>
            </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown >
            <DropdownToggle className="a-kids"><b>KIDS</b></DropdownToggle>
            <DropdownMenu className="dropdown-content kids">
            <div className="row">
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>
                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
               

              </div>
            </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown >
            <DropdownToggle className="a-home"><b>HOME & LIVING</b></DropdownToggle>
            <DropdownMenu className="dropdown-content home">
            <div className="row">
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>
                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
                <div className="col-lg-3 even">
                  <DropdownItem className="heading">Topwear</DropdownItem>
                  <DropdownItem className="dropdownitem">Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Formal Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Casual Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweat Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">T-Shirts</DropdownItem>
                  <DropdownItem className="dropdownitem">Sweaters</DropdownItem>
                  <DropdownItem className="dropdownitem">Blazers</DropdownItem>
                  <DropdownItem className="dropdownitem">Suits</DropdownItem>
                  <DropdownItem className="dropdownitem">Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Rain Jackets</DropdownItem><hr></hr>
                  <DropdownItem className="heading">Indian & Festive Wear</DropdownItem>
                  <DropdownItem className="dropdownitem">kurtas & Kurta Sets</DropdownItem>
                  <DropdownItem className="dropdownitem">Sherwanis</DropdownItem>
                  <DropdownItem className="dropdownitem">Nehru Jackets</DropdownItem>
                  <DropdownItem className="dropdownitem">Dhotis</DropdownItem>

                </div>
               

              </div>
            </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown >
            <DropdownToggle className="a-discover"><b>DISCOVER</b></DropdownToggle>
            <DropdownMenu className="dropdown-content discover" >
            <ListGroup style={{marginLeft:"40px"}}>
              <ListGroupItem className="list heading" >Shoes Upto 50% Off</ListGroupItem>
              <ListGroupItem className="list heading" >Tshirts Upto 50% Off</ListGroupItem><hr></hr>
              <ListGroupItem className="list heading" >Jeans Upto 50% Off</ListGroupItem>
              <ListGroupItem className="list heading" >Contact US</ListGroupItem><hr></hr>
              <ListGroupItem className="list heading" >Heels & Flats Upto 50% Off</ListGroupItem>              
              <ListGroupItem className="list heading" >Kidswear Upto 50% Off</ListGroupItem><hr></hr>
              <ListGroupItem className="list heading" >Headphones Upto 50% Off</ListGroupItem>
              <ListGroupItem className="list heading" >Watches Upto 50% Off</ListGroupItem><hr></hr>
              <ListGroupItem className="list heading" >Flip Flops Upto 50% Off</ListGroupItem>
              <ListGroupItem className="list heading" >Contact US</ListGroupItem><hr></hr>

            </ListGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
          <Form action="/product" className="input-group search" method="POST">
            <div className="input-group-btn">            
              <Input type="text" className="form-control" placeholder="Search the product, Brand and More" name="search" id="search" />
              <Button className="btn search-button" formmethod="GET"  type="submit">
              <i className="fa fa-search" style={{fontSize : "20px"}} aria-hidden="true"></i>
              </Button>            
            </div>
          </Form>
        
        <nav className="navbar navbar-expand-md" style={{marginTop:"-135px"}}>
          <ul className="nav navbar-nav leftNav">
              <li className="profile nav-item"><a href='/profile' className="nav-link" >
                <span><i className="fa fa-user-o" style={{fontSize : "20px"}} ></i></span><br></br>Profile</a>
                  <br></br>
                  <div className="profile-content">
                      <div id="card1" className="card text-center profileCard">
                          <div className="card-body">
                              <p><b>Welcome {back}</b>
                                  <br>
                                  </br><b>{userName}</b>
                              </p>
                          </div>{userlogin()}
                          <hr></hr>
                            
                          <ListGroup>
                          <a href='/order'><ListGroupItem className="list" >Order</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list" >Wishlist</ListGroupItem></a>
                          <a href='/address'><ListGroupItem className="list" >Address</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list" >Contact US</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list" >Myntra Insider</ListGroupItem></a>
                          </ListGroup>
                          <ListGroup>
                          <a href='/'><ListGroupItem className="list"  >Myntra Credit</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list"  >PhonePe Wallet</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list"  >Coupons</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list"  >Saved Cards</ListGroupItem></a>
                          <a href='/'><ListGroupItem className="list"  >Saved Addresses</ListGroupItem></a>
                          </ListGroup>
                              
                      </div>
                  </div>
              </li>
              <li className="nav-item"> <a href="discover" className="nav-link" ><span><i className="fa fa-bookmark-o" style={{fontSize : "20px"}}></i></span><br></br>Wishlist</a></li>
              <li className="nav-item"> <a href="/bag" className="nav-link" ><span><i className="fa fa-shopping-bag" style={{fontSize : "20px"}}></i></span><br></br>Bag</a></li>
          </ul>
          <Modal isOpen={this.state.signupmodel} toggle={signuptoggle}>
              <ModalHeader toggle={signuptoggle}>SIGN UP</ModalHeader>
              <ModalBody>
              <Signup />
              </ModalBody>
          </Modal>
          <Modal isOpen={this.state.loginmodel} toggle={logintoggle}>
              <ModalHeader toggle={logintoggle}>SIGN IN</ModalHeader>
              <ModalBody>
              <Login />
              </ModalBody>
          </Modal>

        </nav>
        </Nav>
        
        
        </Navbar>
        
        

        

        
        
      </header>
    )
  }


}

export default Header;