import React, { Component } from 'react';
import { Row } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Gallery.css';


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
        var dealsOfTheDay = this.state.imgs.slice(0,4);
        var dealsOnBrands = this.state.imgs.slice(4,12)
        var categories = this.state.imgs.slice(12,20)
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
        const Grid = (props) => {
            console.log(props)
            return props.array.map(data => {
                return(
                <Card href={data.path} src={data.image}/>
                )
            })
        }
        return(
            <div className='container-fluid'>
                <div className="gallery">

                    <div className="container-fluid">    


                        <h1>DEALS OF THE DAY</h1>

                        <Row style={{"margin-top": "50px;"}}>
                            <Grid array = {dealsOfTheDay}/>                    
                        </Row>

                        <h1>BIGGEST DEALS ON TOP BRANDS</h1>

                        <Row>
                            <Grid array = {dealsOnBrands}/>                        
                        </Row>

                        <h1>CATEGORIES TO BAG</h1>

                        <Row>
                            <Grid array = {categories}/>
                        </Row>

                        
                    </div>
                </div>
            </div>
        )
    } 
}

export default Gallery;