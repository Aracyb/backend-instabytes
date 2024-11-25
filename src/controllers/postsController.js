import {getTodosOsPosts, criarPost,} from "../models/postsModel.js";

export async function listaPosts(req, res){
    // Busca todos os posts do banco de dados
    const posts = await getTodosOsPosts();
    // Retorna os posts como resposta JSON com código de status 200 (OK)
    res.status(200).json(posts);
}

// Função de controle de novo post sem imagem
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

// Função de controle de upload de imagem e post
export async function uploadImagem(req, res){
    try {
        
       console.log(req.file);
        const imagePath = req.file.filename; // Get the image path from multer
        const novoPost = req.body;
        
        novoPost.imagem = imagePath; // Add the image path to the post data

        const postCriado = await criarPost(novoPost); // Pass the updated post data
        res.status(200).json(postCriado); 
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json("error");
    }
}

