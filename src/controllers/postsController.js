import {getTodosOsPosts, criarPost,} from "../models/postsModel.js";

export async function listaPosts(req, res){
    // Busca todos os posts do banco de dados
    const posts = await getTodosOsPosts();
    // Retorna os posts como resposta JSON com código de status 200 (OK)
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try {
            const postCriado = await criarPost(novoPost)
            res.status(200).json(postCriado)
    }catch (erro) {
        console.error(erro.message)
        res.status(500).json("error")
    }
}

export async function uploadImagem(req, res){
    const novoPost = req.body;
    try {
            const postCriado = await criarPost(novoPost)
            res.status(200).json(postCriado)
    }catch (erro) {
        console.error(erro.message)
        res.status(500).json("error")
    }
}

