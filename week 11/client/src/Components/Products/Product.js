import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Product.css'
import { insertBag } from '../Login/action';




function Product(props) {
    var id = props.match.params.id
    var fullPath = props.location.pathname
    var path = fullPath.split("/")
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [size, setSize] = useState([]);
    const [specs, setSpecs] = useState({});
    const [bag, setBag] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:9000/product/${id}`)
        .then(res => getProduct(res.data))
        .catch(err => console.error(`Error : ${err}`))        
    },[])

    const getProduct = (props) => {
        setProduct(props)
        setImages(props.images)
        setSize(props.size)
        setSpecs(props.specs)
        setBag({
            userID : localStorage.getItem('id'),
            productID : props._id,
            qty : '1',
            size : 'S'
        })
    }
    const clickHandeler = () => {
        
        insertBag(bag)
    }

    const Specifications = (props) => {
        return(
            <div className="col-lg-6">
                <small>{props.name}</small>
                <p>{props.value}</p>
                <hr></hr>
            </div>
        )
    }
    const Shirtcard = (props) => {
        return(
            <div className="col-lg-6">
                <div className="shirtcard">
                <div className="card">
                <img className="shirt" src={props.src} alt="Myntra"/>
                </div>
                </div>
            </div>
        )
    }
    const imageCard = () => {
        return images.map(data => {
            return (              
              <Shirtcard src = {data.url}></Shirtcard>                   
            );
        });
    }
    const sizeSelector = () => {
        return size.map(data => {
          return (
            <button type="button" name="button" className="btn size_btn">{data}</button>
          );
        });
    }

    return(
        <div>
           <div className="product-page">
                <div className="container-fluid">
                    <div className="head">
                        <a className="division" href="/">Home</a>
                        <a className="division" href="/">Clothing</a>
                        <a className="division" href="/">{path[1]}</a>
                        <a className="division" href="/">{path[2]}</a><strong>
                        <a className="division" href="/">{product.brandName}</a>                        
                        <a href="/">More by {product.brandName}</a> </strong> 
                    </div>
                    <div className="row">
                        <div className="col-lg-6">

                        <div className="row">                      
                        
                        {imageCard()}
                            
                        </div>


                        </div>
                        <div className="col-lg-6">
                        <div className="details">
                            <div className="container-fluid">
                            <b>
                                <h3>{product.brandName}</h3>
                            </b>
                            <span className="size25">{product.productName}</span>
                            <hr></hr>
                            <b className="size25" style={{"color":"black"}}>RS. {product.specialPrice}</b>
                            <strike className="size25">Rs.({product.MRP})</strike>
                            <span className="offer">({product.offer} OFF)</span><br></br> <br></br>                         
                            <span className="h3">SELECT SIZE</span>                            
                            <br></br>
                            {sizeSelector()}                            
                            <br></br>
                            <br></br>

                            <div className="buton">
                                
                                <div className="addbag" onClick={clickHandeler}>
                                    <span><i className="fa fa-shopping-bag bagicon" style={{"font-size": "25px"}}></i><i><b>ADD TO BAG</b><p>Buy Now Within Early Access</p></i></span>
                                </div>
                                <div className="whishlist">
                                    <i className="fa fa-bookmark"></i>
                                    <b>WISHLIST</b>
                                </div>
                            </div>
                            <br></br>
                            <br></br>

                            <b>BEST OFFERS</b> <span className="fa fa-tag" ></span><br></br>
                            <span><b>Best Price: <span style={{"color":"tomato"}}>Rs. {product.bestPrice}</span></b> </span>
                            <ul>
                                <li>Applicable on: Orders above Rs. 1499 (only on first purchase)</li>
                                <li>Coupon code: <b> MYNTRANEWW500</b> </li>
                                <li>Coupon Discount: Rs. 500 off, excluding tax (check cart for final savings)</li>
                            </ul>
                            <div className="view">
                                <b>10% Instant Discount on Fedral Bank Debit Cards</b>
                                <p>Min spend Rs 2000; Max discount Rs 1000. TCA</p>
                            </div>
                            <hr></hr>

                            <b>PRODUCT DETAILS <span className="glyphicon glyphicon-list-alt"></span></b>
                            <p>{product.brandName} {specs.fabric} {product.productName}.</p>
                            <b>Size & Fit</b>
                            <p>The model (height 6') is wearing a size M.</p>
                            <b>Material & Care</b>
                            <p>{product.fabric}</p>
                            <p>{product.care}</p>
                            <b>Specifications</b>
                            <br></br>
                            <div className="row">
                            <Specifications name = "Sleeve Length" value = {specs.sleeve} />
                            <Specifications name = "Fit" value = {specs.fit} />
                            <Specifications name = "Occation" value = {specs.occation} />
                            <Specifications name = "Fabric" value = {specs.fabric} />
                            <Specifications name = "Length" value = {specs.length} />
                            <Specifications name = "Hemline" value = {specs.hemline} />
                            <Specifications name = "Pocket" value = {specs.pocket} />
                            <Specifications name = "Placket" value = {specs.placket} />
                            </div>  
                            
                            <div>
                            <b>Complete The Look</b>
                            <p>Make a name for yourself this season with this Formal Shirt by Louis Philippe. A fashionable office outfit starts with this black coloured better matched with Grey Pants.</p>
                            <hr></hr>
                            <b>DELIVERY OPTIONS</b>
                            <div className="myntraweb-footer-sprite desktop-delivery sprites-delivery" style={{"float":"right","margin-right":"250px"}}></div>
                            <form autocomplete="off"><input type="text" placeholder="Enter pincode" className="pincode-code" value="" name="pincode" /><input type="submit" className="pincode-check pincode-button" value="Check" /></form>
                            <p>Please enter PIN code to check delivery time & Cash/Card on Delivery Availability <br></br><br></br>
                                Free Delivery on order above Rs. 1199 <br></br>
                                Product Code: <b>{product.productID}</b>
                                <br></br>
                                sold by: <b>{specs.soldBy}</b> ( Supplied By Partner ) <br></br>
                            </p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
)
}

export default Product;
