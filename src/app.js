import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão feita com o banco com sucesso");
    
})

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", async (req, res) => {
    const buscaLivro = await livro.find({})
    res.status(200).json(buscaLivro)
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Deu bom!")
})

app.get("/livros/:id", (req, res) => {
    const livro = buscarLivro(req.params.id)
    return res.status(200).json(livro)
})

app.put("/livros/:id", (req, res) => {
    const livro = buscarLivro(req.params.id)
    livros[livro].nome = req.body.nome
    res.status(200).json(livros)
})

app.delete("livros/:id", (req, res) => {
    const livro = buscarLivro(req.params.id)
    livros.splice(livro)
    res.status(204).send("Livro deletado com sucesso")
})

export default app