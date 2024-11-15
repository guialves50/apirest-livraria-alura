import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão feita com o banco com sucesso");
    
})

const app = express()
routes(app)

export default app