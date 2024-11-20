import express from "express";
import { listaPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON
app.use(express.json());
// Define a rota para buscar todos os posts
app.get("/posts", listaPosts);
}

export default routes;