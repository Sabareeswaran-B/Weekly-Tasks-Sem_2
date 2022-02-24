const mongoose = require('mongoose');

const PhotosSchema = mongoose.Schema({
    name : String,
    image : String
}, {
    timestamps: true
});

module.exports = mongoose.model('photos', PhotosSchema);