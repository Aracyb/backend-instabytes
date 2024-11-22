import express from "express";
import multer from "multer";
import { listaPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })

const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON
app.use(express.json());
// Define a rota para buscar todos os posts
app.get("/posts", listaPosts);
app.post("/posts", postarNovoPost)
app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;