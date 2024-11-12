import express from "express";
const app = express()
app.use(express.json())

const livros = [
    {
        "id": 1,
        "nome": "O Senhor dos Aneis"
    },
    {
        "id": 2,
        "nome": "Harry Potter"
    }
]

function buscarLivro(id) {
    return livros.filter((livro) => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
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