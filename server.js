import express from "express";
//import routes from "./src/routes/postsRoutes.js";

//app.use(express.static("uploads"))
//routes(app)

const posts = [
    {
        "id": 1,
        "descricao": "Gatinho fofo",
        "imagem": "https://placecats.com/200/300"
      },
      {
        "id": 2,
        "descricao": "Cachorro brincalhão",
        "imagem": "https://placedog.net/200/300"
      },
      {
        "id": 3,
        "descricao": "Gatinho fofo",
        "imagem": "https://placecats.com/200/300"
      },
      {
        "id": 4,
        "descricao": "Cachorro brincalhão",
        "imagem": "https://placedog.net/200/300"
      },
]

const app = express();
app.use(express.json())

// Inicia o servidor na porta 3000 e exibe uma mensagem no console

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscaPostId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {

    const index = buscaPostId(req.params.id)
    res.status(200).json(posts[index]);
});