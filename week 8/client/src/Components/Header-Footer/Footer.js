import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Footer.css";




class Footer extends Component{
        render(){
            return(
           
              <footer className="jumbotron">
                  <div className="row">
                    <div className="col-lg-2 col-md-6">
                        <p>ONLINE SHOPPING</p>
                        <ul className="list-unstyled">
                            <a href="men"><li>Men</li></a>
                            <a href="women"><li>Women</li></a>
                            <a href="kids"><li>Kids</li></a>
                            <a href="home-and-living"><li>Home & Living</li></a>
                            <a href="discover"><li>Discover</li></a>
                            <a href="Gift-Cards"> <li>Gift Card</li></a>
                            <a href="Myntra-Insider"><li>Myntra Insider <span className="label label-danger"> New </span></li></a>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <p>USEFUL LINKS</p>
                        <ul className="list-unstyled">
                            <a href="Contact-Us"><li>Contact Us</li></a>
                            <a href="FAQ"><li>FAQ</li></a>
                            <a href="T&C"><li>T&C</li></a>
                            <a href="Terms Of Use"><li>Terms Of Use</li></a>
                            <a href="Track Orders"><li>Track Orders</li></a>
                            <a href="Shipping"> <li>Shipping</li></a>
                            <a href="Cancellation"> <li>Cancellation</li></a>
                            <a href="Returns"> <li>Returns</li></a>
                            <a href="Whitehat"> <li>Whitehat</li></a>
                            <a href="Blog"> <li>Blog</li></a>
                            <a href="Careers"> <li>Careers</li></a>                            
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
                        <div className="row">

                            <img className="footerImage" src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt ="Google Play"/>

                            <img className="footerImage" src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt = "Apple App Store"/>
                        
                        </div><br></br>
                        <div >
                            <p>KEEP IN TOUCH</p>
                            <i className="fa fa-facebook-official facebook"></i>
                            <i className="fa fa-twitter twitter"></i>
                            <i className="fa fa-youtube-play youtube"></i>
                            <i className="fa fa-instagram instagram" ></i>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                        <div className="desktop-section"><div className="myntraweb-footer-sprite desktop-original sprites-original"></div><div><strong>100% ORIGINAL </strong> guarantee for all products at myntra.com </div></div>
                        </div>
                        <div >
                        <div className="desktop-section"><div className="myntraweb-footer-sprite desktop-return sprites-return"></div><div><strong>Return within 30days </strong>of receiving your order</div></div>
                        </div>
                        <div >
                        <div className="desktop-section"><div className="myntraweb-footer-sprite desktop-delivery sprites-delivery"></div><div><strong>Get free delivery </strong>for every order above Rs. 1199</div></div>
                        </div>
                    </div>
                    <div className="row">
                        <p className="paragrah">POPULAR SEARCHES</p>
                        <p className="popularSearches">
                            <a href="nike">Nike</a> <a href="nike">Puma</a> <a href="nike">Adidas</a> <a href="nike">Fila</a> <a href="nike">Lee</a> <a href="nike">United Colors of Benetton</a> <a href="nike">Wrangler</a> <a href="nike">Fastrack</a> <a href="nike">Woodland</a> <a href="nike">Yepme</a> <a href="nike">Levis</a> <a href="nike">Tommy Hilfiger</a> <a href="nike">peter-england</a> <a href="nike">fabindia</a> <a href="nike">nike
                                shoes</a> <a href="nike">tops</a> <a href="nike">shirts</a> <a href="nike">jackets</a> <a href="nike">myntra coupons</a> <a href="nike">kurtis</a> <a href="nike">shoes</a> <a href="nike">tunics</a> <a href="nike">dresses</a> <a href="nike">Watches</a> <a href="nike">saree</a> <a href="nike">kurtas</a> <a href="nike">bags</a> <a href="nike">T-shirts</a> <a href="nike">designer saree</a>
                            <a href="nike">sunglasses</a> <a href="nike">jeans</a> <a href="nike">trousers</a> <a href="nike">adidas shoes</a> <a href="nike">casual shoes</a> <a href="nike">sports shoes</a> <a href="nike">fastrack watches</a> <a href="nike">ethnic wear</a> <a href="nike">woodland-shoes</a> <a href="nike">mobile app</a> <a href="nike">puma shoes</a> <a href="nike">accessories</a> <a href="nike">anarkali suit</a>
                             <a href="nike">running shoes</a> <a href="nike">reebok</a> <a href="nike">formal wear</a> <a href="nike">cat</a> <a href="nike">jewellery</a>
                        </p>

                    </div>
                  </div>
              </footer>

            
        )
    }
}

export default Footer