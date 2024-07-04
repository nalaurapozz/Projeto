import mongoose from 'mongoose';

const connectDatabase = () => {

    console.log("Esperando a conexão com o banco...");
    mongoose
        .connect( process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        ).then(() => console.log("MongoDB Conectado!")).catch((error) => console.log(error))
};

export default connectDatabase;