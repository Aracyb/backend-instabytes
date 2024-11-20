import getTodosOsPosts from "../models/postsModel.js";

export async function listaPosts(req, res){
    // Busca todos os posts do banco de dados
    const posts = await getTodosOsPosts();
    // Retorna os posts como resposta JSON com código de status 200 (OK)
    res.status(200).json(posts);
}
