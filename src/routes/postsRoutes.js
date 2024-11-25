import express from "express";
import multer from "multer";
import { listaPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";



const storage = multer.diskStorage({
    destination: './uploads',  // Make sure this directory exists
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original filename
    },
});

const upload = multer({ storage: storage }) // Use the storage config


const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listaPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;

