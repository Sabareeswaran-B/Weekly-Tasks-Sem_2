const { db } = require('../model/photos');
const Photo=require('../model/photos');

exports.findAll =(req, res) => {
    Photo.find()

        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving documents."
            });
        });
};