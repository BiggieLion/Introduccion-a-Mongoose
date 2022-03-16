const mongoose = require('mongoose');

const uri = process.env.MONGO_URI1+process.env.PASSWORD_DB+process.env.MONGO_URI2+process.env.DB+process.env.MONGO_URI3;

const options = {
    useUnifiedTopology:true,
    useNewUrlParser: true
};

mongoose.connect(uri, options)
    .then(db => {console.log("La base de datos se ha conectado")})
    .catch(err => {console.error(err)});

