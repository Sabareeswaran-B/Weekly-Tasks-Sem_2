import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Slideimg from './Slider/Slick';
import ProductList from './Products/ProductList';
import ProductPage from './Products/Product';
import Header from './Header-Footer/Header';
import Footer from './Header-Footer/Footer';
import Gallery from './Gallery/Gallery';
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/App.css';
import Bag from './Cart/Bag';
import Address from './Address/Address';
import OrderPage from './Order/Order';
import OrderDetails from './Order/OrderDetails';
import Profile from './Profile/Profile';



class App extends Component {
    render(){
        return(
        <div>
        <Header />     
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Slideimg />
                    <Gallery />
                </Route>
                <Route exact path="/product/:productType" component={ProductList}></Route>
                <Route exact path="/product/:productType/:id" component={ProductPage}></Route>
                <Route exact path="/bag" component={Bag}></Route>
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