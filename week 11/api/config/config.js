require('dotenv').config();

module.exports = {
    url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myntracluster.eyi6a.mongodb.net/myntraproject?retryWrites=true&w=majority`
}

