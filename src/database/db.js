const mongoose = require('mongoose');

const connectDatabase = () => {

    console.log("Esperando a conexão com o banco");
    mongoose.connect("mongodb+srv://Mongo:mongo@cluster0.obvksj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => console.log("MongoDB Conectado!")).catch((error) => console.log(error))
};

module.exports = connectDatabase;