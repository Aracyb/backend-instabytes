import conectarAoBanco from "../config/dbConfig.js";


// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosOsPosts() {
    // Seleciona o banco de dados "imersao-insta"
    const db = conexao.db("imersao-insta");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-insta");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.insertOne(novoPost);

}

export async function uploadImagem(req, res){
    try {
        console.log(req.file); // *** CRUCIAL DEBUGGING STEP ***

        const imagePath = req.file.path; // Use the full path!
        const novoPost = req.body;
        novoPost.imagem = imagePath; 

        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado); 
    } catch (error) {
        console.error("Upload error:", error); // Better error logging
        res.status(500).json({ error: error.message });
    }
}