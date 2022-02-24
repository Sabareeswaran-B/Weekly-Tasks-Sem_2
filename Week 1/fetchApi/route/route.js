module.exports = (app) => {
    const Photos = require('../controller/photosController');

    app.get('/findAll', Photos.findAll);
    
}


