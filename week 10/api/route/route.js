module.exports = (app) => {
    const Photos = require('../controller/photosController');
    const Product = require('../controller/productController');
    const User = require('../Controller/userController');
    const Bag = require('../Controller/bagController');
    const Order = require('../Controller/orderController');
    const Address = require('../Controller/addressController');
    const  validate = require('../Middleware/validation');
    const passport = require('passport');
    require('../Middleware/auth')(passport)

    //insert images to image database(admin)
    app.post('/photos/create', Photos.create);

    //get images for carousel
    app.get('/sliderImage', Photos.getSlider);

    //get images for gallary page
    app.get('/gridImage', Photos.getGrid)

    //register a new user
    app.post('/signup',validate.signupValidation,User.signup);

    //login an existing user
    app.post('/login',validate.loginValidation,User.login);

    //get profile
    app.get('/user/:id',passport.authenticate('jwt', {session : false}),User.getprofile);

    //update user
    app.put('/user/update/:id',passport.authenticate('jwt', {session : false}),User.updateUser);

    //create a product(admin)
    app.post('/product/create', Product.create);
    
    //get a product with productID
    app.get('/product/:productID', Product.getProduct);

    //get all products with productType
    app.get('/:productType', Product.getAllProducts);

    //sort and get all products with a filter
    app.get('/shirts/sort', Product.sortAndFiter)

    //insert a product into a user's bag
    app.post('/bag/create',passport.authenticate('jwt', {session : false}), Bag.create);

    //get all products inside a user's bag
    app.get('/bag/getBag/:userID',passport.authenticate('jwt', {session : false}), Bag.getBag);

    //remove a product from a user's bag
    app.delete('/bag/remove/:id',passport.authenticate('jwt', {session : false}), Bag.remove);

    //update size & qty
    app.put('/bag/update/:id', Bag.update);

    //create a new address
    app.post('/address/create',passport.authenticate('jwt', {session : false}), Address.create);

    //get all addresses of a user
    app.get('/address/:userID',passport.authenticate('jwt', {session : false}), Address.find);

    //delete an address 
    app.put('/address/remove/:id', Address.remove);

    //place order
    app.post('/order/create',passport.authenticate('jwt', {session : false}), Order.create);

    //get all orders of a user
    app.get('/order/getAllOrder/:userID',passport.authenticate('jwt', {session : false}), Order.getAllOrder);

    //get a order by id 
    app.get('/order/get/:id/:userID',passport.authenticate('jwt', {session : false}),
     Order.getOrderById);

}


