import livro from "../models/Livro.js"

export default class LivroController {

    static async listarLivros(req, res) {
        try {        
            const buscaLivro = await livro.find({})
            res.status(200).json(buscaLivro)}
        catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO` })
        }
    }

    static async listarLivroPorId(req, res) {
        try {        
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)}
        catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DO LIVRO` })
        }
    }

    static async cadastrarLivro(req, res) {
        try {
        const novoLivro = await livro.create(req.body)
        res.status(201).json({ message: "Criado com sucesso", livro: novoLivro })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO CADASTRAR LIVRO` })
        }
    }

    static async atualizarLivro(req, res) {
        try {        
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "livro atualizado" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO ATUALIZAR O LIVRO` })
        }
    }

    static async deletarLivro(req, res) {
        try {        
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "livro deletado" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA AO DELETAR O LIVRO` })
        }
    }

}