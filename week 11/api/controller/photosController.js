const { db } = require('../model/photos');
const Photo=require('../model/photos');
const photos = require('./images')


exports.create = (req, res) => {
    // Validate request
    if(!req.body.name||!req.body.image) {
        return res.status(400).send({
            message: "Name & image URL Required"
        });
    }

    // Create a Note
    Photo.create({name:req.body.name,image:req.body.image})

    .then(data => {
        res.send([data,{message: "Document inserted successfully!"}]);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    });
};


exports.getSlider =(req, res) => {

    // res.send(photos)
    var photoArray = [];
    Photo.find({name:"sliderImage"})

        .then(data => {
            // data.forEach(
            //    Element => photoArray.push(Element.image)
            //     )
            // res.send(photoArray)
            res.send(data)            
        })

        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving documents."
            });
        });
};

exports.getGrid =(req, res) => {

    var photoArray = [];
    Photo.find({name:"gridImage"})

        .then(data => {
            // data.forEach(
            //    Element => photoArray.push(Element.image)
            //     )
            // res.send(photoArray)
            res.send(data)            
        })

        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving documents."
            });
        });
};

