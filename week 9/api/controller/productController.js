const Product=require('../model/product');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.productName||!req.body.images) {
        return res.status(400).send({
            message: "Name & image URL Required"
        });
    }

    // Create a Note
    Product.create({
        productID : req.body.productID,
        productName : req.body.productName,
        brandName : req.body.brandName,
        specialPrice : req.body.specialPrice,
        MRP : req.body.MRP,
        offer : req.body.offer,
        bestPrice : req.body.bestPrice,
        size : req.body.size,
        specs : req.body.specs,
        images : req.body.images,
        productType : req.body.productType
    })

    .then(data => {
        res.send([data,{message: "Document inserted successfully!"}]);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    });
};

exports.getProduct = (req,res) => {

    Product.findOne({productID:req.params.productID})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    })
}

exports.getAllProducts = (req,res) => {

    Product.find({productType:req.params.productType})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    })
}


exports.sortAndFiter = (req,res) => {

    const reqQuery = {...req.query}
    delete reqQuery['sort']
    if(reqQuery.brandName){
    const brandArray = reqQuery.brandName.$in.split(',');
    reqQuery.brandName.$in = brandArray
    }
    // console.log(reqQuery)
    // console.log(req.query)

    Product.find(reqQuery)
    .sort(req.query.sort)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    })
}