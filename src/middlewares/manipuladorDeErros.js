import mongoose from "mongoose";

function manipuladorDeErros(erro, req, res, next) {
    if(erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "UM OU MAIS DADOS FORNECIDOS ESTÃO INCORRETOS"})
    } else {
        res.status(500).send({message: "ERRO INTERNO DO SERVIDOR"})
    }
}

export default manipuladorDeErros;