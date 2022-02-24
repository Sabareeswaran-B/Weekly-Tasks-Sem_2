import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import {Row, Card, Breadcrumb, BreadcrumbItem, CardImg, CardTitle } from 'reactstrap'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function ProductList(props){

    var productType = props.match.params.productType;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/${productType}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const sliders = (props) => {
        return props.map(data => {
          return (
            <CardImg src={data.url} alt="imag">
            </CardImg>
          );
        });
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay : false
    };

    const ProductCard = (props) => {
        return(
        <div className="col-lg-3">
            <Card style={{height:"75%",width:"75%", border:"none"}} >
            <a href={props.href} >
                <Slider style={{height:"300px",width:"200px"}} {...settings}>{sliders(props.src)}</Slider>
            </a>
            <CardTitle style={{textAlign:"center"}}>
                <b>{props.brand}</b>
                <p>{props.name}</p>
                <p><b>{props.specialPrice}</b><strike>{props.realPrice}</strike></p>
            </CardTitle>            
            </Card>
        </div>
        )
    }


    const GetProduct = () =>{
        return product.map(data => {
            return(
                <ProductCard src={data.images} href = {`/product/${data.productType}/${data.productID}`}
                brand = {data.brandName} name = {data.productName} specialPrice = {`RS. ${data.specialPrice}`} realPrice = {`Rs. ${data.MRP}`} />
            )
        })
    }

    return(
    <div>
        <Breadcrumb style={{backgroundColor:"white"}}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Clothing</BreadcrumbItem>
        <BreadcrumbItem><b>{productType}</b></BreadcrumbItem>
        </Breadcrumb>
        
        <Row>
            <div className="col-lg-2">
                <h3><b>Filter</b></h3>
            </div>
            <div className="col-lg-10">
                <Row>
                    
                    <GetProduct />
                    
                </Row>
            </div>

        </Row>
    </div>
    )
}


export default ProductList;