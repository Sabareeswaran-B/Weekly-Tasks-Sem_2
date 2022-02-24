import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './Header-Footer/Header';
import Profile from './Profile/Profile';
import Slideimg from './Slider/Slick';
import Gallery from './Gallery/Gallery';
import ProductList from './Products/ProductList';
import ProductPage from './Products/ProductDetails';
import Bag from './Cart/Bag';
import Address from './Address/Address';
import OrderPage from './Order/Order';
import OrderDetails from './Order/OrderDetails';
import Footer from './Header-Footer/Footer';

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/App.css';




class App extends Component {
    render(){
        return(
        <div>
        <ToastContainer 
        autoClose={1500}
        closeOnClick
        draggable
        pauseOnHover={false}
        hideProgressBar={true}
        />
        <Header />     
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Slideimg />
                    <Gallery />
                </Route>
                <Route exact path="/product/:gender/:productType" component={ProductList}></Route>
                <Route exact path="/product/:gender/:productType/:id" component={ProductPage}></Route>
                <Route exact path="/bag" component={Bag}></Route>
                <Route exact path="/bag/address" component={Address}></Route>
                <Route exact path="/address" component={Address}></Route>
                <Route exact path="/order" component={OrderPage}></Route>
                <Route exact path="/order/orderdetails/:id" component={OrderDetails}></Route>
                <Route exact path="/profile" component={Profile}></Route>
            </Switch>
        </Router>
        <Footer />
        </div>
        );
    }
}

export default App;