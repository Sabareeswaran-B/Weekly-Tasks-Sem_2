import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Gallery.css';
import { Row } from 'reactstrap';


class Gallery extends Component{
    constructor() {
    super();
    this.state = {
        imgs: []
    };
    }
        
    componentDidMount() {
    fetch('http://localhost:9000/gridImage')
    .then(res => res.json())
    .then(imgs => this.setState({ imgs }));
    }
    render(){
        const Grid = (props) => {
            return(
                <div className="row" >
                    {props.children}
                </div>
            )
        }
        const Card = (props) => {
            return(
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <a href={props.href}><img className="card-img-overlay" src={props.src} alt = "Gallery-Images"/>
                        </a>
                    </div>
                </div>
            )
        }
       
        return(
            <div className="gallery">

                <div className="container-fluid">    


                    <h1>DEALS OF THE DAY</h1>

                    <Row style={{"margin-top": "50px;"}}>

                        <Card href="product" src={this.state.imgs[0]}  />
                        
                        <Card href="product" src={this.state.imgs[1]}  />
                        
                        <Card href="product" src={this.state.imgs[2]}  />
                        
                        <Card href="product" src={this.state.imgs[3]}  />
                    
                    </Row>

                    <h1>BIGGEST DEALS ON TOP BRANDS</h1>

                    <Grid>

                        <Card src={this.state.imgs[4]} />
                    
                        <Card src={this.state.imgs[5]} />
                        
                        <Card src={this.state.imgs[6]} />
                        
                        <Card src={this.state.imgs[7]} />
                        
                        <Card src={this.state.imgs[8]} />
                        
                        <Card src={this.state.imgs[9]} />
                        
                        <Card src={this.state.imgs[10]} />
                        
                        <Card src={this.state.imgs[11]} />
                    
                    </Grid>
                    
                    <h1>CATEGORIES TO BAG</h1>

                    <Grid> 

                        <Card href="/product/shirts" src={this.state.imgs[12]} />
                        
                        <Card href="/product/tshirts" src={this.state.imgs[13]} />
                        
                        <Card href="/product/jeans" src={this.state.imgs[14]} />
                        
                        <Card href="/product/mens-shoes" src={this.state.imgs[15]} />
                        
                        <Card href="/product/womens-kurutas" src={this.state.imgs[16]} />
                        
                        <Card href="/product/sarees" src={this.state.imgs[17]} />
                        
                        <Card href="/product/womens-dresses" src={this.state.imgs[18]} />
                        
                        <Card href="/product/womens-heels" src={this.state.imgs[19]} />
                        
                    </Grid>

                </div>

            </div>
        )
    } 
}

export default Gallery;