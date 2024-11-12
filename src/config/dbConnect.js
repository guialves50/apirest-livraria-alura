
import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://guialves:admin@cluster0.t0us6.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}

export default conectaNaDatabase