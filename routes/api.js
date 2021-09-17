const express = require("express");
const router = express.Router();
const posts = require("../model/posts") //importando o obj 'posts'

router.get("/all", (req, res)=>{ //LEITURA DE TODOS OS POSTS
    res.json(JSON.stringify(posts.getAll())); // Chamando a função 'posts.getAll()' que então retorna 'this.posts'. obs: Lembre-se de colocar os parenteses
})

router.post("/new", express.json(), (req, res)=>{ //GRAVAR NOVO POST. O middleware "express.json()" é necessário, pois será um arquivo 'json' a ser gravado(adicionado) no posts.
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description); //Conectando 'posts.newPost' e enviando como argumento o 'title' e o 'description' para aí então(lá no 'posts.newPost') gravar no obj 'posts'
    res.send("Post Adicionado");
})

module.exports = router;