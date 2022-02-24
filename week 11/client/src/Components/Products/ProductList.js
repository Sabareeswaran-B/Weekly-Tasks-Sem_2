import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import {Row, Card, Breadcrumb, BreadcrumbItem, CardImg, CardTitle, Button } from 'reactstrap'
import { inArray } from 'jquery';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function ProductList(props){

    // var productType = props.match.params.productType;
    const [productType , setProductType] = useState(props.match.params.productType);
    const [productTypeFilter, setProductTypeFilter] = useState([])
    const [gender , setGender] = useState(props.match.params.gender);
    const [product, setProduct] = useState([]);
    const [brandArrayFilter, setBrandArrayFilter] = useState([]);
    const [filter, setFilter] = useState(["0","10000"]);
    const [sort, setSort] = useState('');

    const getProduct = (props) => {
        setProduct(props)
        setBrandArrayFilter(props)
    }
    const getProductWithGender = (props) => {
        setProduct(props)
        setBrandArrayFilter(props)
        setProductTypeFilter(props)
    }

    useEffect(() => {
        axios.get(`http://localhost:9000/shirts/sort?productType=${productType}`)
        .then(res => getProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
        axios.get(`http://localhost:9000/shirts/sort?gender=${gender}`)
        .then(res => setProductTypeFilter(res.data))
        .catch(err => console.error(`Error : ${err}`))
    },[])

    const genderHandler = (e) => {
        setGender(e.target.value)
        axios.get(`http://localhost:9000/shirts/sort?gender=${e.target.value}`)
        .then(res => getProductWithGender(res.data))
        .catch(err => console.error(`Error : ${err}`))
    }
    const productTypeHandler = (e) => {
        setProductType(e.target.value)
        axios.get(`http://localhost:9000/shirts/sort?productType=${e.target.value}&gender=${gender}&specialPrice[$lte]=${filter[1]}&specialPrice[$gte]=${filter[0]}&sort=${sort}`)
        .then(res => getProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
    }
    const priceHandler = (e) => {
        const price = e.target.value.split(',');
        console.log(`http://localhost:9000/shirts/sort?productType=${productType}&gender=${gender}&specialPrice[$lte]=${price[1]}&specialPrice[$gte]=${price[0]}&sort=${sort}`)
        setFilter(price)
        axios.get(`http://localhost:9000/shirts/sort?productType=${productType}&gender=${gender}&specialPrice[$lte]=${price[1]}&specialPrice[$gte]=${price[0]}&sort=${sort}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
    }
    const sortHandler = (e) => {
        setSort(e.target.value)
        axios.get(`http://localhost:9000/shirts/sort?productType=${productType}&gender=${gender}&specialPrice[$lte]=${filter[1]}&specialPrice[$gte]=${filter[0]}&sort=${e.target.value}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))
    }
    
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
                <p><b>{props.specialPrice}  </b><strike>  ({props.realPrice}) </strike></p>
            </CardTitle>            
            </Card>
        </div>
        )
    }


    const GetProduct = () =>{
        return product.map(data => {
            return(
                <ProductCard src={data.images} 
                href = {`/product/${data.gender}/${data.productType}/${data.productID}`}
                brand = {data.brandName} 
                name = {data.productName} 
                specialPrice = {`RS. ${data.specialPrice}`} 
                realPrice = {`Rs. ${data.MRP}`} />
            )
        })
    }

    const BrandFilter = () => {
        let duplicateArray = [];
        return brandArrayFilter.map(data => {
            if(inArray(data.brandName, duplicateArray) === -1 ){
                duplicateArray.push(data.brandName)
                return(
                    <div>
                        <lable><input type="checkbox" name='brandName' value={data.brandName} /> {data.brandName}</lable>
                    </div>
                )
            } else {
                return null
            }                      
        })
    }

    const GetProductType = () => {
        let duplicateArray = [];
        if(productTypeFilter){
            return productTypeFilter.map(data => {
                if(inArray(data.productType, duplicateArray) === -1 ){
                    duplicateArray.push(data.productType)
                    return(
                        <div>
                            <lable><input type="radio" name='productType' value={data.productType} onClick={productTypeHandler} /> {data.productType}</lable>
                        </div>
                    )
                } else {
                    return null
                }                
            })
        } else {
            return(
                <div></div>
            )
        }
    }

    return(
    <div className='container-fluid'>
        <Breadcrumb style={{backgroundColor:"white"}}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Clothing</BreadcrumbItem>
        <BreadcrumbItem><b>{productType}</b></BreadcrumbItem>
        </Breadcrumb>
        
        <Row>
            <div className="col-lg-2">
                <Row>
                <div className="col-lg-6">
                <h3><b>Filter</b></h3>
                </div>
                <div className="col-lg-6">
                <a href={`/product/${gender}/${productType}`}><Button className="clrbtn">Clear All</Button></a>
                </div>
                </Row>
                <lable><input type="radio" name='gender' value="men" onClick={genderHandler} /> Men</lable><br></br>
                <lable><input type="radio" name='gender' value="women" onClick={genderHandler} /> Women</lable><br></br>
                <lable><input type="radio" name='gender' value="kids" onClick={genderHandler} /> Kids</lable><hr></hr>

                <GetProductType /><hr></hr>
                
                <h6><b>Price</b></h6>
                <lable><input type="radio"  name="specialPrice" value="0,500" onClick={priceHandler}/> Below 500</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="0,1000" onClick={priceHandler}/> Below 1000</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="1000,10000" onClick={priceHandler}/> Above 1000</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="500,1000" onClick={priceHandler}/> 500-1000</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="1000,1200" onClick={priceHandler}/> 1000-1200</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="1200,1500" onClick={priceHandler}/> 1200-1500</lable><br></br>
                <lable><input type="radio"  name="specialPrice" value="1500,2000" onClick={priceHandler}/> 1500-2000</lable><br></br>
                <hr></hr>
                <h6><b>Brand Name</b></h6>
                <BrandFilter /><hr></hr>
            </div>
            <div className="col-lg-10">
            <h5 style={{display:"inline"}}><b>Sort By :</b></h5>
            <select onChange={sortHandler} style={{display:"inline", marginLeft:"20px", width:"150px", height:"28px", borderRadius:"7%", borderColor:"grey"}}>
                <option value="specialPrice">Price : low to high</option>
                <option value="-specialPrice">Price : high to low</option>
            </select>
            <br></br>
            <hr></hr>
                <Row>
                    
                    <GetProduct />
                    
                </Row>
            </div>

        </Row>
    </div>
    )
}


export default ProductList;